import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" }, 
      { name: "Products", href: "/products" }, 
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Microcement Floors & Walls", href: "/services" },
      { name: "Venetian Plaster", href: "/services" },
      { name: "Epoxy Flooring", href: "/services" },
      { name: "Waterproofing Systems", href: "/services" },
      { name: "Protective Coatings", href: "/services" },
      { name: "E casacrete Microcement Products", href: "/services" },
    ],
  },
]

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/EustaceEpoxyLtd",
    color: "#1877F2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[18px] w-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    color: "#E4405F",
    icon: (
      <svg
        xmlns="https://www.instagram.com/eustaceepoxy/"
        className="h-[18px] w-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eustace-epoxy-79b5571a8/",
    color: "#0A66C2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[18px] w-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
]

export default function FooterSection() {
  return (
    <footer className="bg-primary text-white">
      {/* Top Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:gap-20 lg:px-16">
          
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/eustace-logo.webp"
                alt="Eustace Epoxy Ltd"
                width={220}
                height={60}
                className="h-auto w-auto"
              />
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Eustace Epoxy Ltd specializes in epoxy flooring, microcement,
              Venetian plaster, waterproofing systems, and decorative finishes
              for residential, commercial, and industrial spaces across Kenya.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-white/10"
                >
                  <div
                    style={{ color: social.color }}
                    className="transition duration-300"
                  >
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8">
            {footerLinks.map((group, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-6 flex flex-col gap-4">
                  {group.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-secondary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact Details
            </h3>

            <div className="mt-6 space-y-5 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-secondary" />
                <span>Call / WhatsApp: +254 703 210 873</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-secondary" />
                <span>info@eustacepoxy.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-secondary" />
                <span>Kitengela, Kajiado County, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-white/60 md:flex-row md:px-12 lg:px-16">
        <p>
          © {new Date().getFullYear()} Eustace Epoxy Ltd. All rights reserved.
        </p>

        <p>
          Professional Epoxy Flooring, Microcement & Decorative Finishes
          Across Kenya.
        </p>
      </div>
    </footer>
  )
}