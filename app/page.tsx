import { client } from "@/sanity/client"
import type { HomePageData } from "@/types/sanity"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import { RealisationsPreview } from "@/components/home/realisations-preview"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"
import { getHeaderData, getFooterData } from "@/lib/sanity-helpers"

async function getHomePageData(): Promise<HomePageData> {
  return await client.fetch(
    `*[_type == "homePage"][0]{
      hero{
        ...,
        image{
          ...,
          asset->
        }
      },
      servicesPreview,
      realisationsPreview{
        ...,
        realisations[]{
          ...,
          image{
            ...,
            asset->
          }
        }
      },
      testimonials
    }`,
    {},
    {
      next: { revalidate: 60 } // Revalide toutes les 60 secondes
    }
  )
}

export default async function HomePage() {
  const [data, headerData, footerData] = await Promise.all([
    getHomePageData(),
    getHeaderData(),
    getFooterData(),
  ])

  // Si les données ne sont pas encore migrées vers Sanity
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg max-w-2xl">
          <h1 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Données Sanity manquantes</h1>
          <p className="text-yellow-700 mb-4">
            Les données de la page d'accueil n'ont pas encore été migrées vers Sanity.
          </p>
          <div className="bg-white p-4 rounded border border-yellow-200 text-left">
            <p className="font-semibold mb-2">Pour créer les données, exécutez:</p>
            <code className="block bg-gray-100 p-2 rounded text-sm">npm run sanity:migrate-home</code>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header data={headerData || undefined} />
      <main>
        <Hero data={data.hero} />
        <ServicesPreview data={data.servicesPreview} />
        <RealisationsPreview data={data.realisationsPreview} />
        <TestimonialsPreview data={data.testimonials} />
        <CTASection />
      </main>
      <Footer data={footerData || undefined} />
    </div>
  )
}
