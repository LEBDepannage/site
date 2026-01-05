import { defineType, defineField } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Page Contact',
  type: 'document',
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.description',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Page Contact',
        subtitle: subtitle ? subtitle.substring(0, 100) + '...' : 'Configuration de la page contact',
      }
    },
  },
  fields: [
    // Section Hero
    defineField({
      name: 'hero',
      title: 'Section Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Coordonnées complètes
    defineField({
      name: 'contactInfo',
      title: 'Informations de contact',
      type: 'object',
      fields: [
        defineField({
          name: 'cardTitle',
          title: 'Titre de la carte',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'cardDescription',
          title: 'Description de la carte',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'phoneArtisan',
          title: 'Téléphone Artisan',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'phoneSecretariat',
          title: 'Téléphone Secrétariat',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: 'address',
          title: 'Adresse',
          type: 'object',
          fields: [
            defineField({
              name: 'street',
              title: 'Rue',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'city',
              title: 'Ville',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'googleMapsUrl',
              title: 'URL Google Maps',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'availability',
          title: 'Disponibilité',
          type: 'object',
          fields: [
            defineField({
              name: 'hours',
              title: 'Horaires',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'coverage',
              title: 'Zone de couverture',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'mapEmbedUrl',
          title: 'URL iframe Google Maps',
          type: 'url',
          description: 'URL d\'embed de la carte Google Maps',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
