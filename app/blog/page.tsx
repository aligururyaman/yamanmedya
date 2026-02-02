import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/motion/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
};

const categories = ["Video", "Sosyal Medya", "Web"];

export default function BlogPage() {
  return (
    <main className="bg-black pb-24 pt-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Blog"
          title="Blog"
          subtitle="Video, sosyal medya ve web üzerine notlar."
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted"
            >
              {category}
            </span>
          ))}
        </div>

        <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </Reveal>
      </div>
    </main>
  );
}
