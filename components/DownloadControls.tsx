"use client";

import { Download, FileDown, Printer } from "lucide-react";
import { RefObject } from "react";
import { useReactToPrint } from "react-to-print";

type DownloadControlsProps = {
  cvUrl: string;
  printRef: RefObject<HTMLElement | null>;
};

export function DownloadControls({ cvUrl, printRef }: DownloadControlsProps) {
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Hasintha-Dilshan-Portfolio",
  });

  return (
    <div className="no-print fixed bottom-5 left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 items-center justify-center gap-3 rounded-lg border border-white/15 bg-steel/80 p-2 shadow-glow backdrop-blur-xl md:bottom-auto md:left-auto md:right-6 md:top-6 md:w-auto md:translate-x-0">
      <a
        href={cvUrl}
        download
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-cyanwire/30 bg-cyanwire/10 px-4 text-sm font-semibold text-cyanwire transition hover:bg-cyanwire hover:text-graphite"
      >
        <FileDown size={18} />
        Download CV
      </a>
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-volt/40 bg-volt/10 px-4 text-sm font-semibold text-volt transition hover:bg-volt hover:text-graphite"
      >
        <Printer size={18} />
        Portfolio PDF
      </button>
      <Download className="hidden text-white/40 sm:block" size={16} />
    </div>
  );
}
