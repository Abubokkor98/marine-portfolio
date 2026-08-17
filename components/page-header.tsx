import { cn } from "@/lib/utils"
import { Text } from "@/components/text"

interface PageHeaderProps {
  /** Main page title (renders as h1) */
  title: string
  /** Optional subtitle below the title */
  subtitle?: string
  /** Additional classes on the wrapper div */
  className?: string
}

/** Standardized page header — h1 title, optional subtitle, Ocean Teal divider line. */
function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <Text variant="h1">{title}</Text>

      {subtitle && (
        <Text
          variant="body"
          className="mt-3 max-w-2xl text-lg text-muted-foreground"
        >
          {subtitle}
        </Text>
      )}

      <div className="mt-4 h-1 w-15 rounded-full bg-primary" aria-hidden />
    </div>
  )
}

export { PageHeader, type PageHeaderProps }
