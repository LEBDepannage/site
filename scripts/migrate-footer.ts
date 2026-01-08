import { writeClient } from '../sanity/client'

async function migrateFooter() {
  console.log('🚀 Migration du Footer vers Sanity...\n')

  const footerData = {
    _id: 'footer',
    _type: 'footer',
    companyName: 'LEB Dépannage',
    description: 'Plomberie et rénovation à Boulogne-Billancourt et dans toute l\'Île-de-France.',
    mainNavLinks: [
      {
        _key: 'main-nav-1',
        label: 'Accueil',
        href: '/',
      },
      {
        _key: 'main-nav-2',
        label: 'Services',
        href: '/services',
      },
      {
        _key: 'main-nav-3',
        label: 'Réalisations',
        href: '/realisations',
      },
      {
        _key: 'main-nav-4',
        label: 'Contact',
        href: '/contact',
      },
    ],
    legalLinks: [
      {
        _key: 'legal-1',
        label: 'Mentions légales',
        href: '/mentions-legales',
      },
      {
        _key: 'legal-2',
        label: 'Politique de confidentialité',
        href: '/politique-confidentialite',
      },
      {
        _key: 'legal-3',
        label: 'CGV',
        href: '/cgv',
      },
    ],
    address: '50 rue du dôme, 92100 Boulogne-Billancourt',
  }

  try {
    console.log('📝 Création/mise à jour du document footer...')
    const result = await writeClient.createOrReplace(footerData)
    console.log('✅ Document footer créé avec succès!')
    console.log(`   ID: ${result._id}`)
    console.log(`   Type: ${result._type}`)
    console.log('\n🎉 Migration terminée avec succès!')
    console.log(
      '\n💡 Vous pouvez maintenant éditer ces données dans Sanity Studio à http://localhost:3333'
    )
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    process.exit(1)
  }
}

migrateFooter()
