import { defineType } from 'sanity'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo affiché dans le header',
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
      name: 'navLinks',
      title: 'Liens de navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Libellé',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Lien',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    },
    {
      name: 'contactPhone',
      title: 'Téléphone de contact',
      type: 'string',
      description: 'Numéro affiché dans le menu mobile',
    },
    {
      name: 'contactButtonLabel',
      title: 'Libellé bouton contact',
      type: 'string',
      description: 'Texte au-dessus du bouton téléphone dans le menu mobile',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
})
