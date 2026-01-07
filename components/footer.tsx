"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Footer() {
  const pathname = usePathname()

  return (
    <footer className="bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
          {/* Left side - Logo and description */}
          <div className="space-y-4 max-w-sm text-center md:text-left">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">LEB Dépannage</h3>
            <p className="text-sm text-white font-medium leading-relaxed drop-shadow-lg">
              Plomberie et rénovation à Boulogne-Billancourt et dans toute l'Île-de-France.
            </p>
          </div>

          {/* Right side - Navigation */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <nav className="flex flex-wrap gap-3 md:gap-8 justify-center md:justify-start items-center">
              <Link
                href="/"
                className={cn(
                  "text-sm font-semibold text-white transition-colors uppercase tracking-wide drop-shadow-lg whitespace-nowrap",
                  pathname === "/" ? "opacity-70 cursor-default" : "hover:text-white/80"
                )}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className={cn(
                  "text-sm font-semibold text-white transition-colors uppercase tracking-wide drop-shadow-lg whitespace-nowrap",
                  pathname === "/services" ? "opacity-70 cursor-default" : "hover:text-white/80"
                )}
              >
                Services
              </Link>
              <Link
                href="/realisations"
                className={cn(
                  "text-sm font-semibold text-white transition-colors uppercase tracking-wide drop-shadow-lg whitespace-nowrap",
                  pathname === "/realisations" ? "opacity-70 cursor-default" : "hover:text-white/80"
                )}
              >
                Réalisations
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-semibold text-white transition-colors uppercase tracking-wide drop-shadow-lg whitespace-nowrap",
                  pathname === "/contact" ? "opacity-70 cursor-default" : "hover:text-white/80"
                )}
              >
                Contact
              </Link>
            </nav>
            <nav className="flex flex-wrap gap-6 text-xs justify-center md:justify-start">
              <Link
                href="/mentions-legales"
                className={cn(
                  "text-white/80 transition-colors drop-shadow-md",
                  pathname === "/mentions-legales" ? "opacity-70 cursor-default" : "hover:text-white"
                )}
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className={cn(
                  "text-white/80 transition-colors drop-shadow-md",
                  pathname === "/politique-confidentialite" ? "opacity-70 cursor-default" : "hover:text-white"
                )}
              >
                Politique de confidentialité
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white font-medium">
            <p className="drop-shadow-md text-center md:text-left">Adresse : 50 rue du dôme, 92100 Boulogne-Billancourt</p>
            <p className="drop-shadow-md">© {new Date().getFullYear()} LEB Dépannage. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
