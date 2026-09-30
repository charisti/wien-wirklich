"use client";

import { useState } from "react";
import QuizModal from "./QuizModal";

export default function QuizButton({
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
      {offen && <QuizModal onClose={() => setOffen(false)} />}
    </>
  );
}
