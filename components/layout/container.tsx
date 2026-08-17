import { type HTMLAttributes, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/** Max-width wrapper with responsive horizontal padding. Uses container-section utility from globals.css. */
function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("container-section", className)} {...props}>
      {children}
    </div>
  )
}

export { Container, type ContainerProps }
