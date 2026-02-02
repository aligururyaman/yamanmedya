import { cn } from "@/lib/helpers";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-accent/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm leading-7 text-muted sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
