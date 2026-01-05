import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortableText } from '@portabletext/react'
import { client } from "@/sanity/client"
import type { LegalPageData } from "@/types/sanity"

async function getMentionsLegalesData(): Promise<LegalPageData> {
  return await client.fetch(
    `*[_type == "legalPage" && slug.current == "mentions-legales"][0]{
      slug,
      title,
      lastUpdated,
      content
    }`,
    {},
    {
      next: { revalidate: 60 }
    }
  )
}

export default async function MentionsLegalesPage() {
  const data = await getMentionsLegalesData()

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg max-w-2xl">
          <h1 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Données Sanity manquantes</h1>
          <p className="text-yellow-700 mb-4">
            Les données des Mentions Légales n'ont pas encore été migrées vers Sanity.
          </p>
          <div className="bg-white p-4 rounded border border-yellow-200 text-left">
            <p className="font-semibold mb-2">Pour créer les données, exécutez:</p>
            <code className="block bg-gray-100 p-2 rounded text-sm">npm run sanity:migrate-legal</code>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">{data.title}</h1>

          <div className="prose prose-slate max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:text-foreground prose-h2:mb-6 prose-h2:mt-10 prose-h2:first:mt-0 prose-p:text-muted-foreground prose-p:mb-4 prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary prose-a:hover:underline prose-ul:list-disc prose-ul:pl-6 prose-ul:text-muted-foreground prose-ul:my-4 prose-li:text-muted-foreground prose-li:my-1">
            <PortableText value={data.content} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
