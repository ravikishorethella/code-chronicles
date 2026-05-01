import { getAllPosts, getAllTags } from "@/lib/posts";
import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: "Blog — Code Chronicles",
  description: "Thoughts on AI, LLMs, RAG, LangChain, Spring AI, and full-stack development.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tagCounts = getAllTags();
  return <BlogPageClient posts={posts} tagCounts={tagCounts} />;
}
