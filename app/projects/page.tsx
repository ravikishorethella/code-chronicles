import projects from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Code Chronicles",
  description: "AI agents, RAG systems, Spring Boot APIs, and full-stack projects built during my journey into AI.",
};

export default function ProjectsPage() {
  const completed = projects.filter((p) => p.status === "completed");
  const inProgress = projects.filter((p) => p.status === "in-progress");
  const planned = projects.filter((p) => p.status === "planned");

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
        Projects
      </h1>
      <p className="mb-12 text-gray-600 dark:text-gray-400">
        Things I&apos;ve built — from enterprise full-stack apps to AI agents, RAG systems, and everything in between.
      </p>

      {inProgress.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            🚧 In Progress
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {inProgress.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {completed.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            ✅ Completed
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {completed.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {planned.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            📋 Planned
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {planned.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
