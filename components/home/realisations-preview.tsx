import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

const realisations = [
  {
    title: "Installation Meuble TV avec LED",
    category: "MENUISERIE",
    location: "Île-de-France",
    image: "/images/télé1.jpg",
  },
  {
    title: "Faux Plafond avec Éclairage LED",
    category: "PLÂTRERIE",
    location: "Île-de-France",
    image: "/images/salon.jpg",
  },
  {
    title: "Terrasse Extérieure en Dalles",
    category: "EXTÉRIEUR",
    location: "Île-de-France",
    image: "/images/carrelage.jpg",
  },
  {
    title: "Douche Italienne Carrelage Imitation Bois",
    category: "CARRELAGE",
    location: "Île-de-France",
    image: "/images/sdb.jpg",
  },
  {
    title: "Meuble TV Design avec Rétro-éclairage",
    category: "MENUISERIE",
    location: "Île-de-France",
    image: "/images/télé2.jpg",
  },
  {
    title: "Installation de Fenêtres sur Mesure",
    category: "MENUISERIE",
    location: "Île-de-France",
    image: "/images/video.mp4",
    isVideo: true,
  },
]

export function RealisationsPreview() {
  // Afficher les 3 premières réalisations sur la page d'accueil
  const featuredRealisations = realisations.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Nos dernières réalisations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez en images la qualité de notre travail sur des chantiers de plomberie et de rénovation.
          </p>
        </div>

        {/* Gallery preview - 3 items */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredRealisations.map((realisation, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {realisation.isVideo ? (
                  <video
                    src={realisation.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={realisation.image || "/placeholder.svg"}
                    alt={realisation.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <span className="absolute top-4 left-4 text-xs font-bold bg-primary text-white px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                  {realisation.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  {realisation.location}
                </div>
                <h3 className="text-xl font-bold text-foreground">{realisation.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Link href="/realisations">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
