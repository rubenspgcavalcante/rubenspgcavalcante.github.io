import { variants } from "classname-variants";

export const buttonVariants = variants({
  base: "inline-flex min-h-11 items-center justify-center rounded-full border px-4.5 text-sm font-bold no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  variants: {
    variant: {
      primary: "border-transparent bg-foreground text-white hover:opacity-90",
      secondary: "border-border bg-surface text-foreground hover:bg-gray-50",
      darkSecondary: "border-[#36415d] bg-transparent text-white hover:bg-white/5",
      lightPrimary: "border-transparent bg-white text-foreground hover:bg-white/90",
    },
  },
  defaultVariants: { variant: "primary" },
});

export const containerVariants = variants({
  base: "mx-auto w-[min(calc(100%_-_40px),1180px)]",
  variants: {
    narrow: {
      true: "max-w-4xl",
      false: "max-w-none",
    },
  },
  defaultVariants: { narrow: false },
});

export const sectionKickerVariants = variants({
  base: "mb-3.5 text-[0.78rem] font-extrabold uppercase tracking-[0.12em]",
  variants: {
    tone: {
      accent: "text-accent",
      light: "text-[#9fb0ff]",
    },
  },
  defaultVariants: { tone: "accent" },
});

export const navVariants = variants({
  base: "md:static md:flex md:flex-row md:items-center md:gap-6",
  variants: {
    open: {
      true: "absolute left-3.5 right-3.5 top-[68px] flex flex-col rounded-2xl border border-border bg-surface p-3 shadow-[var(--shadow-card)]",
      false: "hidden",
    },
  },
  defaultVariants: { open: false },
});
