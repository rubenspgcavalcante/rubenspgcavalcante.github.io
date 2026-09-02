import { forwardRef, type AnchorHTMLAttributes, type HTMLAttributes, type PropsWithChildren } from "react";
import { cn } from "../lib/utils";
import { buttonVariants, containerVariants, sectionKickerVariants } from "../lib/variants";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean;
};

export function Container({ className, narrow = false, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ narrow }), className)} {...props} />;
}

type SectionKickerProps = HTMLAttributes<HTMLParagraphElement> & {
  tone?: "accent" | "light";
};

export function SectionKicker({ tone = "accent", className, children, ...props }: PropsWithChildren<SectionKickerProps>) {
  return (
    <p className={cn(sectionKickerVariants({ tone }), className)} {...props}>
      {children}
    </p>
  );
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "darkSecondary" | "lightPrimary";
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { variant = "primary", className, ...props },
  ref,
) {
  return <a ref={ref} className={cn(buttonVariants({ variant }), className)} {...props} />;
});

Button.displayName = "Button";

export function Tag({ children }: PropsWithChildren) {
  return <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{children}</span>;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <article className={cn("overflow-hidden rounded-[20px] border border-border bg-surface shadow-(--shadow-card)", className)} {...props} />;
}
