"use client"

import { List, X } from "@phosphor-icons/react/ssr"
import { motion } from "motion/react"
import { itemVariants } from "./navbar-variants"

interface MobileMenuToggleProps {
  readonly isOpen: boolean
  readonly onToggle: () => void
}

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <motion.div variants={itemVariants} className="flex lg:hidden items-center">
      <button
        onClick={onToggle}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/80 text-foreground transition-all duration-200 hover:bg-secondary active:scale-95"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={18} weight="bold" />
        ) : (
          <List size={18} weight="bold" />
        )}
      </button>
    </motion.div>
  )
}
