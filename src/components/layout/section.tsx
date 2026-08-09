import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Section<T extends ElementType = "section">({
  as,
  className,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        className,
      )}
      {...props}
    />
  );
}