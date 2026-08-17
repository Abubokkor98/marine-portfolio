"use client"

import type { MouseEvent } from "react"
import { Anchor } from "@phosphor-icons/react/ssr"
import { motion } from "motion/react"
import { COPYRIGHT_NAME, ROLE_TITLE } from "@/lib/constants"
import { itemVariants } from "./navbar-variants"

interface NavbarLogoProps {
  readonly onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function NavbarLogo({ onClick }: NavbarLogoProps) {
  return (
    <motion.div variants={itemVariants}>
      <a
        href="#hero"
        onClick={onClick}
        className="flex items-center gap-2.5 no-underline"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs">
          <Anchor size={17} weight="bold" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs sm:text-sm font-bold tracking-tight text-navy-blue">
            {COPYRIGHT_NAME}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">
            {ROLE_TITLE}
          </span>
        </div>
      </a>
    </motion.div>
  )
}
