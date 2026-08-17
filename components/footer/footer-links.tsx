import { FOOTER_NAV_ITEMS } from "@/lib/constants"
import { Text } from "@/components/text"

export function FooterLinks() {
  return (
    <div>
      <Text variant="label" className="mb-4 text-footer">
        Quick Links
      </Text>
      <nav className="flex flex-col gap-2.5">
        {FOOTER_NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-meta text-footer-muted no-underline transition-colors hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
