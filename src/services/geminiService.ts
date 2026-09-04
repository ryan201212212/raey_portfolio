export interface ChatHistoryItem {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export async function askRaeyoungAI(message: string, history: ChatHistoryItem[] = []): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Chat API error:", data);
      if (data.error) {
        return data.error;
      }
      return `요청 처리 중 오류가 발생했습니다 (${response.status}). 다시 시도해주세요.`;
    }

    return data.reply || "답변을 받아오지 못했습니다.";
  } catch (error: any) {
    console.error("Gemini API Network Error:", error);
    return "서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.";
  }
}
