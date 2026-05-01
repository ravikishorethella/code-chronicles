"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import BlogCard from "@/components/BlogCard";
import Tag from "@/components/Tag";
import type { PostMeta } from "@/lib/posts";

interface Props {
  posts: PostMeta[];
  tagCounts: Record<string, number>;
}

function BlogContent({ posts, tagCounts }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTag = searchParams.get("tag") || "";

  const filteredPosts = activeTag
    ? posts.filter((p) =>
        p.tags.map((t) => t.toLowerCase()).includes(activeTag.toLowerCase())
      )
    : posts;

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
        Blog
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Learning in public — documenting my journey into AI, agents, and beyond.
      </p>

      {/* Tag Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => router.push("/blog")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              !activeTag
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
            }`}
          >
            All ({posts.length})
          </button>
          {sortedTags.map(([tag, count]) => (
            <Tag
              key={tag}
              tag={tag}
              count={count}
              active={activeTag.toLowerCase() === tag.toLowerCase()}
            />
          ))}
        </div>
      </div>

      {/* Post Grid */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">
            No posts found for tag &quot;{activeTag}&quot; yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlogPageClient({ posts, tagCounts }: Props) {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
      <BlogContent posts={posts} tagCounts={tagCounts} />
    </Suspense>
  );
}
