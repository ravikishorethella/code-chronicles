import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import Tag from "@/components/Tag";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Code Chronicles`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline dark:text-indigo-400"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </header>

      {/* Post Content */}
      <article className="prose prose-indigo prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-sm dark:prose-code:bg-gray-800">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, rehypeHighlight],
            },
          }}
        />
      </article>

      {/* Footer nav */}
      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <Link
          href="/blog"
          className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
