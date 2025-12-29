"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "ACCUEIL" },
  { href: "/services", label: "SERVICES" },
  { href: "/realisations", label: "RÉALISATIONS" },
  { href: "/contact", label: "CONTACT" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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
              <a href="tel:0605506363">
                <Phone className="mr-2 h-4 w-4" />
                06 05 50 63 63
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
        "fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-in-out",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Backdrop with gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-primary/95 via-primary to-primary/90 backdrop-blur-md transition-all duration-500",
            isMenuOpen ? "scale-100" : "scale-95"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-between px-6 py-24 overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 mt-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-4 text-white transition-all duration-300",
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-3xl font-bold tracking-tight uppercase transition-all duration-300",
                    pathname === link.href
                      ? "text-white translate-x-4"
                      : "text-white/70 group-hover:text-white group-hover:translate-x-4"
                  )}>
                    {link.label}
                  </span>
                  <span className={cn(
                    "text-5xl font-light text-white/20 transition-all duration-300",
                    pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )}>
                    →
                  </span>
                </div>
                {/* Active indicator */}
                {pathname === link.href && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Section */}
          <div className={cn(
            "space-y-6 mt-auto transition-all duration-500 delay-300",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            {/* Divider */}
            <div className="h-px bg-white/20" />

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-white/80 text-sm uppercase tracking-wider font-medium">
                Contactez-Nous
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <a href="tel:0605506363" className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  06 05 50 63 63
                </a>
              </Button>
            </div>

            {/* Decorative Element */}
            <div className="flex justify-center pt-4">
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
