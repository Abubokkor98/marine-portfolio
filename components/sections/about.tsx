import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/page-header"
import { Text } from "@/components/text"

export function AboutSection() {
  return (
    <Section id="about" className="bg-light-gray">
      <Container>
        <PageHeader
          title="About Me"
          subtitle="Marine Engineer in Progress"
        />
        <Text variant="body" className="max-w-3xl">
          Placeholder — Introduction, journey timeline, skills overview, and
          values section will be built here.
        </Text>
      </Container>
    </Section>
  )
}
