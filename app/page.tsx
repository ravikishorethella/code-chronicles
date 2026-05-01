import Link from "next/link";
import siteConfig from "@/site.config";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import projects from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);
  const highlightedProjects = projects.filter((p) => p.highlight);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
          🚀 Full Stack Dev to AI Explorer
        </div>
        <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600">{siteConfig.author.name}</span>
        </h1>
        <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          {siteConfig.author.bio}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Read My Blog
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-600 hover:text-indigo-600 dark:border-gray-600 dark:text-gray-300"
          >
            View Projects
          </Link>
          <a
            href={siteConfig.author.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-600 hover:text-indigo-600 dark:border-gray-600 dark:text-gray-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Tech Stack Badges */}
      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Java", "Spring Boot", "React", "JavaScript", "TypeScript",
            "LangChain.js", "Spring AI", "LangGraph", "RAG", "OpenAI",
            "Supabase", "GCP", "AWS", "Docker", "PostgreSQL",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-20">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {highlightedProjects.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {highlightedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
