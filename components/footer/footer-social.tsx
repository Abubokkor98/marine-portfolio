import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  XLogo,
} from "@phosphor-icons/react/ssr"

import { SOCIAL_LINKS } from "@/lib/constants"
import { Text } from "@/components/text"

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  LinkedIn: LinkedinLogo,
  GitHub: GithubLogo,
  Twitter: XLogo,
  Email: EnvelopeSimple,
}

export function FooterSocial() {
  return (
    <div>
      <Text variant="label" className="mb-4 text-footer">
        Follow
      </Text>
      <div className="flex gap-3">
        {SOCIAL_LINKS.map((link) => {
          const Icon = SOCIAL_ICON_MAP[link.platform] ?? EnvelopeSimple
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-border-accent text-footer-muted transition-all hover:scale-110 hover:bg-primary hover:text-footer"
            >
              <Icon size={18} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
