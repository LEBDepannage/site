import { defineType, defineField } from 'sanity'

export const realisationsPage = defineType({
  name: 'realisationsPage',
  title: 'Page Réalisations',
  type: 'document',
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.description',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Page Réalisations',
        subtitle: subtitle ? subtitle.substring(0, 100) + '...' : 'Configuration de la page réalisations',
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

    // Réalisations
    defineField({
      name: 'realisations',
      title: 'Réalisations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'category',
              title: 'Catégorie',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'location',
              title: 'Localisation',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'mediaType',
              title: 'Type de média',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Vidéo', value: 'video' },
                ],
                layout: 'radio',
              },
              initialValue: 'image',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
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
              hidden: ({ parent }) => parent?.mediaType === 'video',
              validation: (Rule) =>
                Rule.custom((image, context) => {
                  const parent = context.parent as any
                  if (parent?.mediaType === 'image' && !image) {
                    return 'Une image est requise quand le type de média est "Image"'
                  }
                  return true
                }),
            }),
            defineField({
              name: 'video',
              title: 'Vidéo',
              type: 'file',
              options: {
                accept: 'video/*',
              },
              hidden: ({ parent }) => parent?.mediaType === 'image',
              validation: (Rule) =>
                Rule.custom((video, context) => {
                  const parent = context.parent as any
                  if (parent?.mediaType === 'video' && !video) {
                    return 'Une vidéo est requise quand le type de média est "Vidéo"'
                  }
                  return true
                }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              category: 'category',
              location: 'location',
              image: 'image',
              mediaType: 'mediaType',
            },
            prepare({ title, category, location, image, mediaType }) {
              return {
                title: title || 'Réalisation',
                subtitle: `${category} • ${location} ${mediaType === 'video' ? '(Vidéo)' : ''}`,
                media: image,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3),
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
          name: 'buttonText',
          title: 'Texte du bouton',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonLink',
          title: 'Lien du bouton',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
