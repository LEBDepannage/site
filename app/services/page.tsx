import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Wrench, PaintBucket, Lightbulb, Grid3X3, Hammer, Home } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { client } from "@/sanity/client"
import type { ServicesPageData } from "@/types/sanity"

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

async function getServicesPageData(): Promise<ServicesPageData> {
  return await client.fetch(
    `*[_type == "servicesPage"][0]{
      hero,
      services,
      cta
    }`,
    {},
    {
      next: { revalidate: 60 }
    }
  )
}

export default async function ServicesPage() {
  const data = await getServicesPageData()

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg max-w-2xl">
          <h1 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Données Sanity manquantes</h1>
          <p className="text-yellow-700 mb-4">
            Les données de la page Services n'ont pas encore été migrées vers Sanity.
          </p>
          <div className="bg-white p-4 rounded border border-yellow-200 text-left">
            <p className="font-semibold mb-2">Pour créer les données, exécutez:</p>
            <code className="block bg-gray-100 p-2 rounded text-sm">npm run sanity:migrate-services</code>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTE4IDBjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wIDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMTggMGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

          <div className="container relative mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{data.hero.title}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.services.map((service) => {
                const IconComponent = (LucideIcons as any)[service.icon] || Wrench
                return (
                  <Card
                    key={service._key}
                    id={service.id.current}
                    className="group hover:shadow-lg transition-shadow duration-300 bg-card border-border scroll-mt-24"
                  >
                    <CardHeader>
                      <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <IconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{data.cta.title}</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              {data.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 bg-transparent"
                asChild
              >
                <a href={`tel:${data.cta.primaryButton.phone}`}>{data.cta.primaryButton.label}</a>
              </Button>
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-full px-8"
                asChild
              >
                <Link href={data.cta.secondaryButton.link}>{data.cta.secondaryButton.label}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
