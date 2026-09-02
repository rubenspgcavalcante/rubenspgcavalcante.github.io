import { Container, SectionKicker } from "./ui";

export function AboutSection() {
  return (
    <section className="py-19 md:py-25" id="about">
      <Container className="grid gap-9 md:grid-cols-[.8fr_1.2fr] md:gap-22.5">
        <div>
          <SectionKicker>01 · About</SectionKicker>
          <h2 className="m-0 max-w-160 text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.05] tracking-tighter">Staff-level technical leadership with deep frontend expertise.</h2>
        </div>
        <div className="prose-copy max-w-175 text-[1.06rem] leading-relaxed text-muted">
          <p>I am a Staff Software Engineer with 15+ years of experience building web and mobile applications, with deep expertise in JavaScript, TypeScript, React and the surrounding ecosystem.</p>
          <p>At JPMorgan Chase, I work on the Chase Mobile App core platform and contribute to architecture, engineering tooling, testing infrastructure, performance and observability. I am a permanent member of the Architecture Council and lead the frontend GraphQL working group.</p>
          <p>Earlier in my career I worked at Meta, OLX and Zalando, where my work ranged from product engineering and frontend architecture to developer experience, performance, CI/CD and cross-team technical leadership.</p>
        </div>
      </Container>
    </section>
  );
}
