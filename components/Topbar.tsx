"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"

const socials = [
  {
    name: "Facebook",
    href: "#",
    color: "#1877F2",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    color: "#1DA1F2",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    color: "#0A66C2",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    color: "#E1306C",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    color: "#000000",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 448 512">
        <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    color: "#FF0000",
    icon: (
      <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
  },
]

export default function Topbar() {
  return (
    <div className="hidden w-full border-b border-white/10 bg-accent/80 text-white lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Left */}
        <div className="flex items-center gap-6 text-sm">
          <a href="mailto:info@eustaceepoxy.com" className="flex items-center gap-2 hover:text-secondary">
            <Mail size={16} />
            <span>info@eustaceepoxy.com</span>
          </a>

          <a href="tel:+254712345678" className="flex items-center gap-2 hover:text-secondary">
            <Phone size={16} />
            <span>+254 712 345 678</span>
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white transition hover:-translate-y-1 hover:text-white"
            >
              <span style={{ color: social.color }}>
                {social.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}