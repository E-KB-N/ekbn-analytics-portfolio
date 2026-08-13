import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Calendar, Clock, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description:
    "A blend of sports analytics, technical deep dives, career reflections, personal projects, and whatever else I'm currently exploring.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Header / Intro Section */}
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span>Articles & Insights</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Unfiltered Thoughts & Insights
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A blend of sports analytics, technical deep dives, career
            reflections, personal projects, and whatever else I’m currently
            exploring. No rigid rules, just good writing and cool data.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  {/* Meta Details: Date & Read Time */}
                  <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3.5" />
                      <time dateTime={post.date}>
                        {format(parseISO(post.date), "MMMM d, yyyy")}
                      </time>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title & Link */}
                  <h2 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border/40 pt-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        <Tag className="mr-1 size-3 text-muted-foreground" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </article>
            ))
          ) : (
            <div className="col-span-full rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
              No posts published yet. Check back soon!
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}