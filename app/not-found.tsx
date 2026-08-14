export default function NotFound() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 text-lg">
          <p className="font-semibold">404</p>
          <span className="h-8 w-0.5 bg-foreground/20" />
          <p className="text-foreground/70">This page could not be found.</p>
        </div>
      </div>
    </main>
  );
}
