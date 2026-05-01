import Link from "next/link";
import Tag from "./Tag";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
          {post.title}
        </h2>
      </Link>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
