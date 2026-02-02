import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ProcessSticky from "@/components/ProcessSticky";
import Button from "@/components/Button";
import { services, trustItems, portfolioItems } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-black pb-24 pt-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:px-10">
        <Hero />

        <Reveal className="grid gap-4 rounded-3xl border border-[#f97316]/35 bg-zinc-950/60 p-6 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#f97316]/20 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#f97316]">
                {item}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow="Hizmetler"
            title="Tek bir iş değil, uçtan uca sistem kuruyoruz."
            subtitle="Strateji, prodüksiyon ve performansı tek akışta toparlarız."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
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
          </div>
        </Reveal>

        <Reveal>
          <ProcessSticky />
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow="Portföy"
            title="Yeni işlerde tekrar eden bir çizgi."
            subtitle="Video, sosyal medya ve web tarafında ölçülebilir sonuçlar."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-zinc-950/40 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {item.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/portfoy" label="Portföyü Gör" variant="secondary" />
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-border bg-zinc-950/70 p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Yaman Medya
              </p>
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                İçeriği parlatır, markayı büyütürüz.
              </h2>
              <p className="text-sm text-muted">
                Hedefin netse, sonuç daha hızlı gelir.
              </p>
            </div>
            <Button href="/iletisim" label="Teklif Al" />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
