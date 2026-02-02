import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "İletişim",
};

export default function IletisimPage() {
  return (
    <main className="bg-black pb-24 pt-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <SectionHeading
          eyebrow="İletişim"
          title="İletişim"
          subtitle="Kısaca anlat: hedef ne, içerik ne, süre ne? 24 saat içinde dönüş yapalım."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal className="space-y-6 rounded-3xl border border-border bg-zinc-950/40 p-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Ek İletişim
              </p>
              <p className="text-sm text-foreground">
                E-posta: info@yamanmedya.com
              </p>
              <p className="text-sm text-foreground">Instagram: @yamanmedya</p>
              <p className="text-sm text-foreground">Konum: Türkiye</p>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
