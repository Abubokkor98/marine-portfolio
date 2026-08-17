import { COPYRIGHT_YEAR, COPYRIGHT_NAME } from "@/lib/constants"
import { Text } from "@/components/text"

export function FooterBottom() {
  return (
    <div className="border-t border-footer-border">
      <div className="container-section flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
        <Text variant="meta" as="span" className="text-footer-faded">
          © {COPYRIGHT_YEAR} {COPYRIGHT_NAME}. All rights reserved.
        </Text>
        <Text
          variant="meta"
          as="span"
          className="hidden text-footer-faded sm:block"
        >
          Built with Next.js &amp; shadcn/ui
        </Text>
      </div>
    </div>
  )
}
