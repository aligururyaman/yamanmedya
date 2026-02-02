import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import Reveal from "@/components/motion/Reveal";
import { packages } from "@/lib/data";

export const metadata = {
  title: "Paketler",
};

export default function PaketlerPage() {
  return (
    <main className="bg-black pb-24 pt-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Paketler"
          title="Paketler"
          subtitle="Hedefine göre esnek, ölçülebilir ve net paketler."
        />

        <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PricingCard
              key={pkg.name}
              name={pkg.name}
              audience={pkg.audience}
              items={pkg.items}
            />
          ))}
        </Reveal>

        <p className="text-sm text-muted">
          Her paket özelleştirilebilir. Net hedefin varsa daha hızlı sonuca
          gideriz.
        </p>
      </div>
    </main>
  );
}
