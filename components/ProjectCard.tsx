import Tag from "./Tag";
import type { Project } from "@/content/projects";

const statusColors: Record<Project["status"], string> = {
  completed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "in-progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  planned: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
};

const statusLabel: Record<Project["status"], string> = {
  completed: "✅ Completed",
  "in-progress": "🚧 In Progress",
  planned: "📋 Planned",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${statusColors[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} tag={tag} clickable={false} />
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
