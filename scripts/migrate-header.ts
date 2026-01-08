import { writeClient } from '../sanity/client'

async function migrateHeader() {
  console.log('🚀 Migration du Header vers Sanity...\n')

  const headerData = {
    _id: 'header',
    _type: 'header',
    navLinks: [
      {
        _key: 'nav-1',
        label: 'ACCUEIL',
        href: '/',
      },
      {
        _key: 'nav-2',
        label: 'SERVICES',
        href: '/services',
      },
      {
        _key: 'nav-3',
        label: 'RÉALISATIONS',
        href: '/realisations',
      },
      {
        _key: 'nav-4',
        label: 'CONTACT',
        href: '/contact',
      },
    ],
    contactPhone: '06 05 50 63 63',
    contactButtonLabel: 'Contactez-Nous',
  }

  try {
    console.log('📝 Création/mise à jour du document header...')
    const result = await writeClient.createOrReplace(headerData)
    console.log('✅ Document header créé avec succès!')
    console.log(`   ID: ${result._id}`)
    console.log(`   Type: ${result._type}`)
    console.log('\n🎉 Migration terminée avec succès!')
    console.log(
      '\n💡 Vous pouvez maintenant éditer ces données dans Sanity Studio à http://localhost:3333'
    )
    console.log('\nℹ️  Note: Le logo reste en dur dans le code pour le moment')
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    process.exit(1)
  }
}

migrateHeader()
