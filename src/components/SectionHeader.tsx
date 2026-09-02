import { SectionKicker } from "./ui";

export function SectionHeader({ number, title, note, muted = false }) {
  return (
    <div className="mb-9 flex flex-col items-start justify-between gap-3.5 md:flex-row md:items-end md:gap-10">
      <div>
        <SectionKicker tone={muted ? "accent" : "accent"}>{number} · {title}</SectionKicker>
        <h2 className="m-0 max-w-160 text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.05] tracking-tighter">{title === "Experience" ? "Selected roles" : title}</h2>
      </div>
      {note && <p className="m-0 max-w-107.5 text-muted">{note}</p>}
    </div>
  );
}
