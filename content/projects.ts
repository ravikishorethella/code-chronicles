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
    title: "RAG Chatbot — Chat with Your Docs",
    description:
      "A Retrieval-Augmented Generation chatbot that answers questions from your own documents. Built with LangChain.js, OpenAI GPT-4o-mini, Supabase pgvector, and a React streaming frontend.",
    tags: ["RAG", "LangChain", "OpenAI", "Supabase", "React", "JavaScript"],
    github: "https://github.com/yourusername/rag-chatbot",
    liveUrl: "https://rag-chatbot-demo.vercel.app",
    status: "in-progress",
    highlight: true,
  },
  {
    title: "Spring Boot AI API",
    description:
      "Production-ready REST API powered by Spring AI. Exposes RAG capabilities built on Java/Spring Boot with OpenAI integration, streaming responses, and pgvector for document retrieval.",
    tags: ["Spring AI", "Spring Boot", "Java", "RAG", "OpenAI"],
    github: "https://github.com/yourusername/spring-boot-ai-api",
    liveUrl: "https://spring-ai-api-demo.up.railway.app",
    status: "planned",
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
  {
    title: "MCP Server — Interview Prep Tools",
    description:
      "A Model Context Protocol server that exposes interview prep content as tools for AI assistants like Claude Desktop and VS Code Copilot.",
    tags: ["MCP", "AI Agents", "TypeScript"],
    github: "https://github.com/yourusername/mcp-interview-prep",
    liveUrl: "",
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
