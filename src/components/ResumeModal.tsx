import { useEffect, useRef } from "react";

 type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-6" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="resume-title" className="bg-white rounded-sm w-full max-w-5xl h-[92vh] relative" onClick={(event) => event.stopPropagation()}>
        <h2 id="resume-title" className="sr-only">Julianne Lin resume</h2>
        <button ref={closeButtonRef} onClick={onClose} className="absolute top-3 right-3 text-foreground/60 hover:text-foreground text-2xl leading-none" aria-label="Close resume">
          &times;
        </button>
        <embed src="/resume.pdf" title="Julianne Lin resume" className="w-full h-full" />
      </div>
    </div>
  );
}
