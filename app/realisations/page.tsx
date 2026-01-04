import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/client"
import type { RealisationsPageData } from "@/types/sanity"
import { RealisationsContent } from "./realisations-content"

async function getRealisationsPageData(): Promise<RealisationsPageData> {
  return await client.fetch(
    `*[_type == "realisationsPage"][0]{
      hero,
      categories,
      realisations[]{
        ...,
        image{
          ...,
          asset->
        },
        video{
          ...,
          asset->
        }
      },
      cta
    }`,
    {},
    {
      next: { revalidate: 60 }
    }
  )
}

export default async function RealisationsPage() {
  const data = await getRealisationsPageData()

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg max-w-2xl">
          <h1 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Données Sanity manquantes</h1>
          <p className="text-yellow-700 mb-4">
            Les données de la page Réalisations n'ont pas encore été migrées vers Sanity.
          </p>
          <div className="bg-white p-4 rounded border border-yellow-200 text-left">
            <p className="font-semibold mb-2">Pour créer les données, exécutez:</p>
            <code className="block bg-gray-100 p-2 rounded text-sm">npm run sanity:migrate-realisations</code>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <RealisationsContent data={data} />
      <Footer />
    </div>
  )
}
