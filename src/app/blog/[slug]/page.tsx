import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | EKBN Analytics",
    };
  }

  return {
    title: `${post.title} | EKBN Analytics`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            render={<Link href="/blog" />}
          >
            <ArrowLeft className="size-4" />
            Back to all articles
          </Button>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl border-b border-border/60 pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
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

          <h1 className="text-3xl font-extrabold tracking-tight leading-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          {post.description && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="mr-1 size-3 text-muted-foreground" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Article Content Body */}
        <div className="prose dark:prose-invert mt-10 max-w-3xl prose-neutral prose-headings:font-bold prose-a:text-primary hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>
      </Container>
    </article>
  );
}