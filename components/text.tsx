import { type ElementType, type HTMLAttributes, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  Variant types                                                              */
/* -------------------------------------------------------------------------- */

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "label"
  | "meta"

/* -------------------------------------------------------------------------- */
/*  Variant → default HTML element mapping                                     */
/* -------------------------------------------------------------------------- */

const VARIANT_DEFAULT_ELEMENT: Record<TextVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-sm": "p",
  label: "span",
  meta: "span",
}

/* -------------------------------------------------------------------------- */
/*  Variant → Tailwind class mapping                                           */
/*  Font sizes come from globals.css @theme tokens (text-h1, text-body, etc.)  */
/*  This is the ONLY place styling is mapped — strict DRY.                     */
/* -------------------------------------------------------------------------- */

const VARIANT_CLASSES: Record<TextVariant, string> = {
  h1: "font-display text-h1 font-bold text-navy-blue",
  h2: "font-display text-h2 font-bold text-navy-blue",
  h3: "font-display text-h3 font-semibold text-navy-blue",
  h4: "font-display text-h4 font-semibold text-navy-blue",
  body: "text-body text-foreground",
  "body-sm": "text-body-sm text-foreground",
  label: "text-label font-medium text-muted-foreground",
  meta: "text-meta text-muted-foreground",
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Typography variant — controls font size, weight, color, and default element */
  variant?: TextVariant
  /** Override the rendered HTML element (e.g. render an h2 styled as h3) */
  as?: ElementType
  children: ReactNode
}

function Text({
  variant = "body",
  as,
  className,
  children,
  ...props
}: TextProps) {
  const Component = as ?? VARIANT_DEFAULT_ELEMENT[variant]

  return (
    <Component className={cn(VARIANT_CLASSES[variant], className)} {...props}>
      {children}
    </Component>
  )
}

export { Text, type TextVariant, type TextProps }
