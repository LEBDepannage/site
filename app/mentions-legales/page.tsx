import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getHeaderData, getFooterData } from "@/lib/sanity-helpers"
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { client } from "@/sanity/client"
import type { LegalPageData } from "@/types/sanity"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

// Composants personnalisés pour le rendu Portable Text
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({children}) => <h2 className="text-2xl font-bold text-foreground mb-6 mt-10 first:mt-0">{children}</h2>,
    h3: ({children}) => <h3 className="text-xl font-bold text-foreground mb-4 mt-8">{children}</h3>,
    normal: ({children}) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
  },
  marks: {
    strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    link: ({value, children}) => {
      const href = value?.href || ''
      return <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
    },
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6 text-muted-foreground my-4 space-y-2">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 text-muted-foreground my-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li className="text-muted-foreground">{children}</li>,
    number: ({children}) => <li className="text-muted-foreground">{children}</li>,
  },
}

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
  const [data, headerData, footerData] = await Promise.all([
    getMentionsLegalesData(),
    getHeaderData(),
    getFooterData(),
  ])

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
      <Header data={headerData || undefined} />
      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">{data.title}</h1>

          <div className="max-w-none">
            <PortableText value={data.content} components={portableTextComponents} />
          </div>
        </div>
      </main>
      <Footer data={footerData || undefined} />
    </div>
  )
}
