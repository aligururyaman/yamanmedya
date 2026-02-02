import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Portföy",
};

export default function PortfoyPage() {
  return (
    <main className="bg-black pb-24 pt-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Portföy"
          title="Portföy"
          subtitle="Video, sosyal medya ve web tarafında net sonuçlar."
        />
        <Reveal>
          <PortfolioGrid />
        </Reveal>
      </div>
    </main>
  );
}
