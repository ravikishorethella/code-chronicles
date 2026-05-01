"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import siteConfig from "@/site.config";
import ThemeToggle from "./ThemeToggle";

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    {open ? (
      <>
        <line x1="4" y1="4" x2="18" y2="18" />
        <line x1="18" y1="4" x2="4" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="6" x2="19" y2="6" />
        <line x1="3" y1="11" x2="19" y2="11" />
        <line x1="3" y1="16" x2="19" y2="16" />
      </>
    )}
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const navLinkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
      pathname === href
        ? "text-indigo-600 dark:text-indigo-400"
        : "text-gray-600 dark:text-gray-300"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            &lt;Code<span className="text-indigo-600">Chronicles</span>/&gt;
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 text-sm font-medium border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  pathname === link.href
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
