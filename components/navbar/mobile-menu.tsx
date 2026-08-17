"use client"

import { ArrowUpRight } from "@phosphor-icons/react/ssr"
import { motion, AnimatePresence } from "motion/react"
import { NAV_ITEMS } from "@/lib/constants"
import { Button } from "@/components/ui/button"


interface MobileMenuProps {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly onNavigate: (targetHash: string, linkName: string) => void
}

export function MobileMenu({
  isOpen,
  onClose,
  onNavigate,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay for tap-to-dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-deep-slate/20 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Floating Glassmorphic Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl lg:hidden"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="rounded-2xl border border-border bg-background/90 p-4 sm:p-5 shadow-2xl shadow-deep-slate/10 backdrop-blur-2xl">
              <nav className="flex flex-col gap-1" aria-label="Main navigation">
                {NAV_ITEMS.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        onClose()
                        onNavigate(link.href, link.label)
                      }}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}

                {/* Bottom CTA Action */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.04 }}
                  className="mt-2 border-t border-border pt-3"
                >
                  <Button
                    variant="default"
                    className="w-full gap-2 rounded-xl py-3 font-semibold shadow-md shadow-primary/20 transition-all duration-300 hover:opacity-95 active:scale-[0.99]"
                    onClick={onClose}
                  >
                    <span>View CV</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
