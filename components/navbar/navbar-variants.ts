import type { Variants, Transition } from "motion/react"

export const navbarVariants: Variants = {
  hidden: { y: "-120%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: SMOOTH_EASE },
  },
}

export const SPRING_TRANSITION: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 30,
}
