"use client";

interface ModalBackdropProps {
  onClose: () => void;
}

export default function ModalBackdrop({ onClose }: ModalBackdropProps) {
  return (
    <button
      type="button"
      aria-label="Close contact form"
      onClick={onClose}
      className="absolute inset-0 cursor-default bg-slate-950/70 backdrop-blur-sm"
    />
  );
}
