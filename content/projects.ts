export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "planned";
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "RAG Chatbot — Java Interview Coach AI",
    description:
      "A Retrieval-Augmented Generation chatbot that answers Java interview questions from personal markdown notes. Built with Next.js 16, FastAPI, LangChain, Groq (Llama 3.1), HuggingFace Endpoint Embeddings, and Neon Postgres with pgvector. Frontend and Python backend co-deployed as a Vercel monorepo.",
    tags: ["RAG", "LangChain", "Groq", "FastAPI", "Next.js", "Neon", "pgvector", "HuggingFace"],
    github: "https://github.com/ravikishorethella/RAG-Chatbot",
    liveUrl: "https://rag-chatbot-rkthella.vercel.app",
    status: "completed",
    highlight: true,
  },
  {
    title: "LangGraph AI Agent",
    description:
      "Multi-tool AI agent with memory and Human-in-the-Loop support. Built with LangGraph.js featuring web search, document reading, and ReAct reasoning pattern.",
    tags: ["LangGraph", "AI Agents", "LangChain", "JavaScript"],
    github: "https://github.com/yourusername/langgraph-agent",
    liveUrl: "https://langgraph-agent-demo.vercel.app",
    status: "planned",
    highlight: false,
  },
  // TODO: Add your previous full-stack projects here
  // {
  //   title: "Your Previous Project",
  //   description: "...",
  //   tags: ["React", "Java", "Spring Boot"],
  //   github: "",
  //   liveUrl: "",
  //   status: "completed",
  //   highlight: false,
  // },
];

export default projects;
