import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study Plans — Code Chronicles",
  description: "Comprehensive study plans for technical interview preparation",
};

const studyPlans = [
  {
    id: "system-design",
    title: "System Design Master Plan",
    description: "45-day comprehensive study plan covering SOLID principles, Object-Oriented Design, High-Level Design fundamentals, and real interview problems",
    duration: "45 days",
    timePerDay: "1.5 hours/day",
    topics: ["SOLID Principles", "OOD Patterns", "HLD Fundamentals", "System Design Interview"],
    difficulty: "Intermediate to Advanced",
    href: "/study-plans/system-design",
    color: "from-purple-500 to-indigo-600",
  },
  // Add more study plans here in the future
  // {
  //   id: "dsa",
  //   title: "Data Structures & Algorithms",
  //   description: "Master DSA patterns for coding interviews",
  //   duration: "60 days",
  //   ...
  // },
];

export default function StudyPlansPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
          📚 Study Plans
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Structured learning paths for technical interview preparation
        </p>
      </header>

      {/* Study Plans Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {studyPlans.map((plan) => (
          <Link
            key={plan.id}
            href={plan.href}
            className="group block rounded-xl border-2 border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-indigo-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Badge */}
            <div className="mb-4 flex items-center gap-3">
              <span className={`inline-block rounded-full bg-gradient-to-r ${plan.color} px-4 py-1 text-sm font-semibold text-white`}>
                {plan.duration}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {plan.timePerDay}
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
              {plan.title}
            </h2>

            {/* Description */}
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {plan.description}
            </p>

            {/* Topics */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                What You'll Learn:
              </h3>
              <div className="flex flex-wrap gap-2">
                {plan.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Difficulty:
              </span>
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {plan.difficulty}
              </span>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-indigo-600 group-hover:underline dark:text-indigo-400">
                Start Learning →
              </span>
              <svg
                className="h-5 w-5 text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-12 rounded-xl bg-indigo-50 p-8 dark:bg-indigo-900/20">
        <h3 className="mb-3 text-xl font-bold text-indigo-900 dark:text-indigo-100">
          💡 How to Use These Study Plans
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">✓</span>
            <span>Each plan includes detailed daily topics, practice exercises, and tracking</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">✓</span>
            <span>Take notes directly in MDX format for each day</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">✓</span>
            <span>Track your progress with interactive checkboxes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">✓</span>
            <span>All progress is saved locally in your browser</span>
          </li>
        </ul>
      </div>

      {/* Coming Soon */}
      <div className="mt-12 text-center">
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Coming Soon
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 dark:border-gray-600">
            <div className="mb-2 text-3xl">💻</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              DSA Patterns
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Master coding interview patterns
            </p>
          </div>
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 dark:border-gray-600">
            <div className="mb-2 text-3xl">🗣️</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Behavioral Prep
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              STAR method and leadership
            </p>
          </div>
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 dark:border-gray-600">
            <div className="mb-2 text-3xl">🏗️</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              System Architecture
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Advanced distributed systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

