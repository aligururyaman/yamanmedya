import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-6 py-20">
      <div className="flex max-w-lg flex-col items-center gap-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40">
          <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
        </div>
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Sayfa bulunamadı
        </h1>
        <p className="text-sm text-muted">
          Aradığın sayfa taşınmış olabilir. Anasayfaya dönüp devam edebilirsin.
        </p>
        <Link
          href="/"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black"
        >
          Anasayfaya dön
        </Link>
      </div>
    </main>
  );
}
