"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { FooterData } from "@/types/sanity"

interface FooterProps {
  data?: FooterData
}

// Fallback data
const defaultMainNavLinks = [
  { _key: "1", href: "/", label: "Accueil" },
  { _key: "2", href: "/services", label: "Services" },
  { _key: "3", href: "/realisations", label: "Réalisations" },
  { _key: "4", href: "/contact", label: "Contact" },
]

const defaultLegalLinks = [
  { _key: "legal-1", href: "/mentions-legales", label: "Mentions légales" },
  { _key: "legal-2", href: "/politique-confidentialite", label: "Politique de confidentialité" },
]

export function Footer({ data }: FooterProps) {
  const pathname = usePathname()

  // Use Sanity data or fallback
  const companyName = data?.companyName || "LEB Dépannage"
  const description = data?.description || "Plomberie et rénovation à Boulogne-Billancourt et dans toute l'Île-de-France."
  const mainNavLinks = data?.mainNavLinks || defaultMainNavLinks
  const legalLinks = data?.legalLinks || defaultLegalLinks
  const address = data?.address || "50 rue du dôme, 92100 Boulogne-Billancourt"
  const copyrightText = data?.copyrightText || `© ${new Date().getFullYear()} ${companyName}. Tous droits réservés.`

  return (
    <footer className="bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
          {/* Left side - Logo and description */}
          <div className="space-y-4 max-w-sm text-center md:text-left">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{companyName}</h3>
            <p className="text-sm text-white font-medium leading-relaxed drop-shadow-lg">
              {description}
            </p>
          </div>

          {/* Right side - Navigation */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <nav className="flex flex-wrap gap-3 md:gap-8 justify-center md:justify-start items-center">
              {mainNavLinks.map((link) => (
                <Link
                  key={link._key}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold text-white transition-colors uppercase tracking-wide drop-shadow-lg whitespace-nowrap",
                    pathname === link.href ? "opacity-70 cursor-default" : "hover:text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-wrap gap-6 text-xs justify-center md:justify-start">
              {legalLinks.map((link) => (
                <Link
                  key={link._key}
                  href={link.href}
                  className={cn(
                    "text-white/80 transition-colors drop-shadow-md",
                    pathname === link.href ? "opacity-70 cursor-default" : "hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white font-medium">
            <p className="drop-shadow-md text-center md:text-left">Adresse : {address}</p>
            <p className="drop-shadow-md">{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
