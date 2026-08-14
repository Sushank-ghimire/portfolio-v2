interface SuccessProps {
  onClick: () => void;
}

export default function SuccessComponent({ onClick }: SuccessProps) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5 12 4 4L19 6"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        Message sent successfully
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
        Thanks for reaching out. I&apos;ll get back to you as soon as possible.
      </p>

      <button
        type="button"
        onClick={onClick}
        className="mt-7 rounded-xl cursor-pointer bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent-strong"
      >
        Done
      </button>
    </div>
  );
}
