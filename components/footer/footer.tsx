import { FooterLinks } from "./footer-links"
import { FooterContact } from "./footer-contact"
import { FooterSocial } from "./footer-social"
import { FooterBottom } from "./footer-bottom"

export function Footer() {
  return (
    <footer className="border-t border-footer-border bg-deep-slate text-footer">
      <div className="container-section grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <FooterLinks />
        <FooterContact />
        <FooterSocial />
      </div>
      <FooterBottom />
    </footer>
  )
}
