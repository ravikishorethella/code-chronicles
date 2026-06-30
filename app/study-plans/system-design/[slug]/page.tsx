import {
  getStudyPlanNoteBySlug,
  getAllStudyPlanNoteSlugs,
  getStudyPlanNoteByDay,
  getAllStudyPlanNotes,
} from "@/lib/studyPlanNotes";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import Tag from "@/components/Tag";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const notes = getAllStudyPlanNotes();
  // Generate params for both slug and day number
  const params = [];
  for (const note of notes) {
    params.push({ slug: note.slug });
    params.push({ slug: note.day.toString() });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Try to parse as day number first
  const dayNum = parseInt(slug);
  const note = isNaN(dayNum) 
    ? getStudyPlanNoteBySlug(slug)
    : getStudyPlanNoteByDay(dayNum);
    
  if (!note) return {};
  return {
    title: `${note.title} — System Design Study Plan`,
    description: `Day ${note.day}: ${note.phase}`,
  };
}

export default async function StudyPlanNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Try to parse as day number first, otherwise use as slug
  const dayNum = parseInt(slug);
  const note = isNaN(dayNum) 
    ? getStudyPlanNoteBySlug(slug)
    : getStudyPlanNoteByDay(dayNum);

  if (!note) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/study-plans/system-design"
        className="mb-8 inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline dark:text-indigo-400"
      >
        ← Back to System Design Plan
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
            Day {note.day}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {note.phase}
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 dark:text-white">
          {note.title}
        </h1>

        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{note.date}</span>
          <span>·</span>
          <span>{note.readingTime}</span>
          <span>·</span>
          {note.completed ? (
            <span className="text-green-600 dark:text-green-400">
              ✅ Completed
            </span>
          ) : (
            <span className="text-amber-600 dark:text-amber-400">
              ⏳ In Progress
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </header>

      {/* Note Content */}
      <article className="prose prose-indigo prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-img:rounded-xl prose-img:shadow-md prose-a:text-indigo-600 prose-pre:bg-gray-900 prose-pre:text-gray-100 dark:prose-a:text-indigo-400">
        <MDXRemote
          source={note.content}
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
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/study-plans/system-design"
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            ← Back to System Design Plan
          </Link>

          {note.day < 45 && (
            <Link
              href={`/study-plans/system-design/${note.day + 1}`}
              className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Next: Day {note.day + 1} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
