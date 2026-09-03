import { Container, SectionKicker } from "./ui";
import { writing } from "../data/content";
import { WritingCard } from "./WritingCard";

export function WritingSection() {
  return (
    <section className="border-y border-border bg-band py-19 md:py-25" id="writing">
      <Container>
        <div className="mb-9 flex flex-col items-start justify-between gap-3.5 md:flex-row md:items-end md:gap-10">
          <div><SectionKicker>04 · Writing & community</SectionKicker><h2 className="m-0 text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.05] tracking-tighter">Teaching, writing and contributing</h2></div>
          <p className="m-0 max-w-107.5 text-muted">Over half a million views across technical publications, plus talks and open-source contributions.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {writing.map((item) => <WritingCard key={item.title} item={item} />)}
        </div>
      </Container>
    </section>
  );
}
