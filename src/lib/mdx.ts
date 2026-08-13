import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  content: string;
}

// Utility to calculate reading time roughly based on word count
function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Get metadata and content for all posts, sorted by date (newest first)
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled Post",
        date: data.date || new Date().toISOString().split("T")[0],
        description: data.description || "",
        tags: data.tags || [],
        readingTime: getReadingTime(content),
        content,
      };
    });

  // Sort posts by date descending
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let fileContents: string;

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } else {
      const altPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(altPath)) return null;
      fileContents = fs.readFileSync(altPath, "utf8");
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled Post",
      date: data.date || new Date().toISOString().split("T")[0],
      description: data.description || "",
      tags: data.tags || [],
      readingTime: getReadingTime(content),
      content,
    };
  } catch {
    return null;
  }
}