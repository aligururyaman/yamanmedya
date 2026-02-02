import Button from "@/components/Button";

type PricingCardProps = {
  name: string;
  audience: string;
  items: string[];
};

export default function PricingCard({ name, audience, items }: PricingCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-zinc-950/40 p-6 shadow-glow-soft">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted">{audience}</p>
        </div>
        <ul className="space-y-2 text-sm text-muted">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button
          href="/iletisim"
          label="Fiyatlandırma için iletişime geç"
          variant="secondary"
          className="w-full justify-center"
        />
      </div>
    </div>
  );
}
