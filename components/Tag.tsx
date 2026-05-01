import Link from "next/link";

interface TagProps {
  tag: string;
  count?: number;
  active?: boolean;
  clickable?: boolean;
}

export default function Tag({ tag, count, active, clickable = true }: TagProps) {
  const baseClass =
    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-colors";
  const activeClass =
    "bg-indigo-600 text-white";
  const inactiveClass =
    "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50";

  if (!clickable) {
    return (
      <span className={`${baseClass} ${active ? activeClass : inactiveClass}`}>
        {tag}
        {count !== undefined && (
          <span className="opacity-70">({count})</span>
        )}
      </span>
    );
  }

  return (
    <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
      <span className={`${baseClass} ${active ? activeClass : inactiveClass} cursor-pointer`}>
        {tag}
        {count !== undefined && (
          <span className="opacity-70">({count})</span>
        )}
      </span>
    </Link>
  );
}
