import { useState } from "react"

/**
 * Hook to manage the currently active navigation item.
 */
export function useActiveNavLink(pathname: string) {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [pendingLink, setPendingLink] = useState<string | null>(null)
  const [trackedPathname, setTrackedPathname] = useState(pathname)

  // React pattern: adjust state during render when props change
  if (trackedPathname !== pathname) {
    setTrackedPathname(pathname)
    setActiveLink(pendingLink)
    setPendingLink(null)
  }

  const activateLink = (linkName: string) => setActiveLink(linkName)
  const clearActiveLink = () => setActiveLink(null)
  const queueLinkForNavigation = (linkName: string) => setPendingLink(linkName)

  return { activeLink, activateLink, clearActiveLink, queueLinkForNavigation }
}
