/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Database, 
  Globe, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  ArrowRight,
  Zap,
  Target,
  Layers,
  Cpu,
  TrendingUp,
  X,
  Sparkles
} from "lucide-react";
import { AIChat } from './components/AIChat';

const SectionHeader = ({ title, subtitle, className = "" }: { title: string; subtitle?: string; className?: string }) => (
  <div className={`mb-12 ${className}`}>
    <span className="editorial-label">{subtitle || "Section"}</span>
    <h2 className="text-4xl md:text-5xl font-bold serif border-b border-ink/10 pb-4">{title}</h2>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-ink/5">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="font-display font-bold text-2xl tracking-tighter">장래영</span>
        <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 pt-1">
          Raeyoung Chang — Portfolio
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {["Capabilities", "Experience", "Publications", "Projects"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[11px] font-bold uppercase tracking-wider hover:text-stone-500 transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="mailto:icanry@naver.com"
          className="px-4 py-2 bg-ink text-surface font-bold text-[10px] uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
);

const Hero = ({ onSelectFrontiers }: { onSelectFrontiers: () => void }) => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-8"
        >
          <div className="editorial-label flex items-center gap-2">
            <Target className="w-3 h-3" />
            Curriculum Vitae
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-[0.85] tracking-tight serif">
            Exploring the <span className="relative inline-flex items-center">
              <button 
                onClick={onSelectFrontiers} 
                className="italic hover:text-stone-400 decoration-ink/10 underline underline-offset-8 transition-all cursor-pointer relative z-10"
              >
                Frontiers
              </button>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-16 -right-40 w-56 md:w-80 aspect-video editorial-border overflow-hidden shadow-2xl z-0 hidden lg:block rotate-3 hover:rotate-0 transition-transform duration-500"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                >
                  <source src="https://raw.githubusercontent.com/ryan201212212/raey_portfolio/efcecd2589549fddd9264ce43ce42d7a56606a78/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%A1%E1%86%BC%20%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%86%E1%85%AE%E1%86%AF%201.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </span> of AI.
          </h1>
          <p className="text-xl md:text-2xl italic serif text-stone-600 mb-10 max-w-2xl leading-relaxed">
            Multi-Agent, RAG, & Post-Training Researcher
          </p>
          <div className="flex flex-wrap gap-8 items-center border-t border-ink/10 pt-10">
            <div className="max-w-md">
              <p className="text-sm leading-relaxed text-justify text-stone-700">
                현대백화점 판매기획팀에서의 CRM 경험을 바탕으로, 인공지능의 효율성과 협업 구조를 연구하고 있습니다. 
                데이터 분석 실무와 학술적 깊이를 결합한 차세대 AI 시스템을 지향합니다.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="editorial-label mb-0">Contact & Research</p>
              <div className="flex gap-4">
                <a href="mailto:icanry@naver.com" className="text-xs decoration-ink/20 underline underline-offset-4 font-semibold hover:text-stone-500">Email</a>
                <a href="https://arxiv.org/abs/2604.12262" target="_blank" rel="noreferrer" className="text-xs decoration-ink/20 underline underline-offset-4 font-semibold hover:text-stone-500">Cascade Debate</a>
                <a href="https://arxiv.org/abs/2507.13190" target="_blank" rel="noreferrer" className="text-xs decoration-ink/20 underline underline-offset-4 font-semibold hover:text-stone-500">GEMMAS</a>
              </div>
            </div>
          </div>
          <AIChat />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="md:col-span-4"
        >
          <div className="p-1 px-1 flex flex-col gap-6">
             <div className="aspect-[3/4] bg-stone-200 editorial-border overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://raw.githubusercontent.com/ryan201212212/raey_portfolio/3d1516d1b84e752490a1141be21d8fd61e6be200/Photo.png" 
                  alt="Raeyoung Chang" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none select-none">
                  <div className="text-[60px] md:text-[80px] font-black opacity-5 leading-none serif text-stone-900 text-center">
                    EDITORIAL<br />RESEARCH
                  </div>
                </div>
             </div>
             <div>
                <span className="editorial-label">Abstract</span>
                <p className="text-[11px] leading-relaxed text-stone-500 italic">
                  "Efficiency is not just about speed; it's about the orchestration of intelligence across specialized agents."
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CoreCompetencies = () => (
  <section id="capabilities" className="py-24 bg-surface border-t border-ink/10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Core Competencies" subtitle="Domain Areas" />
      
      <div className="grid md:grid-cols-3 gap-0 border-l border-ink/10">
        {[
          {
            title: "CRM 업무 경험",
            icon: <Database className="w-4 h-4" />,
            desc: "현대백화점 판매기획팀에서 고객 데이터를 분석하고 프로젝트를 리딩한 실무 경험 보유"
          },
          {
            title: "글로벌 공동 연구",
            icon: <Globe className="w-4 h-4" />,
            desc: "토론토 대학교 파견 및 LG Toronto AI LAB, Lorex Technology 등 글로벌 기업과의 협업 수행"
          },
          {
            title: "우수한 연구 실적",
            icon: <FileText className="w-4 h-4" />,
            desc: "EMNLP Oral 게재 및 ACL Poster 게재 등 세계적인 AI 학회 논문 투고 경험"
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-10 border-r border-b border-ink/10 hover:bg-white transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-stone-400">{item.icon}</div>
              <h3 className="text-lg font-bold serif italic">{item.title}</h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <SectionHeader title="Academic Record" subtitle="Education" className="mb-10" />
          <div className="space-y-12">
            {[
              {
                school: "서강대학교 컴퓨터공학과",
                degree: "석사 졸업 예정 (2026.08)",
                desc: "Research focus on Multi-Agent Deliberation"
              },
              {
                school: "University of Toronto",
                degree: "수료 (AI 장학생 선발, 2025.07)",
                desc: "Global AI Leadership Program"
              },
              {
                school: "건국대학교 기술경영학과",
                degree: "학사 졸업 (2019.02)",
                desc: "Technology & Business Management"
              }
            ].map((edu, idx) => (
              <div key={idx} className="group">
                <h4 className="text-xl font-bold serif group-hover:italic transition-all">{edu.school}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mt-2">{edu.degree}</p>
                <div className="editorial-divider !my-4 h-px" />
                <p className="text-[11px] text-stone-500 italic">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Professional Stance" subtitle="Experience" className="mb-10" />
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                company: "현대백화점 판매기획팀",
                role: "Senior CRM Planner",
                period: "2019.02 — 2022.05",
                details: "Customer behavior analysis and marketing orchestration."
              },
              {
                company: "LG Toronto AI LAB",
                role: "Joint Research Researcher",
                period: "2025.01 — Present",
                details: "Efficiency optimization for large-scale vision models."
              },
              {
                company: "Bosch",
                role: "Overseas Sales Intern",
                period: "2018.07 — 2018.12",
                details: "Global market analysis and sales strategy support."
              }
            ].map((work, idx) => (
              <div key={idx} className="p-6 border-l-2 border-ink bg-surface flex flex-col">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg font-bold serif">{work.company}</h4>
                  <span className="text-[10px] font-mono text-stone-400">{work.period}</span>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">{work.role}</p>
                <p className="text-xs text-stone-600 leading-relaxed italic">{work.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Publications = ({ onSelectPaper }: { onSelectPaper: (key: string) => void }) => (
  <section id="publications" className="py-24 bg-surface border-y border-ink/10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Publication History" subtitle="Peer Reviewed" />

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b-2 border-ink">
            <tr className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
              <th className="py-4 px-2">Date</th>
              <th className="py-4 px-2">Venue</th>
              <th className="py-4 px-2">Contribution</th>
              <th className="py-4 px-2 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {[
              { date: "2026.04", journal: "ACL Poster", role: "1st Co-author", status: "Published", highlight: true, key: "cascade" },
              { date: "2026.02", journal: "IEEE Access", role: "1st Co-author", status: "Reviewing", highlight: false },
              { date: "2025.11", journal: "EMNLP Oral", role: "1st Co-author", status: "Published", highlight: true, key: "gemmas" },
              { date: "2024.12", journal: "KIISE Conference", role: "2nd Author", status: "Published", highlight: false },
            ].map((pub, idx) => (
              <tr key={idx} className="group hover:bg-white transition-colors">
                <td className="py-6 px-2 font-mono text-xs text-stone-400">{pub.date}</td>
                <td className="py-6 px-2">
                  {pub.key ? (
                    <button 
                      onClick={() => onSelectPaper(pub.key!)}
                      className={`text-sm font-bold serif group-hover:italic text-left transition-all cursor-pointer ${pub.highlight ? 'text-ink' : 'text-stone-500'} hover:text-stone-400`}
                    >
                      {pub.journal}
                    </button>
                  ) : (
                    <span className={`text-sm font-bold serif group-hover:italic ${pub.highlight ? 'text-ink' : 'text-stone-500'}`}>
                      {pub.journal}
                    </span>
                  )}
                </td>
                <td className="py-6 px-2 text-xs font-semibold text-stone-600">{pub.role}</td>
                <td className="py-6 px-2 text-right">
                  <span className={`text-[9px] font-bold uppercase border px-2 py-0.5 ${
                    pub.status === "Published" ? 'border-ink text-ink' : 'border-stone-300 text-stone-400'
                  }`}>
                    {pub.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Projects = ({ onSelectPaper }: { onSelectPaper: (key: string) => void }) => (
  <section id="projects" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Research & Projects" subtitle="Case Studies & Demos" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            id: "01",
            title: "Cascade Debate",
            subtitle: "Multi-Agent Deliberation for Cost-Aware LLM Cascades",
            impact: "+26.75% SOTA",
            summary: "Implementing Multi-Agent consensus steps within model cascades to reduce token waste and improve decision accuracy.",
            key: "cascade"
          },
          {
            id: "02",
            title: "FASTe Framework",
            subtitle: "Spatio-Temporal Efficiency for Video Anomaly Detection",
            impact: "-95% Parameter Count",
            summary: "Re-architecting video feature extraction using X3D backbones for real-time edge processing efficiency."
          },
          {
            id: "03",
            title: "GEMMAS",
            subtitle: "Graph-based Evaluation Metrics for Multi-Agent Systems",
            impact: "Interpretability+",
            summary: "Proposing novel DAG-based metrics (IDS/UPR) to quantify information diversity and path efficiency in agent swarms.",
            key: "gemmas"
          },
          {
            id: "04",
            title: "Crypto Dashboard",
            subtitle: "Real-Time Crypto Analytics & Reporting Automation",
            impact: "Live Demo",
            summary: "Upbit 실시간 시세 수집 및 이동평균선(MA5/20), RSI 기술 지표 분석과 자동화 리포팅을 구현한 금융 데이터 대시보드.",
            key: "crypto",
            demoUrl: "/projects/crypto-dashboard/index.html#KRW-BTC"
          }
        ].map((project) => (
          <div key={project.id} className="group flex flex-col justify-between p-6 border border-ink/10 hover:border-ink/30 transition-all bg-surface/50 hover:bg-surface">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="editorial-label">Project {project.id}</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${project.demoUrl ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20' : 'bg-accent/20 text-ink'}`}>
                  {project.impact}
                </span>
              </div>
              <h3 className="text-xl font-bold serif mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3">{project.subtitle}</p>
              <p className="text-xs text-stone-600 leading-relaxed mb-6">
                {project.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-ink/10 flex flex-col gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-3.5 py-2.5 bg-ink text-surface text-[11px] font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors rounded-sm shadow-sm"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Demo
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.key && (
                <button 
                  onClick={() => project.key && onSelectPaper(project.key)}
                  className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-left w-full transition-all cursor-pointer ${project.demoUrl ? 'text-stone-500 hover:text-ink py-1' : 'text-ink hover:text-stone-500 py-1.5'}`}
                >
                   <span>{project.demoUrl ? "Project Details" : "Read Thesis"}</span>
                   <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              {!project.key && !project.demoUrl && (
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 py-1.5">
                  <span>Archived Project</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-ink text-surface py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        <div className="max-w-xl">
          <p className="editorial-label text-accent mb-6">Final Word</p>
          <h2 className="text-5xl md:text-7xl font-bold serif italic mb-8 leading-tight">
            Intelligence <br />Through Synthesis.
          </h2>
          <p className="text-stone-400 text-lg serif italic leading-relaxed">
            "Bridging the structural gap between human commerce and autonomous reasoning."
          </p>
        </div>
        
        <div className="shrink-0 w-full md:w-80">
          <div className="border border-surface/20 p-8">
            <p className="editorial-label text-surface/50">Contact Inquiries</p>
            <p className="text-xl font-bold serif mb-6">icanry@naver.com</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between text-xs font-bold uppercase border-b border-surface/20 pb-2 group">
                Research Papers <ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" />
              </a>
              <a href="#" className="flex items-center justify-between text-xs font-bold uppercase border-b border-surface/20 pb-2 group">
                CRM Experience <ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-2xl tracking-tighter">장래영</span>
          <span className="text-[10px] font-mono text-surface/30">V.2026.04.27</span>
        </div>
        <p className="text-[10px] uppercase font-semibold tracking-widest text-surface/40">
          © Raeyoung Chang — Researcher & CRM Expert
        </p>
      </div>
    </div>
    
    {/* Visual Accent */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
  </footer>
);

export default function App() {
  const [selectedPaperKey, setSelectedPaperKey] = useState<string | null>(null);

  const PAPERS: Record<string, PaperDetails> = {
    cascade: {
      title: "Cascade Debate",
      subtitle: "Multi-Agent Deliberation for Cost-Aware LLM Cascades",
      date: "ACL Poster 2026",
      impact: "+26.75% Performance",
      pdfUrl: "https://arxiv.org/pdf/2604.12262",
      abstract: "We propose a novel framework that optimizes Large Language Model cascades through a collaborative agent debate mechanism. By dynamically adjusting the number of agents and their deliberation depth, we achieve significant cost reduction while maintaining state-of-the-art performance."
    },
    gemmas: {
      title: "GEMMAS",
      subtitle: "Graph-based Evaluation Metrics for Multi-Agent Systems",
      date: "EMNLP Oral 2025 / In Review",
      impact: "Interpretability+",
      pdfUrl: "https://arxiv.org/pdf/2507.13190",
      abstract: "A graph-based evaluation framework designed to quantify the internal reasoning efficiency of multi-agent systems using Directed Acyclic Graphs (DAG). This approach introduces metrics to identify redundant communication paths."
    },
    frontiers: {
      title: "AI Research Frontiers",
      subtitle: "Collaborative Intelligence & Global Research Impact",
      date: "Google Scholar Citation Archive",
      impact: "Academic Outreach+",
      pdfUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=ko&user=OS612vEAAAAJ&citation_for_view=OS612vEAAAAJ:u-x6o8ySG0sC",
      abstract: "This citation record archives peer-reviewed investigations into multi-agent interaction systems and CRM analytics. It explores the crossroads of business data insight and transformer-based reasoning hierarchies."
    },
    crypto: {
      title: "Crypto Dashboard",
      subtitle: "Real-Time Crypto Analytics & Reporting Automation",
      date: "Data Analysis & Automated Reporting",
      impact: "Live Demo",
      demoUrl: "/projects/crypto-dashboard/index.html#KRW-BTC",
      pdfUrl: "/projects/crypto-dashboard/index.html#KRW-BTC",
      abstract: "Upbit 실시간 암호화폐 시세 데이터 수집, 5일 및 20일 이동평균선(MA), RSI 기술 지표를 바탕으로 시계열 데이터 시각화와 이상치 탐지, 자동화 리포팅을 구현한 인터랙티브 금융 대시보드입니다. (모두의연구소/강북구청 실습 프로젝트)"
    }
  };

  const selectedPaper = selectedPaperKey ? PAPERS[selectedPaperKey] : null;

  return (
    <div className="min-h-screen selection:bg-ink selection:text-surface font-sans">
      <Navbar />
      <main>
        <Hero onSelectFrontiers={() => setSelectedPaperKey('frontiers')} />
        <CoreCompetencies />
        <ExperienceSection />
        <Publications onSelectPaper={(key) => setSelectedPaperKey(key)} />
        <Projects onSelectPaper={(key) => setSelectedPaperKey(key)} />
      </main>
      <Footer />

      <AnimatePresence>
        {selectedPaper && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPaperKey(null)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surface editorial-border overflow-hidden shadow-2xl p-8 md:p-12"
            >
              <button 
                onClick={() => setSelectedPaperKey(null)}
                className="absolute top-6 right-6 p-2 text-ink/40 hover:text-ink transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="editorial-label">Research Insight</div>
              <h2 className="text-3xl md:text-5xl font-bold serif leading-tight mb-6">
                {selectedPaper.title}: <br />
                <span className="italic">{selectedPaper.subtitle.split(' ')[0]}</span> {selectedPaper.subtitle.split(' ').slice(1).join(' ')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div>
                    <span className="editorial-label !mb-1 text-[8px]">Publication Stats</span>
                    <p className="text-sm font-bold serif">{selectedPaper.date}</p>
                  </div>
                  <div>
                    <span className="editorial-label !mb-1 text-[8px]">Abstract</span>
                    <p className="text-xs text-stone-600 leading-relaxed text-justify">
                      {selectedPaper.abstract}
                    </p>
                  </div>
                </div>
                <div className="bg-stone-100 editorial-border p-6 flex flex-col justify-center items-center gap-4 text-center">
                  <div className="w-16 h-16 bg-white editorial-border flex items-center justify-center shadow-sm">
                    <FileText className="w-8 h-8 text-ink/20" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Scientific Impact</p>
                    <p className="text-xl font-bold serif italic">{selectedPaper.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {selectedPaper.demoUrl ? (
                  <a 
                    href={selectedPaper.demoUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-ink text-surface text-center py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Open Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a 
                    href={selectedPaper.pdfUrl}
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 bg-ink text-surface text-center py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    View full PDF <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button 
                  onClick={() => setSelectedPaperKey(null)}
                  className="flex-1 border border-ink text-ink text-center py-4 text-xs font-bold uppercase tracking-widest hover:bg-ink hover:text-surface transition-all"
                >
                  Close Archive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface PaperDetails {
  title: string;
  subtitle: string;
  date: string;
  abstract: string;
  impact: string;
  pdfUrl?: string;
  demoUrl?: string;
}
