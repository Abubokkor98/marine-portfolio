"use client"

import { ArrowUpRight } from "@phosphor-icons/react/ssr"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { containerVariants, itemVariants } from "./navbar-variants"

interface DesktopActionsProps {
  readonly onResumeClick: () => void
}

export function DesktopActions({ onResumeClick }: DesktopActionsProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex items-center gap-3"
    >
      <motion.div variants={itemVariants}>
        <Button
          variant="default"
          size="sm"
          onClick={onResumeClick}
          className="gap-1.5 rounded-full px-4 text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Download CV</span>
          <ArrowUpRight size={14} weight="bold" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
