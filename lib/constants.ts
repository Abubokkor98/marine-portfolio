import type { NavItem, ShipInfo, SiteConfig, SocialLink } from "@/lib/types"

/* -------------------------------------------------------------------------- */
/*  Site configuration                                                         */
/* -------------------------------------------------------------------------- */

export const SITE_CONFIG: SiteConfig = {
  name: "Marine Engineer Portfolio",
  title: "Marine Engineer Portfolio | Engine Cadet",
  description:
    "Engine Cadet at Bangladesh Marine Academy. Professional portfolio showcasing sea experience, certifications, and technical skills in marine engineering.",
  url: "https://portfolio-domain.com",
  keywords: [
    "marine engineer",
    "engine cadet",
    "merchant navy",
    "Bangladesh Marine Academy",
    "Hafnia Osprey",
  ],
}

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

/** Subset of nav items shown in the footer Quick Links column */
export const FOOTER_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

/* -------------------------------------------------------------------------- */
/*  Social links                                                               */
/* -------------------------------------------------------------------------- */

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    label: "Connect on LinkedIn",
  },
  {
    platform: "GitHub",
    url: "https://github.com/yourprofile",
    label: "View GitHub Profile",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourhandle",
    label: "Follow on Twitter",
  },
  {
    platform: "Email",
    url: "mailto:your.email@example.com",
    label: "Send an Email",
  },
]

/* -------------------------------------------------------------------------- */
/*  Contact information                                                        */
/* -------------------------------------------------------------------------- */

export const CONTACT_INFO = {
  email: "your.email@example.com",
  phone: "+880 XXXX XXXXXX",
  location: "Dhaka, Bangladesh",
  responseTime: "I typically respond within 24 hours",
} as const

/* -------------------------------------------------------------------------- */
/*  Ship / vessel data                                                         */
/* -------------------------------------------------------------------------- */

export const CURRENT_SHIP: ShipInfo = {
  name: "Hafnia Osprey",
  type: "Chemical/Product Tanker",
  imo: "IMO_NUMBER",
  mmsi: "MMSI_NUMBER",
  joinedDate: "June 2024",
  status: "Active",
}

/* -------------------------------------------------------------------------- */
/*  Copyright                                                                  */
/* -------------------------------------------------------------------------- */

export const COPYRIGHT_YEAR = 2026
export const COPYRIGHT_NAME = "Sumaiya Akter"
export const ROLE_TITLE = "Engine Cadet"
