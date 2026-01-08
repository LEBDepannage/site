import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './sanity/schemas'
import { Home, Wrench, Image, Mail, FileText, Layout, LayoutGrid } from 'lucide-react'

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

            // Page Contact
            S.listItem()
              .title('Page Contact')
              .icon(Mail)
              .child(
                S.document()
                  .schemaType('contactPage')
                  .documentId('contactPage')
              ),

            // Pages Légales
            S.listItem()
              .title('Pages Légales')
              .icon(FileText)
              .child(
                S.documentList()
                  .title('Pages Légales')
                  .filter('_type == "legalPage"')
              ),

            // Séparateur
            S.divider(),

            // Header
            S.listItem()
              .title('Header')
              .icon(Layout)
              .child(
                S.document()
                  .schemaType('header')
                  .documentId('header')
              ),

            // Footer
            S.listItem()
              .title('Footer')
              .icon(LayoutGrid)
              .child(
                S.document()
                  .schemaType('footer')
                  .documentId('footer')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
})
