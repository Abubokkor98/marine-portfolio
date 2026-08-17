"use client"

import { useCallback, useState, type MouseEvent } from "react"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "motion/react"
import { useActiveNavLink } from "@/hooks/useActiveNavLink"
import { NavbarLogo } from "./navbar-logo"
import { DesktopNavLinks } from "./desktop-nav-links"
import { DesktopActions } from "./desktop-actions"
import { MobileMenuToggle } from "./mobile-menu-toggle"
import { MobileMenu } from "./mobile-menu"
import {
  navbarVariants,
  SPRING_TRANSITION,
} from "./navbar-variants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const { activeLink, activateLink, clearActiveLink, queueLinkForNavigation } =
    useActiveNavLink(pathname)

  const handleLogoClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      clearActiveLink()

      const isHomePage = window.location.pathname === "/"
      if (isHomePage) {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
        window.history.pushState(null, "", "/")
      }
    },
    [clearActiveLink]
  )

  const handleNavigate = useCallback(
    (targetHash: string, linkName: string) => {
      activateLink(linkName)

      if (pathname !== "/") {
        queueLinkForNavigation(linkName)
        router.push("/" + targetHash)
        return
      }

      const element = document.querySelector(targetHash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }

      window.history.pushState(null, "", targetHash)
    },
    [pathname, router, activateLink, queueLinkForNavigation]
  )

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        transition={SPRING_TRANSITION}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[85%] max-w-5xl sm:top-4"
      >
        <div className="flex items-center justify-between rounded-full border border-border bg-background/80 px-3.5 py-2 shadow-lg shadow-deep-slate/5 backdrop-blur-xl sm:px-5 sm:py-2.5">
          {/* Logo */}
          <NavbarLogo onClick={handleLogoClick} />

          {/* Desktop Nav Items */}
          <DesktopNavLinks
            activeLink={activeLink}
            onNavigate={handleNavigate}
          />

          {/* Desktop Action & Mobile/Tablet Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <DesktopActions onResumeClick={clearActiveLink} />
            <MobileMenuToggle
              isOpen={isOpen}
              onToggle={() => setIsOpen((prev) => !prev)}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile & Tablet Floating Dropdown Glass Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  )
}
