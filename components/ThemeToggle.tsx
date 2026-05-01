"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

const SystemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="3" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);

const options = [
  { value: "light" as const, label: "Light",  Icon: SunIcon },
  { value: "dark"  as const, label: "Dark",   Icon: MoonIcon },
  { value: "system"as const, label: "System", Icon: SystemIcon },
];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const ActiveIcon = resolvedTheme === "dark" ? MoonIcon : SunIcon;

  return (
    <div className="relative" ref={ref}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle theme"
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
      >
        <ActiveIcon />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 overflow-hidden z-50">
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              onClick={() => { setTheme(value); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                ${theme === value
                  ? "bg-indigo-50 text-indigo-600 font-medium dark:bg-indigo-900/40 dark:text-indigo-400"
                  : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                }`}
            >
              <Icon />
              {label}
              {theme === value && (
                <span className="ml-auto">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
