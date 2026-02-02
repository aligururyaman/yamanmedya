import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Hakkımızda",
};

const values = [
  "Net iletişim",
  "Hızlı teslim",
  "Ölçülebilir sonuç",
  "Premium işçilik",
];

export default function HakkimizdaPage() {
  return (
    <main className="bg-black pb-24 pt-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Yaman Medya"
          title="Hakkımızda"
          subtitle="Biz işin ‘havalı’ kısmını da severiz ama asıl takıntımız sonuç: izlenme, dönüşüm, marka algısı. Stratejiyi kurar, üretimi yapar, yayınlar ve ölçeriz."
        />

        <Reveal className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-3xl border border-border bg-zinc-950/40 p-6"
            >
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </main>
  );
}
