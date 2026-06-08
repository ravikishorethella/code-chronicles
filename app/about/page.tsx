import siteConfig from "@/site.config";

export const metadata = {
  title: "About — Code Chronicles",
  description: "9 years of full-stack development, now diving deep into AI agents and LLMs.",
};

const experience = [
  {
    role: "Software Development Lead", // TODO: Replace with your actual roles
    company: "Verizon - Contract",
    period: "2018 – Present",
    description:
      "Building scalable enterprise applications with Java/Spring Boot backend and React frontend. Led a team of 5-6 developers at any time and in 2025 as part of the DB Migration project, I have led over 30 people (Onshore & Offshore) in delievering the requirements.",
    tech: ["Java", "Spring Boot", "React", "GeoServer", "Leaflet.js", "PostgreSQL", "MySQL"],
  },
  {
    role: "React Developer",
    company: "Legacy.com - Contract",
    period: "2018 – 2018",
    description:
      "Developed RESTful APIs and React-based frontends. Implemented CI/CD pipelines and improved test coverage from 20% to 80%.",
    tech: ["HTML5", "CSS3", "JavaScript", "React JS", "Node.js", "MongoDB", "Express", "WebPack", "Redux", "Axios",
"GraphQL", "React StoryBook", "Ant", "React-Router", "Bootstrap", "SAAS", "Bit bucket", "Jenkins"],
  },
];

const skills = {
  "Backend": ["Java 17+", "Spring Boot", "Spring AI", "REST APIs", "Microservices", "Hibernate/JPA"],
  "Frontend": ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS"],
  "AI / LLM": ["LangChain.js", "LangGraph", "Spring AI", "RAG", "OpenAI API", "Vector DBs"],
  "Cloud & DevOps": ["GCP (Certified)", "AWS", "Docker", "Kubernetes", "CI/CD"],
  "Databases": ["PostgreSQL", "MySQL", "Supabase", "Redis"],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
        About Me
      </h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        {siteConfig.author.role} based in {siteConfig.author.location}
      </p>

      {/* Bio */}
      <section className="mb-12">
        <div className="rounded-xl bg-indigo-50 p-6 dark:bg-indigo-900/20">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I have 9 years of experience building production applications with Java, Spring Boot, React, and JavaScript.
            In 2026, I started my journey into AI — exploring LLMs, building RAG systems, and creating AI agents.
            This blog is my public learning journal.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            I hold a{" "}
            <span className="font-semibold text-indigo-700 dark:text-indigo-400">
              Google Cloud Associate certification
            </span>{" "}
            and am actively building AI-powered applications combining my enterprise Java experience with modern LLM tooling.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Certifications
        </h2>
        <div className="space-y-4">
          <a
            href="https://www.credly.com/badges/f3037e55-6838-4a70-9204-492de4547f4a/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-all hover:scale-105"
          >
            <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:border-indigo-500 dark:hover:bg-indigo-900/10">
              <span className="text-3xl">☁️</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Google Cloud Associate Engineer
                </p>
                <p className="text-sm text-gray-500">Google Cloud · 2024</p>
              </div>
            </div>
          </a>
          {/* TODO: Add AWS AI Practitioner after Month 4 */}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="relative border-l-2 border-indigo-200 pl-6 dark:border-indigo-800"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-indigo-600 bg-white dark:bg-gray-900" />
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {job.role}
                </h3>
                <span className="text-sm text-gray-400">{job.period}</span>
              </div>
              <p className="mb-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {job.company}
              </p>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.author.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            GitHub
          </a>
          <a
            href={siteConfig.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition-colors dark:border-gray-600 dark:text-gray-300"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
