import siteConfig from "@/site.config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {siteConfig.author.name} — Built with
          Next.js + Tailwind
        </p>
        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a
            href={siteConfig.author.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            LinkedIn
          </a>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
