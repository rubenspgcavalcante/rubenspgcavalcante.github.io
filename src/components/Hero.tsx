import { Button, Container } from "./ui";

export function Hero() {
  return (
    <section className="py-20 md:py-24" id="hero">
      <Container className="grid items-center gap-9 md:grid-cols-[minmax(0,1.45fr)_minmax(280px,.55fr)] md:gap-[60px]">
        <div>
          <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">
            Staff Software Engineer · London, UK
          </p>
          <h1 className="max-w-[850px] text-[clamp(2.9rem,7vw,5.9rem)] font-extrabold leading-[0.98] tracking-[-0.06em]">
            Engineering systems that scale - and teams that can evolve them.
          </h1>
          <p className="mt-7 max-w-[760px] text-lg leading-relaxed text-muted">
            Staff Software Engineer with a long frontend background,
            specialising in React, TypeScript, platform architecture, developer
            experience, GraphQL, testing and technical leadership.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href="https://www.linkedin.com/in/rubens-cavalcante/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/rubenspgcavalcante"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              GitHub
            </Button>
            <a
              className="font-semibold no-underline hover:underline md:ml-2"
              href="mailto:rubenspgcavalcante@gmail.com"
            >
              rubenspgcavalcante@gmail.com
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted">
            <span>JPMorgan Chase</span>
            <span>Formerly Meta · OLX · Zalando</span>
          </div>
        </div>
        <div className="rounded-[28px] bg-dark text-white shadow-[0_30px_80px_rgba(11,16,32,.24)]">
          <div className="rounded-t-[28px] bg-gradient-to-br from-[#1a2440] to-[#0c1223] px-6 pt-6">
            <img
              src="/assets/profile/me.webp"
              alt="Rubens Cavalcante"
              className="mx-auto w-full max-w-[300px] rounded-t-[18px] saturate-90"
            />
          </div>
          <div className="p-6">
            <p className="mb-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#9fb0ff]">
              Current focus
            </p>
            <p className="m-0 text-base font-bold">
              Architecture · Platform Engineering · DX · GraphQL
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
