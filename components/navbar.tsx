"use client"

import { useState } from "react"
import { Anchor, List, X, Download } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { NAV_ITEMS, COPYRIGHT_NAME } from "@/lib/constants"
import { Button } from "@/components/ui/button"

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                     */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container-section flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <Anchor size={28} weight="fill" className="text-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">
              {COPYRIGHT_NAME}
            </span>
            <span className="text-xs text-muted-foreground">Engine Cadet</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-label font-medium text-muted-foreground no-underline",
                "transition-colors hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="hidden gap-2 md:inline-flex"
          >
            <Download size={16} />
            Download CV
          </Button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-foreground md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="border-t border-border bg-muted md:hidden">
          <div className="container-section flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "text-label font-medium text-foreground no-underline",
                  "transition-colors hover:text-primary"
                )}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="w-full gap-2">
              <Download size={16} />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
