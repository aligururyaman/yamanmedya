import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/helpers";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  label,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" &&
          "border border-[#f97316] bg-[#f97316] text-black shadow-glow hover:bg-[#ea580c]",
        variant === "secondary" &&
          "border border-[#f97316]/50 bg-transparent text-foreground hover:border-[#f97316] hover:text-[#f97316]",
        variant === "ghost" && "text-foreground hover:text-accent",
        className
      )}
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
