import type { WritingItem } from "../data/content";
import { Card } from "./ui";

interface WritingCardProps {
  item: WritingItem;
}

export function WritingCard({ item }: WritingCardProps) {
  return (
    <Card className="p-7 shadow-none">
      <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">{item.type}</p>
      <h3 className="m-0 mb-2.5 text-[1.35rem] font-bold tracking-[-0.03em]">{item.title}</h3>
      <p className="m-0 mb-4.5 text-muted">{item.description}</p>
      {item.href && item.cta && (
        <a className="font-extrabold no-underline hover:underline" href={item.href} target="_blank" rel="noopener noreferrer">{item.cta}</a>
      )}
    </Card>
  );
}
