import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const studyPlansDirectory = path.join(
  process.cwd(),
  "content/study-plans/system-design"
);

export interface StudyPlanNoteMeta {
  slug: string;
  title: string;
  day: number;
  phase: string;
  date: string;
  completed: boolean;
  tags: string[];
  readingTime: string;
}

export interface StudyPlanNote extends StudyPlanNoteMeta {
  content: string;
}

export function getAllStudyPlanNoteSlugs(): string[] {
  if (!fs.existsSync(studyPlansDirectory)) return [];
  return fs
    .readdirSync(studyPlansDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.(mdx|md)$/, ""));
}

export function getAllStudyPlanNotes(): StudyPlanNoteMeta[] {
  const slugs = getAllStudyPlanNoteSlugs();
  return slugs
    .map((slug) => getStudyPlanNoteMeta(slug))
    .filter((note): note is StudyPlanNoteMeta => note !== null)
    .sort((a, b) => a.day - b.day); // Sort by day number
}

export function getStudyPlanNoteMeta(slug: string): StudyPlanNoteMeta | null {
  try {
    const mdxPath = path.join(studyPlansDirectory, `${slug}.mdx`);
    const mdPath = path.join(studyPlansDirectory, `${slug}.md`);
    const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const stats = readingTime(fileContents);

    return {
      slug,
      title: data.title || slug,
      day: data.day || 0,
      phase: data.phase || "",
      date: data.date || new Date().toISOString().split("T")[0],
      completed: data.completed || false,
      tags: data.tags || [],
      readingTime: stats.text,
    };
  } catch {
    return null;
  }
}

export function getStudyPlanNoteBySlug(slug: string): StudyPlanNote | null {
  try {
    const mdxPath = path.join(studyPlansDirectory, `${slug}.mdx`);
    const mdPath = path.join(studyPlansDirectory, `${slug}.md`);
    const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      day: data.day || 0,
      phase: data.phase || "",
      date: data.date || new Date().toISOString().split("T")[0],
      completed: data.completed || false,
      tags: data.tags || [],
      readingTime: stats.text,
      content,
    };
  } catch {
    return null;
  }
}

export function getStudyPlanNoteByDay(day: number): StudyPlanNote | null {
  const allNotes = getAllStudyPlanNotes();
  const note = allNotes.find((n) => n.day === day);
  if (!note) return null;
  return getStudyPlanNoteBySlug(note.slug);
}
