import { useEffect, useState } from "react";
import { Container } from "./ui";
import { navVariants } from "../lib/variants";

const links = ["about", "experience", "work", "writing", "contact"] as const;
type NavLink = (typeof links)[number];
type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return "light";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Theme changes should still work when storage is unavailable.
    }
  }, [isDark, theme]);

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-6 md:min-h-18">
        <a href="#top" className="font-extrabold tracking-[-0.02em] no-underline">Rubens Cavalcante</a>
        <nav id="nav-menu" className={navVariants({ open })} aria-label="Primary navigation">
          {links.map((link: NavLink) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="text-sm text-muted transition-colors hover:text-foreground">
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <svg aria-hidden="true" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 3a6 6 0 0 0 9 7.4A9 9 0 1 1 12 3Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </Container>
    </header>
  );
}
