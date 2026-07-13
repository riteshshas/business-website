"use client";

import { useEffect, useId, useRef } from "react";

import type { ServiceSelectorOption } from "@/types/services";

type ServiceSelectorProps = {
  title: string;
  description: string;
  services: ServiceSelectorOption[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (service: ServiceSelectorOption) => void;
};

const focusableSelector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ServiceSelector({ title, description, services, isOpen, onClose, onSelect }: ServiceSelectorProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeButton = dialogRef.current?.querySelector<HTMLButtonElement>("[data-close-button]");
    closeButton?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusableElements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end bg-slate-950/40 p-0 sm:items-center sm:justify-center sm:p-6" onMouseDown={onClose}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descriptionId} className="w-full motion-safe:animate-[service-sheet-in_200ms_ease-out] rounded-t-2xl border border-slate-200 bg-white shadow-2xl sm:max-w-xl sm:rounded-2xl sm:motion-safe:animate-[service-modal-in_160ms_ease-out]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-6 border-b border-slate-200 px-6 py-5">
          <div>
            <h2 id={titleId} className="text-xl font-semibold text-slate-900">{title}</h2>
            <p id={descriptionId} className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </div>
          <button data-close-button type="button" onClick={onClose} aria-label="Close service selector" className="rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
        <ul className="max-h-[65vh] overflow-y-auto p-3" aria-label={title}>
          {services.map((service) => (
            <li key={service.slug}>
              <button type="button" onClick={() => onSelect(service)} className="group flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-inset">
                <span className="min-w-0 flex-1"><span className="block font-semibold text-slate-900">{service.title}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{service.shortDescription}</span></span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
