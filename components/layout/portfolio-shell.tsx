import { SideNavigation } from "@/components/layout/side-navigation";
import { SocialLinks } from "@/components/layout/social-links";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

interface PortfolioShellProps {
  children: React.ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="relative isolate min-h-screen bg-background">
      <CursorSpotlight opacity={0.15} size={800} />

      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-12 xl:gap-20">
          <aside className="py-12 sm:py-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-20">
            <div>
              <div className="max-w-md">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Sushank Ghimire
                </h1>

                <p className="mt-3 text-lg font-medium text-foreground">
                  Fullstack Engineer
                </p>

                <p className="mt-4 max-w-sm leading-relaxed text-muted">
                  I build accessible, thoughtful, and performant experiences for
                  the web.
                </p>
              </div>

              <SideNavigation />
            </div>

            <div className="mt-12 lg:mt-0">
              <SocialLinks />
            </div>
          </aside>

          <main className="py-12 sm:py-16 lg:py-24">{children}</main>
        </div>
      </div>
    </div>
  );
}
