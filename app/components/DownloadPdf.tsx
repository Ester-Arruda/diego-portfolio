"use client";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineFilePdf } from "react-icons/ai";

type DownloadPdfProps = {
  pdfUrl: string;
  fileName?: string;
};

export default function DownloadPdf({ pdfUrl, fileName = "Curriculo.pdf" }: DownloadPdfProps) {
  return (
    <a
      href={pdfUrl}
      download={fileName}
      className="inline-flex items-center gap-2 rounded-full px-2 py-2 
        bg-white/10
        backdrop-blur-md border border-white/20
        hover:bg-black/90 hover:text-white 
        dark:hover:bg-white dark:hover:text-black 
        md:text-lg whitespace-nowrap mr-2 md:mr-4 
        active:scale-95 transition-all duration-150 
        text-black/70 dark:text-white
        shadow-lg hover:shadow-lg 
        dark:hover:shadow-white/30"
      aria-label="Download CV PDF"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key="pdf"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="flex items-center justify-center"
        >
        <AiOutlineFilePdf size={20} className="text-base md:text-lg text-inherit transition-colors duration-150" />
        </motion.span>
      </AnimatePresence>
    </a>
  );
}
