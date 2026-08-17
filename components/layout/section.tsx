import { type HTMLAttributes, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

/** Page section with consistent vertical padding. Compose with Container for standard layout. */
function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-20", className)} {...props}>
      {children}
    </section>
  )
}

export { Section, type SectionProps }
