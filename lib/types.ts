/* -------------------------------------------------------------------------- */
/*  Shared TypeScript types for the Marine Portfolio                           */
/* -------------------------------------------------------------------------- */

/** Navigation link used in Navbar and Footer */
export interface NavItem {
  readonly label: string
  readonly href: string
}

/** Social media / external profile link */
export interface SocialLink {
  readonly platform: string
  readonly url: string
  readonly label: string
}

/** Vessel / ship information */
export interface ShipInfo {
  readonly name: string
  readonly type: string
  readonly imo: string
  readonly mmsi: string
  readonly joinedDate: string
  readonly status: "Active" | "Completed"
}

/** Global site configuration */
export interface SiteConfig {
  readonly name: string
  readonly title: string
  readonly description: string
  readonly url: string
  readonly keywords: readonly string[]
}

/** Certification status badge */
export type CertificationStatus = "Active" | "Completed" | "Pending"

/** Skill proficiency level */
export type ProficiencyLevel = "Beginner" | "Intermediate" | "Proficient" | "Expert"
