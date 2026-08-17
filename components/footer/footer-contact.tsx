import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/ssr"

import { CONTACT_INFO } from "@/lib/constants"
import { Text } from "@/components/text"

/* -------------------------------------------------------------------------- */
/*  Contact info column                                                        */
/* -------------------------------------------------------------------------- */

export function FooterContact() {
  return (
    <div>
      <Text variant="label" className="mb-4 text-footer">
        Get in Touch
      </Text>
      <div className="flex flex-col gap-3">
        <ContactRow
          icon={EnvelopeSimple}
          href={`mailto:${CONTACT_INFO.email}`}
          label={CONTACT_INFO.email}
        />
        <ContactRow
          icon={Phone}
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
          label={CONTACT_INFO.phone}
        />
        <ContactRow icon={MapPin} label={CONTACT_INFO.location} />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Single contact row                                                         */
/* -------------------------------------------------------------------------- */

interface ContactRowProps {
  icon: React.ElementType
  label: string
  href?: string
}

function ContactRow({ icon: Icon, label, href }: ContactRowProps) {
  const content = (
    <span className="flex items-center gap-2.5 text-meta text-footer-muted">
      <Icon size={16} className="shrink-0" />
      {label}
    </span>
  )

  if (!href) return content

  return (
    <a
      href={href}
      className="no-underline transition-colors hover:text-primary"
    >
      {content}
    </a>
  )
}
