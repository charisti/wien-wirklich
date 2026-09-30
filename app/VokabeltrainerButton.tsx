"use client";

import { useState } from "react";
import VokabeltrainerModal from "./VokabeltrainerModal";

export default function VokabeltrainerButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [offen, setOffen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOffen(true)} className={className}>
        {children}
      </button>
      {offen && <VokabeltrainerModal onClose={() => setOffen(false)} />}
    </>
  );
}
