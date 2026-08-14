export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-muted-dark">&gt;</span>

          <span className="text-muted">loading</span>

          <span className="flex gap-1">
            <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
            <span
              className="h-1 w-1 animate-pulse rounded-full bg-accent"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-1 w-1 animate-pulse rounded-full bg-accent"
              style={{ animationDelay: "300ms" }}
            />
          </span>

          <span className="ml-1 h-4 w-px animate-pulse bg-accent" />
        </div>

        <div className="mt-5 h-px w-32 overflow-hidden bg-border">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] bg-accent" />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </div>
  );
}
