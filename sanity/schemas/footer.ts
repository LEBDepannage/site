import { defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Nom de l\'entreprise',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mainNavLinks',
      title: 'Liens de navigation principaux',
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
      name: 'legalLinks',
      title: 'Liens légaux',
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
      name: 'address',
      title: 'Adresse',
      type: 'string',
    },
    {
      name: 'copyrightText',
      title: 'Texte copyright',
      type: 'string',
      description: 'Laissez vide pour afficher automatiquement "© {année} {nom entreprise}. Tous droits réservés."',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})
