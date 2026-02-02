import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/lib/data";

export const metadata = {
  title: "Hizmetler",
};

export default function HizmetlerPage() {
  return (
    <main className="bg-black pb-24 pt-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Hizmetler"
          subtitle="Tek bir iş değil, uçtan uca sistem kuruyoruz."
        />

        <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-border bg-zinc-950/40 p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="rounded-3xl border border-border bg-zinc-950/60 p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-muted">
              İhtiyacın tek hizmet de olabilir, komple paket de. En doğru sistemi
              birlikte kuralım.
            </p>
            <Button href="/iletisim" label="Teklif Al" />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
