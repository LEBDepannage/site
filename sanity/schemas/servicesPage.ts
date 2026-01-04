import { defineType, defineField } from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Page Services',
  type: 'document',
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.description',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Page Services',
        subtitle: subtitle ? subtitle.substring(0, 100) + '...' : 'Configuration de la page services',
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

    // Services
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID (pour les ancres)',
              type: 'slug',
              description: 'Utilisé pour créer des liens directs vers le service (ex: #plomberie)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              description: 'Nom de l\'icône Lucide (ex: Wrench, PaintBucket, Lightbulb, Grid3X3, Hammer, Home)',
              validation: (Rule) => Rule.required(),
            }),
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
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'details',
              title: 'Détails (liste à puces)',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.required().min(4).max(8),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Service',
                subtitle: subtitle ? subtitle.substring(0, 60) + '...' : '',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(4).max(10),
    }),

    // Section CTA
    defineField({
      name: 'cta',
      title: 'Section CTA (Appel à l\'action)',
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
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'primaryButton',
          title: 'Bouton Principal',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Texte',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'phone',
              title: 'Numéro de téléphone',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Bouton Secondaire',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Texte',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Lien',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
