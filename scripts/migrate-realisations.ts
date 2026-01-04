import { writeClient } from '../sanity/client'

// Fonction helper pour générer des _key uniques
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${index}_${Date.now()}`
}

async function migrateRealisationsPage() {
  console.log('🚀 Migration de la page Réalisations vers Sanity...\n')

  const realisationsPageData = {
    _id: 'realisationsPage',
    _type: 'realisationsPage',

    // Hero
    hero: {
      title: 'Nos Réalisations',
      description:
        'Découvrez en images la qualité de notre travail sur des chantiers de plomberie et de rénovation en Île-de-France.',
    },

    // Catégories
    categories: ['Menuiserie', 'Carrelage', 'Plâtrerie', 'Extérieur'],

    // Réalisations
    realisations: [
      {
        _key: generateKey('realisation', 0),
        title: 'Installation Meuble TV avec LED',
        category: 'Menuiserie',
        location: 'Île-de-France',
        mediaType: 'image',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-679ec4325f2862879888f9e6ea832cdf273161a7-1290x1794-jpg',
          },
          alt: 'Installation Meuble TV avec LED',
        },
      },
      {
        _key: generateKey('realisation', 1),
        title: 'Meuble TV Design avec Rétro-éclairage',
        category: 'Menuiserie',
        location: 'Île-de-France',
        mediaType: 'image',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-b8c29b3ceeb97980d6a50c6be430d608943cc04a-1290x1589-jpg',
          },
          alt: 'Meuble TV Design avec Rétro-éclairage',
        },
      },
      {
        _key: generateKey('realisation', 2),
        title: 'Terrasse Extérieure en Dalles',
        category: 'Extérieur',
        location: 'Île-de-France',
        mediaType: 'image',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-ec29c8d54c180a886c5797177b61027cd2128a13-4000x3000-jpg',
          },
          alt: 'Terrasse Extérieure en Dalles',
        },
      },
      {
        _key: generateKey('realisation', 3),
        title: 'Douche Italienne Carrelage Imitation Bois',
        category: 'Carrelage',
        location: 'Île-de-France',
        mediaType: 'image',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-91f305b9f1e13eee49982824ea1bbaf3b604a7f9-1500x2000-jpg',
          },
          alt: 'Douche Italienne Carrelage Imitation Bois',
        },
      },
      {
        _key: generateKey('realisation', 4),
        title: 'Faux Plafond avec Éclairage LED',
        category: 'Plâtrerie',
        location: 'Île-de-France',
        mediaType: 'image',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-f41446b2ffd8409489f2201782f6a6eade3ba412-945x2048-jpg',
          },
          alt: 'Faux Plafond avec Éclairage LED',
        },
      },
      {
        _key: generateKey('realisation', 5),
        title: 'Installation de Fenêtres sur Mesure',
        category: 'Menuiserie',
        location: 'Île-de-France',
        mediaType: 'video',
        video: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: 'file-6c1cfbf9d21968e0896622881759676a338fcd7a-mp4',
          },
        },
      },
    ],

    // CTA Section
    cta: {
      title: 'Vous avez un projet similaire ?',
      description: 'Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.',
      buttonText: 'Demander un devis gratuit',
      buttonLink: '/contact',
    },
  }

  try {
    console.log('📝 Création/mise à jour du document realisationsPage...')
    const result = await writeClient.createOrReplace(realisationsPageData)
    console.log('✅ Document realisationsPage créé avec succès!')
    console.log(`   ID: ${result._id}`)
    console.log(`   Type: ${result._type}`)
    console.log(`   Nombre de réalisations: ${realisationsPageData.realisations.length}`)
    console.log(
      `   Nombre de catégories: ${realisationsPageData.categories.length}`
    )
    console.log('\n🎉 Migration terminée avec succès!')
    console.log(
      '\n💡 Vous pouvez maintenant éditer ces données dans Sanity Studio à http://localhost:3333'
    )
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    process.exit(1)
  }
}

migrateRealisationsPage()
