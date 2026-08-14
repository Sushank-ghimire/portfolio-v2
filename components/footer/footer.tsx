"use client";

import { useState } from "react";
import ContactModal from "@/components/contact/modal/contact-modal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="relative pt-16 pb-4 text-muted leading-relaxed">
      <div>
        <p>
          Loosely designed in <Span text="Figma" /> and coded in{" "}
          <Span text="Zed" />
        </p>

        <p>
          by yours truly. Built with <Span text="Next.js" /> and{" "}
          <Span text="Tailwind CSS" />, deployed with
        </p>

        <p>
          <Span text="Vercel" />. All text is set in the Inter typeface.
        </p>
      </div>

      <p className="mt-8 border-t border-border pt-5 text-xs text-muted-dark">
        © {new Date().getFullYear()} Sushank Ghimire. All rights reserved.
      </p>

      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={modalOpen}
        aria-controls="contact-modal"
        onClick={() => setModalOpen(true)}
        className="
          fixed
          right-4
          bottom-4
          z-40
          cursor-pointer
          p-2
          text-slate-400
          transition-all
          duration-300
          hover:-translate-y-2
          hover:text-teal-300
          sm:right-6
          sm:bottom-6
          lg:right-8
          lg:bottom-8
        "
      >
        <img
          src="/rotate.gif"
          alt="Spinning Tardis from Doctor Who"
          width={140}
          height={120}
          className="
            h-auto
            w-24
            sm:w-28
            lg:w-35
          "
        />
      </button>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}

function Span({ text }: { text: string }) {
  return <span className="text-foreground">{text}</span>;
}
