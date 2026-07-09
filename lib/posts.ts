import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { getAllStudyPlanNotes } from "./studyPlanNotes";

const postsDirectory = path.join(process.cwd(), "content/blog");
const PINNED_POST_SLUGS = [
  "what-i-learned-about-llms",
  "building-first-rag-chatbot",
  "rag-from-scratch",
  "building-rag-chatbot-interview-coach",
];

export interface PostMeta {
  slug: string;
  url: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  draft?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.(mdx|md)$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const blogPosts = getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter((post): post is PostMeta => post !== null && !post.draft)
  const systemDesignNotes = getAllStudyPlanNotes().map((note) => ({
    slug: note.slug,
    url: `/study-plans/system-design/${note.slug}`,
    title: note.title,
    date: note.date,
    excerpt: `Day ${note.day}: ${note.phase}`,
    tags: note.tags,
    readingTime: note.readingTime,
    draft: false,
  }));

  const allPosts = [...blogPosts, ...systemDesignNotes];
  const pinnedSet = new Set(PINNED_POST_SLUGS);

  const pinnedPosts = PINNED_POST_SLUGS.map((slug) =>
    allPosts.find((post) => post.slug === slug)
  ).filter((post): post is PostMeta => post !== undefined);

  const remainingPosts = allPosts
    .filter((post) => !pinnedSet.has(post.slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return [...pinnedPosts, ...remainingPosts];
}

export function getPostMeta(slug: string): PostMeta | null {
  try {
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const stats = readingTime(fileContents);

    return {
      slug,
      url: `/blog/${slug}`,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      readingTime: stats.text,
      draft: data.draft || false,
    };
  } catch {
    return null;
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      url: `/blog/${slug}`,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      readingTime: stats.text,
      content,
      draft: data.draft || false,
    };
  } catch {
    return null;
  }
}

export function getAllTags(): Record<string, number> {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  return tagCount;
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}
