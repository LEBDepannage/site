import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Left side - Logo and description */}
          <div className="space-y-4 max-w-sm">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">LEB Dépannage</h3>
            <p className="text-sm text-white font-medium leading-relaxed drop-shadow-lg">
              Plomberie et rénovation à Boulogne-Billancourt et dans toute l'Île-de-France.
            </p>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex flex-wrap gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-white hover:text-white/80 transition-colors uppercase tracking-wide drop-shadow-lg"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-white hover:text-white/80 transition-colors uppercase tracking-wide drop-shadow-lg"
            >
              Services
            </Link>
            <Link
              href="/realisations"
              className="text-sm font-semibold text-white hover:text-white/80 transition-colors uppercase tracking-wide drop-shadow-lg"
            >
              Réalisations
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white hover:text-white/80 transition-colors uppercase tracking-wide drop-shadow-lg"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white font-medium">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
              <p className="drop-shadow-md">T.V.A : 88483166000029</p>
              <p className="hidden md:block opacity-50">|</p>
              <p className="drop-shadow-md">Adresse : 50 rue du dôme, 92100 Boulogne-Billancourt</p>
            </div>
            <p className="drop-shadow-md">© {new Date().getFullYear()} LEB Dépannage. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
