import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Wrench, PaintBucket, Lightbulb, Grid3X3, Hammer, Home } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plomberie & Rénovation à Boulogne-Billancourt",
  description:
    "Services de plomberie, menuiserie, carrelage, électricité, peinture et rénovation à Boulogne-Billancourt. Artisan qualifié avec 10 ans d'expérience. Devis gratuit 24h/24.",
  openGraph: {
    title: "Plomberie & Rénovation à Boulogne-Billancourt | LEB Dépannage",
    description: "Services de plomberie, menuiserie, carrelage, électricité, peinture et rénovation à Boulogne-Billancourt. Devis gratuit.",
    url: "/services",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEB Dépannage - Services de plomberie et rénovation",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
}

const services = [
  {
    id: "plomberie",
    icon: Wrench,
    title: "Plomberie",
    description:
      "Installation, réparation, réglage et entretien des équipements sanitaires (toilettes, salles de bains, etc.) ainsi que des canalisations de distribution de gaz, d'eau et d'évacuation (acier, cuivre, PVC, etc.). Coupe, soudure et pose des tuyaux.",
    details: [
      "Installation sanitaires complètes",
      "Réparation de fuites",
      "Connexion robinetterie et appareils",
      "Contrôle étanchéité et conformité",
      "Raccordements électriques",
      "Pose revêtements et mobilier",
    ],
  },
  {
    id: "menuiserie",
    icon: Hammer,
    title: "Menuiserie",
    description:
      "Fabrication sur mesure de cuisines, buanderies, armoires, rangements et vérandas. Travail de qualité personnalisé.",
    details: [
      "Cuisines sur mesure",
      "Placards et rangements",
      "Portes intérieures",
      "Vérandas",
      "Parquet",
      "Aménagements",
    ],
  },
  {
    id: "carrelage",
    icon: Grid3X3,
    title: "Carrelage",
    description:
      "Revêtement des sols, escaliers et murs de carreaux en céramique, terre cuite, ciment, porcelaine, pierre, faïence, grès, marbre, granit, pâte de verre, granite, ardoise, lave émaillée, plastique, etc. Coulage des chapes pour éviter les infiltrations d'eau et pose des sous-couches isolantes phoniques et thermiques.",
    details: [
      "Tous types de carrelage",
      "Faïence et mosaïque",
      "Pierre naturelle et marbre",
      "Coulage de chapes",
      "Isolation phonique et thermique",
      "Finitions impeccables",
    ],
  },
  {
    id: "electricite",
    icon: Lightbulb,
    title: "Électricité",
    description:
      "Installation et maintenance des systèmes électriques dans tous types de bâtiments. Mise en place des chemins de câbles, réalisation du câblage des installations et veille au bon fonctionnement des équipements. Respect strict des normes en vigueur et des règles de sécurité.",
    details: [
      "Installation électrique complète",
      "Chemins de câbles",
      "Câblage et raccordements",
      "Mise aux normes",
      "Tableaux électriques",
      "Dépannage urgent",
    ],
  },
  {
    id: "peinture",
    icon: PaintBucket,
    title: "Peinture",
    description:
      "Finitions des murs, plafonds et sols d'un bâtiment, en intérieur ou extérieur. Embellissement, protection et assainissement de vos bâtiments. Application de résines, vernis, pose de papier peint, tissu, moquette, linoléum, sol souple, parquet. Réalisation de décors en patine, imitation bois, faux marbre, dorure, décors peints, trompe-l'œil, etc.",
    details: [
      "Peinture intérieure et extérieure",
      "Résines et vernis",
      "Papier peint et tissu",
      "Moquette, linoléum, parquet",
      "Décors patine et trompe-l'œil",
      "Imitation bois et faux marbre",
    ],
  },
  {
    id: "renovation",
    icon: Home,
    title: "Rénovation",
    description:
      "Rénovation complète de votre intérieur. Nous coordonnons tous les corps de métiers pour vos projets de rénovation.",
    details: [
      "Rénovation appartement",
      "Rénovation maison",
      "Salle de bain complète",
      "Cuisine complète",
      "Aménagement",
      "Nettoyage fin de chantier",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTE4IDBjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wIDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMTggMGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

          <div className="container relative mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Nos Services</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Une expertise multi-métiers pour tous vos travaux de rénovation et dépannage en Île-de-France. Devis gratuit sur mesure et intervention rapide.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  id={service.id}
                  className="group hover:shadow-lg transition-shadow duration-300 bg-card border-border scroll-mt-24"
                >
                  <CardHeader>
                    <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Besoin d'un devis gratuit ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contactez-nous pour obtenir un devis personnalisé et gratuit pour votre projet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 bg-transparent"
                asChild
              >
                <a href="tel:0605506363">Appeler maintenant</a>
              </Button>
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-full px-8"
                asChild
              >
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
