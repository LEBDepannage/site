import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getHeaderData, getFooterData } from "@/lib/sanity-helpers"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { client } from "@/sanity/client"
import type { ContactPageData } from "@/types/sanity"

export const metadata: Metadata = {
  title: "Devis Gratuit Plomberie à Boulogne-Billancourt",
  description:
    "Demandez votre devis gratuit pour plomberie, rénovation et dépannage à Boulogne-Billancourt. Disponible 24h/24 en urgence. Contact : 06 05 50 63 63.",
  openGraph: {
    title: "Devis Gratuit Plomberie à Boulogne-Billancourt | LEB Dépannage",
    description: "Demandez votre devis gratuit pour plomberie et rénovation à Boulogne-Billancourt. Disponible 24h/24.",
    url: "/contact",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEB Dépannage - Devis gratuit plomberie",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
}

async function getContactPageData(): Promise<ContactPageData> {
  return await client.fetch(
    `*[_type == "contactPage"][0]{
      hero,
      contactInfo
    }`,
    {},
    {
      next: { revalidate: 60 }
    }
  )
}

export default async function ContactPage() {
  const [data, headerData, footerData] = await Promise.all([
    getContactPageData(),
    getHeaderData(),
    getFooterData(),
  ])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg max-w-2xl">
          <h1 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Données Sanity manquantes</h1>
          <p className="text-yellow-700 mb-4">
            Les données de la page Contact n'ont pas encore été migrées vers Sanity.
          </p>
          <div className="bg-white p-4 rounded border border-yellow-200 text-left">
            <p className="font-semibold mb-2">Pour créer les données, exécutez:</p>
            <code className="block bg-gray-100 p-2 rounded text-sm">npm run sanity:migrate-contact</code>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen">
      <Header data={headerData || undefined} />
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

        {/* Contact section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            {/* First Row - Nos Coordonnées and Contact Form */}
            <div className="grid gap-10 lg:grid-cols-2 max-w-7xl mx-auto mb-10">
              {/* Contact Info */}
              <Card className="bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] text-white border-0 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold">{data.contactInfo.cardTitle}</CardTitle>
                  <CardDescription className="text-white/80 text-sm">
                    {data.contactInfo.cardDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold mb-2 text-white">Téléphone</p>
                      <a
                        href={`tel:${data.contactInfo.phoneArtisan.replace(/\s/g, '')}`}
                        className="text-white/90 hover:text-white block text-lg font-medium transition-colors"
                      >
                        Artisan : {data.contactInfo.phoneArtisan}
                      </a>
                      <a
                        href={`tel:${data.contactInfo.phoneSecretariat.replace(/\s/g, '')}`}
                        className="text-white/90 hover:text-white block font-medium transition-colors"
                      >
                        Secrétariat : {data.contactInfo.phoneSecretariat}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold mb-2 text-white">Email</p>
                      <a
                        href={`mailto:${data.contactInfo.email}`}
                        className="text-white/90 hover:text-white text-lg font-medium transition-colors"
                      >
                        {data.contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold mb-2 text-white">Adresse</p>
                      <a
                        href={data.contactInfo.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white font-medium transition-colors"
                      >
                        {data.contactInfo.address.street}
                        <br />
                        {data.contactInfo.address.city}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold mb-2 text-white">Disponibilité</p>
                      <p className="text-white/90 font-medium">
                        {data.contactInfo.availability.hours}
                        <br />
                        {data.contactInfo.availability.coverage}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="h-5 w-5 text-white" />
                      <p className="font-bold text-white">Localisation</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <iframe
                        src={data.contactInfo.mapEmbedUrl}
                        width="100%"
                        height="180"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation LEB Dépannage"
                      ></iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Second Row - Suppliers (Full Width) */}
            <Card className="bg-white border-2 border-border shadow-md max-w-7xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Nos Partenaires Fournisseurs</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Nous travaillons avec les meilleurs fournisseurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors h-[100px] w-full md:w-auto md:min-w-[200px]">
                    <Image
                      src="/leroy_merlin.png"
                      alt="Leroy Merlin"
                      width={180}
                      height={60}
                      className="w-auto object-contain max-h-16"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors h-[100px] w-full md:w-auto md:min-w-[200px]">
                    <Image
                      src="/cedeo.png"
                      alt="Cedeo"
                      width={160}
                      height={60}
                      className="w-auto object-contain max-h-16"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors h-[100px] w-full md:w-auto md:min-w-[200px]">
                    <Image
                      src="/plateforme_batiment.png"
                      alt="La Plateforme du Bâtiment"
                      width={300}
                      height={90}
                      className="w-auto object-contain max-h-28"
                      unoptimized
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer data={footerData || undefined} />
    </div>
  )
}
