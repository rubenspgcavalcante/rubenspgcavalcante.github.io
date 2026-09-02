import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex min-h-[76px] flex-col justify-center gap-1.5 py-4 text-sm text-muted md:min-h-[90px] md:flex-row md:items-center md:justify-between md:py-0">
        <span>© {new Date().getFullYear()} Rubens Cavalcante</span><span>London, United Kingdom</span>
      </Container>
    </footer>
  );
}
