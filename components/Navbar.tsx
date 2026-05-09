"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300 bg-primary ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/eustace-logo.webp" alt="Logo" width={180} height={50} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-white/80 transition hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/quote"
            className="rounded-xl border border-accent px-5 py-2 text-sm text-white hover:bg-secondary"
          >
            Get Quote
          </Link>

          <Link
            href="/contact"
            className="rounded-xl bg-secondary px-5 py-2 text-sm text-white hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
{/* Mobile menu */}
<div
  className={`fixed top-20 right-0 z-50 h-[calc(70vh-80px)] w-[60%] md:hidden transform overflow-hidden border-l border-white/10 bg-primary shadow-2xl transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex h-full flex-col px-8 py-6 ">

    {/* Nav Links */}
    <div className="flex flex-col gap-5">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-base font-medium text-white/90 transition hover:text-secondary"
        >
          {link.name}
        </Link>
      ))}
    </div>

    {/* Divider */}
    <div className="my-6 h-px w-full bg-white/10" />

    {/* Buttons */}
    <div className="mt-auto flex flex-col gap-3">
      <Link
        href="/quote"
        onClick={() => setIsOpen(false)}
        className="rounded-xl border border-secondary px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-secondary"
      >
        Get Quote
      </Link>

      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="rounded-xl bg-secondary px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
      >
        Contact
      </Link>
    </div>
  </div>
</div>
    </header>
  )
}