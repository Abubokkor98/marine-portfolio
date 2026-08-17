"use client"

import { motion } from "motion/react"
import { NAV_ITEMS } from "@/lib/constants"
import { NavTab } from "./nav-tab"
import { containerVariants } from "./navbar-variants"

interface DesktopNavLinksProps {
  readonly activeLink: string | null
  readonly onNavigate: (targetHash: string, linkName: string) => void
}

export function DesktopNavLinks({ activeLink, onNavigate }: DesktopNavLinksProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative hidden lg:flex items-center gap-0.5"
    >
      {NAV_ITEMS.map((link) => (
        <NavTab
          key={link.label}
          href={link.href}
          label={link.label}
          isActive={activeLink === link.label}
          onNavigate={onNavigate}
        />
      ))}
    </motion.div>
  )
}
