import { capabilities, projects } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { Container, SectionKicker } from "./ui";

export function WorkSection() {
  return (
    <section className="py-[76px] md:py-[100px]" id="work">
      <Container>
        <div className="mb-9 flex flex-col items-start justify-between gap-3.5 md:flex-row md:items-end md:gap-10">
          <div>
            <SectionKicker>03 · Engineering</SectionKicker>
            <h2 className="m-0 text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.05em]">Selected work &amp; open source</h2>
          </div>
          <p className="m-0 max-w-[430px] text-muted">Projects that show the kind of engineering problems I like to solve.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title} className="rounded-[20px] bg-dark p-7 text-white">
              <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#9fb0ff]">{capability.title}</p>
              <h3 className="m-0 text-xl font-bold leading-tight">{capability.description}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
