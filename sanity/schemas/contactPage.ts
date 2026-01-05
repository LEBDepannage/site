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

    // Carte Coordonnées
    defineField({
      name: 'contactCard',
      title: 'Carte "Nos Coordonnées"',
      type: 'object',
      description: 'Les textes de la carte (les coordonnées elles-mêmes restent en dur dans le code)',
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
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
