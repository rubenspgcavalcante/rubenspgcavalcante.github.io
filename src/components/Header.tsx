import { useState } from "react";
import { Container } from "./ui";
import { navVariants } from "../lib/variants";

const links = ["about", "experience", "work", "writing", "contact"] as const;
type NavLink = (typeof links)[number];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-6 md:min-h-[72px]">
        <a href="#top" className="font-extrabold tracking-[-0.02em] no-underline">Rubens Cavalcante</a>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav id="nav-menu" className={navVariants({ open })} aria-label="Primary navigation">
          {links.map((link: NavLink) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="text-sm text-muted transition-colors hover:text-foreground">
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
