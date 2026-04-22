import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Phone, Mail } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/spaces", label: "Houses" },
    { href: "/invest", label: "Investors" },
    { href: "/partners", label: "Partners" },
    { href: "/management", label: "Property Owners" },
  ],
  company: [
    { href: "/faqs", label: "FAQ" },
    { href: "/#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
}

const socialLinks = [
  { href: "https://www.instagram.com/spaces_by_ara?igsh=a2RmZGJqaTFic2M2&utm_source=qr", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/spaces-by-ara/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.tiktok.com/@spaces.by.ara?_r=1&_t=ZS-94ZXa2yk4Yv", icon: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  ), label: "TikTok" },
]

const contactInfo = {
  whatsapp: "+234 805 809 2401",
  emails: [
    { address: "Spacesbyara@gmail.com", label: "General" },
    { address: "Support@spacesbyara.com", label: "Support" },
    { address: "Operations@spacesbyara.com", label: "Operations" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/white logo.PNG"
                alt="Spaces by Ara"
                width={160}
                height={45}
                className="h-9 w-auto brightness-110"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              Long Stay. Affordable Monthly Pay
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-lime hover:text-dark-green transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-accent-lime">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-accent-lime">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-accent-lime">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`https://wa.me/2348058092401`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-accent-lime transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.whatsapp}
                </Link>
              </li>
              {contactInfo.emails.map((email) => (
                <li key={email.address}>
                  <Link
                    href={`mailto:${email.address}`}
                    className="flex items-center gap-2 text-white/80 hover:text-accent-lime transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{email.address}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/60 text-sm">
              {new Date().getFullYear()} Spaces by Ara. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
