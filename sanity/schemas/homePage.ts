import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Page Home',
  type: 'document',
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Page d\'accueil',
        subtitle: subtitle ? subtitle.substring(0, 100) + '...' : 'Configuration de la page d\'accueil',
      }
    },
  },
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Section Hero',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge disponibilité',
          type: 'string',
          initialValue: 'Disponible 24h/24 et 7j/7',
        },
        {
          name: 'title',
          title: 'Titre principal',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'text',
        },
        {
          name: 'ctaPrimary',
          title: 'CTA Principal (téléphone)',
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Texte' },
            { name: 'phone', type: 'string', title: 'Numéro de téléphone' },
          ],
        },
        {
          name: 'ctaSecondary',
          title: 'CTA Secondaire',
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Texte' },
            { name: 'link', type: 'string', title: 'Lien' },
          ],
        },
        {
          name: 'badges',
          title: 'Badges de confiance',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', type: 'string', title: 'Texte' },
                { name: 'icon', type: 'string', title: 'Icône (lucide-react name)' },
              ],
            },
          ],
        },
        {
          name: 'image',
          title: 'Image artisan',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
            },
          ],
        },
      ],
    }),

    // Services Preview Section
    defineField({
      name: 'servicesPreview',
      title: 'Aperçu Services',
      type: 'object',
      fields: [
        {
          name: 'sectionLabel',
          title: 'Label section',
          type: 'string',
          initialValue: 'NOS PRESTATIONS',
        },
        {
          name: 'title',
          title: 'Titre',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'services',
          title: 'Services affichés',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Nom du service' },
                { name: 'anchor', type: 'string', title: 'Ancre (lien vers page services)' },
              ],
            },
          ],
        },
        {
          name: 'ctaText',
          title: 'Texte du bouton CTA',
          type: 'string',
        },
      ],
    }),

    // Realisations Preview Section
    defineField({
      name: 'realisationsPreview',
      title: 'Aperçu Réalisations',
      type: 'object',
      fields: [
        {
          name: 'sectionLabel',
          title: 'Label section',
          type: 'string',
          initialValue: 'PORTFOLIO',
        },
        {
          name: 'title',
          title: 'Titre',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'realisations',
          title: 'Réalisations affichées',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Titre' },
                { name: 'category', type: 'string', title: 'Catégorie' },
                { name: 'location', type: 'string', title: 'Localisation' },
                { name: 'image', type: 'image', title: 'Image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Texte alternatif' }] },
              ],
            },
          ],
          validation: (Rule) => Rule.max(3),
        },
        {
          name: 'ctaText',
          title: 'Texte du bouton CTA',
          type: 'string',
        },
      ],
    }),

    // Recent Project Video Section
    defineField({
      name: 'recentVideo',
      title: 'Vidéo Chantier Récent',
      type: 'object',
      fields: [
        {
          name: 'sectionLabel',
          title: 'Label section',
          type: 'string',
          initialValue: 'CHANTIER RÉCENT',
        },
        {
          name: 'title',
          title: 'Titre',
          type: 'string',
          initialValue: 'Notre dernier chantier en vidéo',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'video',
          title: 'Vidéo du chantier',
          type: 'file',
          options: {
            accept: 'video/*',
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Description de la vidéo',
            },
          ],
        },
        {
          name: 'thumbnail',
          title: 'Image miniature (optionnel)',
          type: 'image',
          description: 'Image affichée avant le chargement de la vidéo',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
            },
          ],
        },
        {
          name: 'projectDetails',
          title: 'Détails du projet',
          type: 'object',
          fields: [
            { name: 'category', type: 'string', title: 'Catégorie' },
            { name: 'location', type: 'string', title: 'Localisation' },
            { name: 'duration', type: 'string', title: 'Durée du chantier' },
          ],
        },
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonials',
      title: 'Témoignages',
      type: 'object',
      fields: [
        {
          name: 'sectionLabel',
          title: 'Label section',
          type: 'string',
          initialValue: 'TÉMOIGNAGES',
        },
        {
          name: 'title',
          title: 'Titre',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'stats',
          title: 'Statistiques',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'value', type: 'string', title: 'Valeur (ex: 98%)' },
                { name: 'label', type: 'string', title: 'Label' },
                { name: 'icon', type: 'string', title: 'Icône (lucide-react name)' },
              ],
            },
          ],
          validation: (Rule) => Rule.length(3),
        },
        {
          name: 'platforms',
          title: 'Plateformes d\'avis',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Nom de la plateforme' },
                { name: 'rating', type: 'number', title: 'Note', validation: (Rule) => Rule.min(0).max(5) },
                { name: 'reviewCount', type: 'number', title: 'Nombre d\'avis' },
                { name: 'link', type: 'url', title: 'Lien vers la page d\'avis' },
                { name: 'logo', type: 'image', title: 'Logo de la plateforme', fields: [{ name: 'alt', type: 'string', title: 'Texte alternatif' }] },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
