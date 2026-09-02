export default function Bildplatzhalter({
  label = "Bild folgt",
  aspect = "aspect-[16/9]",
  className = "",
}: {
  label?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} w-full border border-rule bg-[repeating-linear-gradient(135deg,rgba(34,48,60,0.05)_0_2px,transparent_2px_14px)] flex items-center justify-center ${className}`}
    >
      <span className="font-mono text-xs uppercase tracking-wide text-ink/40 text-center px-4">
        {label}
      </span>
    </div>
  );
}
