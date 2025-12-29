"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = ["Tous", "Menuiserie", "Carrelage", "Plâtrerie", "Extérieur"]

const realisations = [
  {
    title: "Installation Meuble TV avec LED",
    category: "Menuiserie",
    location: "Île-de-France",
    image: "/images/télé1.jpg",
  },
  {
    title: "Meuble TV Design avec Rétro-éclairage",
    category: "Menuiserie",
    location: "Île-de-France",
    image: "/images/télé2.jpg",
  },
  {
    title: "Terrasse Extérieure en Dalles",
    category: "Extérieur",
    location: "Île-de-France",
    image: "/images/carrelage.jpg",
  },
  {
    title: "Douche Italienne Carrelage Imitation Bois",
    category: "Carrelage",
    location: "Île-de-France",
    image: "/images/sdb.jpg",
  },
  {
    title: "Faux Plafond avec Éclairage LED",
    category: "Plâtrerie",
    location: "Île-de-France",
    image: "/images/salon.jpg",
  },
  {
    title: "Installation de Fenêtres sur Mesure",
    category: "Menuiserie",
    location: "Île-de-France",
    image: "/images/video.mp4",
    isVideo: true,
  },
]

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredRealisations =
    selectedCategory === "Tous" ? realisations : realisations.filter((r) => r.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTE4IDBjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wIDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMTggMGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

          <div className="container relative mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Nos Réalisations</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Découvrez en images la qualité de notre travail sur des chantiers de plomberie et de rénovation en Île-de-France.
            </p>
          </div>
        </section>

        {/* Category filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 min-h-[44px] rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredRealisations.map((realisation, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
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
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTE4IDBjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wIDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMTggMGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

          <div className="container relative mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Vous avez un projet similaire ?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full px-8 h-12 bg-transparent backdrop-blur-sm transition-all"
                asChild
              >
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
