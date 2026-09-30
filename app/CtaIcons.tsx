export function VokabeltrainerIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v14.5A2.5 2.5 0 0 1 17.5 20H4V5.5Z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
    </svg>
  );
}

export function WortquizzenIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M9.5 9a2.5 2.5 0 1 1 3.4 2.33c-.75.3-1.4.9-1.4 1.92"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
