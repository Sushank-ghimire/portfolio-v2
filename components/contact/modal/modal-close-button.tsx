"use client";

import { FiX } from "react-icons/fi";

interface ModalCloseButtonProps {
  onClose: () => void;
}

export default function ModalCloseButton({ onClose }: ModalCloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close"
      className="absolute right-5 top-5 rounded-lg p-2 text-muted transition-all duration-200 hover:bg-surface-hover hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
    >
      <FiX size={21} />
    </button>
  );
}
