import { config } from 'dotenv'
import { writeClient } from '../sanity/client'

config({ path: '.env.local' })

function generateKey(prefix: string, index: number): string {
  return `${prefix}-${index}-${Date.now()}`
}

async function migrateHomePage() {
  console.log('🚀 Migration de la page Home...\n')

  try {
    const document = {
      _id: 'homePage',
      _type: 'homePage',

      hero: {
        badge: 'Disponible 24h/24 et 7j/7',
        title: 'Plomberie & Rénovation',
        subtitle: 'Une expertise de 10 ans dans le bâtiment. Compétent, efficace et dynamique pour tous vos travaux de plomberie, peinture et rénovation en Île-de-France.',
        ctaPrimary: {
          label: '06 05 50 63 63',
          phone: '0605506363',
        },
        ctaSecondary: {
          label: 'Demander un devis',
          link: '/contact',
        },
        badges: [
          {
            _key: generateKey('badge', 0),
            text: 'Garantie Décennale',
            icon: 'CheckCircle',
          },
          {
            _key: generateKey('badge', 1),
            text: 'Vérifié par Travaux.com',
            icon: 'CheckCircle',
          },
          {
            _key: generateKey('badge', 2),
            text: 'Intervention Île-de-France',
            icon: 'MapPin',
          },
        ],
        // L'image sera ajoutée après l'upload
        // Décommenter et ajouter la référence après avoir exécuté npm run sanity:upload-images
        // image: {
        //   _type: 'image',
        //   asset: {
        //     _type: 'reference',
        //     _ref: 'image-xxxxx', // Remplacer par la référence obtenue
        //   },
        //   alt: 'Artisan LEB Dépannage',
        // },
      },

      servicesPreview: {
        sectionLabel: 'NOS PRESTATIONS',
        title: 'Tout problème a sa solution',
        description: [
          {
            _type: 'block',
            _key: generateKey('block', 0),
            children: [
              {
                _type: 'span',
                _key: generateKey('span', 0),
                text: 'Spécialisé dans la rénovation et le dépannage urgent, nous intervenons pour tous vos besoins :',
                marks: [],
              },
            ],
            markDefs: [],
            style: 'normal',
          },
          {
            _type: 'block',
            _key: generateKey('block', 1),
            children: [
              {
                _type: 'span',
                _key: generateKey('span', 1),
                text: 'Plomberie générale, électricité, peinture et menuiserie.',
                marks: ['strong'],
              },
            ],
            markDefs: [],
            style: 'normal',
          },
          {
            _type: 'block',
            _key: generateKey('block', 2),
            children: [
              {
                _type: 'span',
                _key: generateKey('span', 2),
                text: 'Que ce soit pour une urgence ou la rénovation complète de votre salle de bain ou cuisine, nous vous accompagnons avec rapidité et efficacité.',
                marks: [],
              },
            ],
            markDefs: [],
            style: 'normal',
          },
        ],
        services: [
          {
            _key: generateKey('service', 0),
            name: 'Plomberie',
            anchor: 'plomberie',
          },
          {
            _key: generateKey('service', 1),
            name: 'Rénovation',
            anchor: 'renovation',
          },
          {
            _key: generateKey('service', 2),
            name: 'Peinture',
            anchor: 'peinture',
          },
          {
            _key: generateKey('service', 3),
            name: 'Électricité',
            anchor: 'electricite',
          },
          {
            _key: generateKey('service', 4),
            name: 'Menuiserie',
            anchor: 'menuiserie',
          },
        ],
        ctaText: 'Voir toutes nos prestations',
      },

      realisationsPreview: {
        sectionLabel: 'PORTFOLIO',
        title: 'Nos dernières réalisations',
        description: 'Découvrez en images la qualité de notre travail sur des chantiers de plomberie et de rénovation.',
        realisations: [
          {
            _key: generateKey('real', 0),
            title: 'Installation Meuble TV avec LED',
            category: 'MENUISERIE',
            location: 'Île-de-France',
            // Image à ajouter après upload
            // image: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-xxxxx', // télé1.jpg
            //   },
            //   alt: 'Installation Meuble TV avec LED',
            // },
          },
          {
            _key: generateKey('real', 1),
            title: 'Faux Plafond avec Éclairage LED',
            category: 'PLÂTRERIE',
            location: 'Île-de-France',
            // Image à ajouter après upload
            // image: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-xxxxx', // salon.jpg
            //   },
            //   alt: 'Faux Plafond avec Éclairage LED',
            // },
          },
          {
            _key: generateKey('real', 2),
            title: 'Terrasse Extérieure en Dalles',
            category: 'EXTÉRIEUR',
            location: 'Île-de-France',
            // Image à ajouter après upload
            // image: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-xxxxx', // carrelage.jpg
            //   },
            //   alt: 'Terrasse Extérieure en Dalles',
            // },
          },
        ],
        ctaText: 'Voir toutes nos réalisations',
      },

      testimonials: {
        sectionLabel: 'TÉMOIGNAGES',
        title: 'Avis Clients Certifiés',
        description: 'La satisfaction de nos clients est notre priorité. Retrouvez tous nos avis vérifiés sur les plateformes de référence.',
        stats: [
          {
            _key: generateKey('stat', 0),
            value: '98%',
            label: 'Clients Satisfaits',
            icon: 'ThumbsUp',
          },
          {
            _key: generateKey('stat', 1),
            value: '500+',
            label: 'Interventions Réussies',
            icon: 'Users',
          },
          {
            _key: generateKey('stat', 2),
            value: '10 ans',
            label: "D'Expérience",
            icon: 'Award',
          },
        ],
        platforms: [
          {
            _key: generateKey('platform', 0),
            name: 'Google',
            rating: 4.7,
            reviewCount: 15,
            link: 'https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzLD6nnZDFoNv36yXgKFOZRypdCD4I36zyv9G7whtOf5dRagL_QtHCW-r2sA2KFRZhzbNGmxQVTcxSxJwilBRdCcueOwlO09kMtKnsO21lIt-jvlXF8Bds9WSEgEmSS2zQuWvmSg&q=plomberie%20LEB%20depannage%20Avis',
            // Logo à ajouter après upload
            // logo: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-xxxxx', // google-logo.png
            //   },
            //   alt: 'Google Logo',
            // },
          },
          {
            _key: generateKey('platform', 1),
            name: 'Travaux.com',
            rating: 4.8,
            reviewCount: 31,
            link: 'https://www.travaux.com/professionnel/leb-depannage',
            // Pas de logo pour Travaux.com (utilise un badge vert avec "T")
          },
        ],
      },
    }

    await writeClient.createOrReplace(document)

    console.log('✅ Page Home migrée avec succès!')

    // Vérification
    const result = await writeClient.fetch('*[_type == "homePage"][0]')
    console.log('\n📋 Document créé:')
    console.log('- Hero: ✓')
    console.log('- Services Preview: ✓')
    console.log('- Réalisations Preview: ✓')
    console.log('- Testimonials: ✓')
    console.log('\n⚠️  Note: Les images doivent être ajoutées manuellement après avoir exécuté npm run sanity:upload-images')
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    throw error
  }
}

migrateHomePage()
  .then(() => {
    console.log('\n✨ Migration terminée!')
    process.exit(0)
  })
  .catch(() => {
    console.error('\n💥 Échec de la migration')
    process.exit(1)
  })
