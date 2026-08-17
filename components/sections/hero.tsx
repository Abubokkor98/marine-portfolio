import { Button } from "@/components/ui/button"
import { Text } from "@/components/text"
import { Download, ArrowRight } from "@phosphor-icons/react/ssr"

export function HeroSection() {
  return (
    <section id="hero" className="gradient-navy-to-slate py-20 lg:py-28">
      <div className="container-section">
        <div className="max-w-2xl">
          <Text variant="h1" className="text-footer">
            Engine Cadet at Hafnia Osprey
          </Text>

          <Text variant="body" className="mt-4 text-lg text-ocean-teal-light">
            Marine Engineer | Bangladesh Marine Academy Graduate
          </Text>

          <Text variant="body" className="mt-6 text-footer-muted">
            Passionate about marine engineering with hands-on experience in
            engine room operations aboard international merchant vessels.
          </Text>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="default" size="lg" className="gap-2">
              View My Experience
              <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-footer-border-accent text-footer hover:bg-footer-border-accent"
            >
              <Download size={16} />
              View CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
