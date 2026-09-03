import { Card, SectionKicker } from "./ui";

export function ExperienceMoveCard() {
  return (
    <Card className="h-full p-7 flex flex-col">
      <SectionKicker>Brazil to Berlin</SectionKicker>
      <h3 className="m-0 text-[1.55rem] font-bold tracking-[-0.03em]">
        Berlin became the next chapter after 8+ years building software in
        Brazil.
      </h3>

      <div className="my-6 grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm font-bold">
        <div className="rounded-full border border-border bg-band px-3 py-1.5">
          Fortaleza
        </div>
        <div className="relative h-px bg-border">
          <div className="absolute -top-1 left-0 size-2.5 rounded-full bg-accent" />
          <div className="absolute -top-1 right-0 size-2.5 rounded-full bg-accent" />
        </div>
        <div className="rounded-full border border-border bg-band px-3 py-1.5">
          Berlin
        </div>
      </div>

      <div className="grid gap-3 text-sm sm:grid-cols-2 items-end grow">
        <div className="rounded-2xl border border-border bg-band p-4">
          <div className="text-2xl font-extrabold">2008-2016</div>
          <div className="mt-1 text-muted">software work in Brazil</div>
        </div>
        <div className="rounded-2xl border border-border bg-band p-4">
          <div className="text-2xl font-extrabold">Dec 2016</div>
          <div className="mt-1 text-muted">joined Zalando in Berlin</div>
        </div>
      </div>
    </Card>
  );
}
