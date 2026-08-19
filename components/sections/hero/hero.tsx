"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Anchor, ArrowRight, FileText } from "@phosphor-icons/react/ssr"
import GradientWaves from "@/components/GradientWaves"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { HERO_TEXT, HERO_IMAGE_PATH, HERO_IMAGE_ALT } from "./hero-constants"

/* -------------------------------------------------------------------------- */
/*  Animation constants                                                        */
/* -------------------------------------------------------------------------- */

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

function transition(delay: number) {
  return { duration: 0.7, ease: EASE_OUT_EXPO, delay }
}

/* -------------------------------------------------------------------------- */
/*  Hero Section                                                               */
/* -------------------------------------------------------------------------- */

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })
  const animate = isInView ? "visible" : "hidden"

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-[90vh] lg:pt-36 lg:pb-24"
    >
      {/* Animated ocean wave background */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <GradientWaves
          horizonColor="#0284C7"
          waveColor="#0891B2"
          crestColor="#38BDF8"
          speed={0.4}
          amplitude={2.8}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.15}
          zoom={1.0}
          height={3.5}
          fogDepth={25}
          detail="medium"
          brightness={1.0}
          opacity={0.85}
          mouseInteraction={true}
          parallaxStrength={0.4}
          grain={true}
          grainIntensity={0.04}
          className="h-full w-full"
        />
        {/* Soft bottom gradient to ensure smooth transition to next section */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left Column: Narrative ── */}
          <div className="flex flex-col items-start gap-6 lg:gap-7">

            {/* Academy eyebrow */}
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              animate={animate}
              transition={transition(0)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-light-gray px-3.5 py-1.5"
            >
              <Anchor size={14} className="text-ocean-teal" />
              <span className="text-xs font-medium tracking-wide text-muted-foreground">
                {HERO_TEXT.academy}
              </span>
            </motion.div>

            {/* Name — the one big moment */}
            <motion.h1
              variants={FADE_UP}
              initial="hidden"
              animate={animate}
              transition={transition(0.1)}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-blue sm:text-5xl lg:text-6xl"
            >
              {HERO_TEXT.cadetName}
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={FADE_UP}
              initial="hidden"
              animate={animate}
              transition={transition(0.18)}
              className="text-lg font-medium text-ocean-teal sm:text-xl"
            >
              {HERO_TEXT.roleTitle}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={FADE_UP}
              initial="hidden"
              animate={animate}
              transition={transition(0.26)}
              className="max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              {HERO_TEXT.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              animate={animate}
              transition={transition(0.34)}
              className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4"
            >
              <Button
                size="lg"
                className="gap-2"
                render={
                  <Link href={HERO_TEXT.primaryCtaHref}>
                    <span>{HERO_TEXT.primaryCtaText}</span>
                    <ArrowRight size={18} weight="bold" />
                  </Link>
                }
              />
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                render={
                  <Link
                    href={HERO_TEXT.secondaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText size={18} />
                    <span>{HERO_TEXT.secondaryCtaText}</span>
                  </Link>
                }
              />
            </motion.div>
          </div>

          {/* ── Right Column: Portrait ── */}
          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate={animate}
            transition={transition(0.2)}
            className="mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border shadow-xl shadow-navy-blue/8">
              <Image
                src={HERO_IMAGE_PATH}
                alt={HERO_IMAGE_ALT}
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 420px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
