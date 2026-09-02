import { Button, Container, SectionKicker } from "./ui";

export function ContactSection() {
  return (
    <section className="py-[76px] md:py-[100px]" id="contact">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 rounded-[28px] bg-dark p-7 text-white md:flex-row md:p-11">
          <div>
            <SectionKicker tone="light">05 · Contact</SectionKicker>
            <h2 className="m-0 max-w-[750px] text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.05em]">Interested in Staff / Principal-level engineering opportunities?</h2>
            <p className="mt-5 max-w-[700px] text-[#cbd2df]">For opportunities, technical conversations or collaborations, the best channels are LinkedIn or email.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="lightPrimary" href="https://www.linkedin.com/in/rubens-cavalcante/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</Button>
            <Button variant="darkSecondary" href="mailto:rubenspgcavalcante@gmail.com">Send an email</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
