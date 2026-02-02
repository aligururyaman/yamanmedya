import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/helpers";

type BlogDetailProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: BlogDetailProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="bg-black pb-24 pt-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 lg:px-10">
        <SectionHeading
          eyebrow={post.category}
          title={post.title}
          subtitle={post.excerpt}
        />
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          {formatDate(post.date)}
        </p>
        <Reveal className="space-y-4 text-sm leading-7 text-muted">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </main>
  );
}
