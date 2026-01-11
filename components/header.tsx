"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { HeaderData } from "@/types/sanity"

interface HeaderProps {
  data?: HeaderData
}

// Fallback data
const defaultNavLinks = [
  { _key: "1", href: "/", label: "ACCUEIL" },
  { _key: "2", href: "/services", label: "SERVICES" },
  { _key: "3", href: "/realisations", label: "RÉALISATIONS" },
  { _key: "4", href: "/contact", label: "CONTACT" },
]

export function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Use Sanity data or fallback
  const navLinks = data?.navLinks || defaultNavLinks
  const contactPhone = data?.contactPhone || "06 05 50 63 63"
  const contactButtonLabel = data?.contactButtonLabel || "Contactez-Nous"

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu with smooth transition
  const handleLinkClick = () => {
    // Add a small delay before closing for smoother transition
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 200)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8 lg:px-12">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-[60]">
            <Image
              src="/images/image.png"
              alt="LEB Dépannage - Logo"
              width={80}
              height={80}
              className="h-16 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2 text-[13px] font-bold tracking-wider transition-all hover:text-primary uppercase group",
                  pathname === link.href ? "text-primary" : "text-foreground",
                )}
              >
                {link.label}
                {/* Underline indicator */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === link.href ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 h-11 shadow-md hover:shadow-lg transition-all">
              <a href={`tel:${contactPhone.replace(/\s/g, '')}`}>
                <Phone className="mr-2 h-4 w-4" />
                {contactPhone}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-[60] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              {/* Hamburger to X animation */}
              <span className={cn(
                "block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center",
                isMenuOpen ? "rotate-45 translate-y-[9px]" : "rotate-0"
              )} />
              <span className={cn(
                "block h-0.5 w-full bg-current rounded-full transition-all duration-300",
                isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )} />
              <span className={cn(
                "block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center",
                isMenuOpen ? "-rotate-45 -translate-y-[9px]" : "rotate-0"
              )} />
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-[55] md:hidden h-[100dvh] w-full bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] transition-transform duration-300 ease-in-out overflow-y-auto overscroll-none",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Backdrop click handler only */}
        <div
          className="absolute inset-0 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Close Button */}
        <button
          className="absolute top-3 max-lg:landscape:top-2 right-4 max-lg:landscape:right-3 z-[60] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <X className="h-6 w-6 max-lg:landscape:h-5 max-lg:landscape:w-5 text-white" />
        </button>

        {/* Menu Content */}
        <div className="relative min-h-full flex flex-col justify-between px-6 max-lg:landscape:px-4 pt-16 max-lg:landscape:pt-12 pb-6 max-lg:landscape:pb-4">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 max-lg:landscape:gap-0">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-4 max-lg:landscape:py-2 text-white transition-all duration-300",
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms'
                }}
                onClick={handleLinkClick}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-3xl max-lg:landscape:text-2xl font-bold tracking-tight uppercase transition-all duration-300",
                    pathname === link.href
                      ? "text-white translate-x-4"
                      : "text-white/70 group-hover:text-white group-hover:translate-x-4"
                  )}>
                    {link.label}
                  </span>
                  <span className={cn(
                    "text-5xl max-lg:landscape:text-4xl font-light text-white/20 transition-all duration-300",
                    pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )}>
                    →
                  </span>
                </div>
                {/* Active indicator */}
                {pathname === link.href && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 max-lg:landscape:h-8 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Section */}
          <div className={cn(
            "space-y-6 max-lg:landscape:space-y-3 mt-auto transition-all duration-500 delay-300",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            {/* Divider */}
            <div className="h-px bg-white/20" />

            {/* Call to Action */}
            <div className="space-y-4 max-lg:landscape:space-y-2">
              <p className="text-white/80 text-sm max-lg:landscape:text-xs uppercase tracking-wider font-medium">
                {contactButtonLabel}
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg max-lg:landscape:text-base py-6 max-lg:landscape:py-4 rounded-2xl max-lg:landscape:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 max-lg:landscape:h-4 max-lg:landscape:w-4" />
                  {contactPhone}
                </a>
              </Button>
            </div>

            {/* Decorative Element */}
            <div className="flex justify-center pt-4 max-lg:landscape:pt-2">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
