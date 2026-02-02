import Link from "next/link";
import { formatDate } from "@/lib/helpers";

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
};

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  slug,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-zinc-950/40 p-6 transition hover:border-accent"
    >
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          {category}
        </p>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
          {title}
        </h3>
        <p className="text-sm text-muted">{excerpt}</p>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
        {formatDate(date)}
      </p>
    </Link>
  );
}
