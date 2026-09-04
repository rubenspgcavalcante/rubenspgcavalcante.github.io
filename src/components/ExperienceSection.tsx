import { Fragment } from "react";
import { experience } from "../data/content";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceMoveCard } from "./ExperienceMoveCard";
import { Container, SectionKicker } from "./ui";

export function ExperienceSection() {
  const [featured, ...rest] = experience;

  return (
    <section className="border-y border-border bg-band py-19 md:py-25" id="experience">
      <Container>
        <div className="mb-9 flex flex-col items-start justify-between gap-3.5 md:flex-row md:items-end md:gap-10">
          <div>
            <SectionKicker>02 · Experience</SectionKicker>
            <h2 className="m-0 text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.05] tracking-tighter">Selected roles</h2>
          </div>
          <p className="m-0 max-w-107.5 text-muted">A career built around increasingly broad technical scope.</p>
        </div>
        <ExperienceCard item={featured} />
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((item) => (
            <Fragment key={item.company}>
              <ExperienceCard item={item} />
              {item.company === "Zalando" && <ExperienceMoveCard />}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
