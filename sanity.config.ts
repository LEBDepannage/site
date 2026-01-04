import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './sanity/schemas'
import { Home, Wrench, Image, Settings } from 'lucide-react'

export default defineConfig({
  name: 'default',
  title: 'LEB Dépannage',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu du site')
          .items([
            // Page d'accueil
            S.listItem()
              .title('Page d\'accueil')
              .icon(Home)
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),

            // Page Services
            S.listItem()
              .title('Page Services')
              .icon(Wrench)
              .child(
                S.document()
                  .schemaType('servicesPage')
                  .documentId('servicesPage')
              ),

            // Page Réalisations
            S.listItem()
              .title('Page Réalisations')
              .icon(Image)
              .child(
                S.document()
                  .schemaType('realisationsPage')
                  .documentId('realisationsPage')
              ),

            // Séparateur
            S.divider(),

            // Paramètres du site
            S.listItem()
              .title('Paramètres du site')
              .icon(Settings)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
})
