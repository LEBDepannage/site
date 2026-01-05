import { writeClient } from '../sanity/client'

async function migrateContactPage() {
  console.log('🚀 Migration de la page Contact vers Sanity...\n')

  const contactPageData = {
    _id: 'contactPage',
    _type: 'contactPage',

    // Hero
    hero: {
      title: 'Contactez-Nous',
      description:
        'Demandez votre devis gratuit sur mesure ou appelez-nous directement pour une intervention rapide.',
    },

    // Carte Coordonnées
    contactCard: {
      title: 'Nos Coordonnées',
      description: 'Disponible 24h/24 pour vos urgences en Île-de-France',
    },
  }

  try {
    console.log('📝 Création/mise à jour du document contactPage...')
    const result = await writeClient.createOrReplace(contactPageData)
    console.log('✅ Document contactPage créé avec succès!')
    console.log(`   ID: ${result._id}`)
    console.log(`   Type: ${result._type}`)
    console.log('\n🎉 Migration terminée avec succès!')
    console.log(
      '\n💡 Vous pouvez maintenant éditer ces données dans Sanity Studio à http://localhost:3333'
    )
    console.log('\nℹ️  Note: Les coordonnées, le formulaire et les partenaires restent en dur dans le code')
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    process.exit(1)
  }
}

migrateContactPage()
