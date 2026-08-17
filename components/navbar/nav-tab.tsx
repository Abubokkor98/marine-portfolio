"use client"

import type { MouseEvent } from "react"
import { motion } from "motion/react"
import { itemVariants, SPRING_TRANSITION } from "./navbar-variants"
import { cn } from "@/lib/utils"

interface NavTabProps {
  readonly href: string
  readonly label: string
  readonly isActive: boolean
  readonly onNavigate: (targetHash: string, linkName: string) => void
}

export function NavTab({ href, label, isActive, onNavigate }: NavTabProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href, label)
  }

  return (
    <motion.div variants={itemVariants} className="relative">
      <a
        href={href}
        onClick={handleClick}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "relative z-10 block px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-300",
          isActive
            ? "text-ocean-teal"
            : "text-foreground hover:text-primary"
        )}
      >
        {label}
      </a>

      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-ocean-teal/10"
          transition={SPRING_TRANSITION}
        />
      )}
    </motion.div>
  )
}
