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

    // Informations de contact complètes
    contactInfo: {
      cardTitle: 'Nos Coordonnées',
      cardDescription: 'Disponible 24h/24 pour vos urgences en Île-de-France',
      phoneArtisan: '06 05 50 63 63',
      phoneSecretariat: '07 83 92 14 05',
      email: 'contact@lebdepannage.fr',
      address: {
        street: '50 rue du Dôme',
        city: '92100 Boulogne-Billancourt',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=50+rue+du+D%C3%B4me%2C+92100+Boulogne-Billancourt',
      },
      availability: {
        hours: '24h/24 - 7j/7',
        coverage: 'Urgences en Île-de-France',
      },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8477777777777!2d2.2408333!3d48.8355555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUwJzA4LjAiTiAywrAxNCcyNy4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890',
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
    console.log('\nℹ️  Note: Le formulaire et les partenaires restent en dur dans le code')
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    process.exit(1)
  }
}

migrateContactPage()
