export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black pt-20">
      <div className="h-1 w-48 overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full w-1/2 animate-pulse bg-accent" />
      </div>
    </div>
  );
}
