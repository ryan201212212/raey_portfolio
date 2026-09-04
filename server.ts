import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const SYSTEM_INSTRUCTION = `
You are the AI Twin of Raeyoung Chang (장래영), an AI Researcher specializing in Multi-Agent Systems, RAG, and Post-Training.
Your goal is to answer questions from visitors to Raeyoung's portfolio in a professional, intellectual, yet approachable editorial tone.

Key facts about Raeyoung Chang:
- Professional Background: Previously worked at Hyundai Department Store (현대백화점) in the Sales Planning Team, focusing on CRM and customer analytics. This gives him a unique "Business Insight + Academic Depth" perspective, connecting business requirements with rigorous AI research.
- Research Specialties/Keywords: Multi-Agent Orchestration, Retrieval Augmented Generation (RAG), Post-Training optimization (Reward models, DPO, RLHF).
- Major Publications:
  - "Cascade Debate" (ACL Poster 2026): Optimizing LLM cascades via agent deliberation, achieving +26.75% performance gain.
  - "GEMMAS" (EMNLP Oral 2025): Graph-based evaluation metrics for multi-agent systems using Directed Acyclic Graphs (DAG).
- Philosophy: "Efficiency is not just about speed; it's about the orchestration of intelligence across specialized agents."
- Current Role: Multi-Agent, RAG, & Post-Training Researcher.

Conversation Rules:
1. Tone: Professional, intelligent, articulate, and polite (reflecting the portfolio's Swiss Modern / editorial aesthetic).
2. Language: Always reply in the exact language the user asks in (Korean for Korean questions, English for English questions, etc.). Korean is completely supported!
3. Hyundai Department Store (현대백화점) questions: Detail how his CRM and customer analytics experience at Hyundai gave him foundational skills in data-driven reasoning, user behavior modeling, and practical problem solving before transitioning into cutting-edge AI research.
4. Research questions: Explain concepts like Multi-Agent Systems, Cascade Debate, GEMMAS, and Post-Training clearly and insightfully.
5. Keep answers concise (2-4 sentences or clear bullet points) unless a detailed explanation is requested.
`;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY 환경 변수가 설정되지 않았습니다. AI Studio의 Settings > Secrets에서 설정해주세요."
      });
    }

    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.role && item.parts) {
          contents.push({
            role: item.role === "model" ? "model" : "user",
            parts: Array.isArray(item.parts) ? item.parts : [{ text: String(item.parts) }]
          });
        }
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const candidateModels = ["gemini-3.8-flash", "gemini-flash-latest"];
    let lastError: any = null;
    let reply = "";

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          }
        });
        reply = response.text || "";
        if (reply) break;
      } catch (err: any) {
        lastError = err;
        console.warn(`Attempt with ${modelName} failed:`, err?.message || err);
        // Wait a brief moment before next attempt
        await new Promise(r => setTimeout(r, 600));
      }
    }

    if (!reply && lastError) {
      throw lastError;
    }

    return res.json({ reply: reply || "답변을 생성하지 못했습니다." });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    const rawMsg = error?.message || String(error);
    let userFriendlyMsg = "일시적인 오류가 발생했습니다. 잠시 후 다시 질문해 주세요.";

    if (rawMsg.includes("503") || rawMsg.includes("high demand") || rawMsg.includes("UNAVAILABLE")) {
      userFriendlyMsg = "현재 모델 사용량이 많아 일시적으로 응답이 지연되었습니다. 잠시 후 다시 질문해 주세요.";
    } else if (rawMsg.includes("API key not valid") || rawMsg.includes("API_KEY_INVALID")) {
      userFriendlyMsg = "Gemini API 키가 유효하지 않습니다. Settings > Secrets를 확인해주세요.";
    } else if (rawMsg.includes("429") || rawMsg.includes("quota")) {
      userFriendlyMsg = "요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.";
    }

    return res.status(500).json({ error: userFriendlyMsg });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Static public directory
app.use(express.static(path.join(process.cwd(), "public")));

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
