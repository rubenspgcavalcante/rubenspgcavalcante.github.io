import { Card, Tag } from "./ui";
import { cn } from "../lib/utils";
import type { ExperienceItem } from "../data/content";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <Card className={cn("p-7", item.featured && "border-[#cbd5ff]")}>
      <div className="flex flex-col justify-between gap-2.5 md:flex-row md:gap-7">
        <div>
          <p className="mb-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">{item.role}</p>
          <h3 className="m-0 text-[1.55rem] font-bold tracking-[-0.03em]">{item.company}</h3>
        </div>
        <div className="text-sm text-muted md:text-right">
          <div>{item.dates}</div>
          <div>{item.location}</div>
        </div>
      </div>
      {item.product && <p className="mt-5 mb-2.5 font-bold">{item.product}</p>}
      <ul className="m-0 list-disc pl-5 text-muted [&>li+li]:mt-2.5">
        {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </Card>
  );
}
