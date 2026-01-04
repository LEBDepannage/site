import { writeClient } from '../sanity/client'

// Fonction helper pour générer des _key uniques
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${index}_${Date.now()}`
}

async function migrateServicesPage() {
  console.log('🚀 Migration de la page Services vers Sanity...\n')

  const servicesPageData = {
    _id: 'servicesPage',
    _type: 'servicesPage',

    // Hero
    hero: {
      title: 'Nos Services',
      description:
        'Une expertise multi-métiers pour tous vos travaux de rénovation et dépannage en Île-de-France. Devis gratuit sur mesure et intervention rapide.',
    },

    // Services
    services: [
      {
        _key: generateKey('service', 0),
        id: { current: 'plomberie' },
        icon: 'Wrench',
        title: 'Plomberie',
        description:
          "Installation, réparation, réglage et entretien des équipements sanitaires (toilettes, salles de bains, etc.) ainsi que des canalisations de distribution de gaz, d'eau et d'évacuation (acier, cuivre, PVC, etc.). Coupe, soudure et pose des tuyaux.",
        details: [
          'Installation sanitaires complètes',
          'Réparation de fuites',
          'Connexion robinetterie et appareils',
          'Contrôle étanchéité et conformité',
          'Raccordements électriques',
          'Pose revêtements et mobilier',
        ],
      },
      {
        _key: generateKey('service', 1),
        id: { current: 'menuiserie' },
        icon: 'Hammer',
        title: 'Menuiserie',
        description:
          'Fabrication sur mesure de cuisines, buanderies, armoires, rangements et vérandas. Travail de qualité personnalisé.',
        details: [
          'Cuisines sur mesure',
          'Placards et rangements',
          'Portes intérieures',
          'Vérandas',
          'Parquet',
          'Aménagements',
        ],
      },
      {
        _key: generateKey('service', 2),
        id: { current: 'carrelage' },
        icon: 'Grid3X3',
        title: 'Carrelage',
        description:
          "Revêtement des sols, escaliers et murs de carreaux en céramique, terre cuite, ciment, porcelaine, pierre, faïence, grès, marbre, granit, pâte de verre, granite, ardoise, lave émaillée, plastique, etc. Coulage des chapes pour éviter les infiltrations d'eau et pose des sous-couches isolantes phoniques et thermiques.",
        details: [
          'Tous types de carrelage',
          'Faïence et mosaïque',
          'Pierre naturelle et marbre',
          'Coulage de chapes',
          'Isolation phonique et thermique',
          'Finitions impeccables',
        ],
      },
      {
        _key: generateKey('service', 3),
        id: { current: 'electricite' },
        icon: 'Lightbulb',
        title: 'Électricité',
        description:
          "Installation et maintenance des systèmes électriques dans tous types de bâtiments. Mise en place des chemins de câbles, réalisation du câblage des installations et veille au bon fonctionnement des équipements. Respect strict des normes en vigueur et des règles de sécurité.",
        details: [
          'Installation électrique complète',
          'Chemins de câbles',
          'Câblage et raccordements',
          'Mise aux normes',
          'Tableaux électriques',
          'Dépannage urgent',
        ],
      },
      {
        _key: generateKey('service', 4),
        id: { current: 'peinture' },
        icon: 'PaintBucket',
        title: 'Peinture',
        description:
          "Finitions des murs, plafonds et sols d'un bâtiment, en intérieur ou extérieur. Embellissement, protection et assainissement de vos bâtiments. Application de résines, vernis, pose de papier peint, tissu, moquette, linoléum, sol souple, parquet. Réalisation de décors en patine, imitation bois, faux marbre, dorure, décors peints, trompe-l'oeil, etc.",
        details: [
          'Peinture intérieure et extérieure',
          'Résines et vernis',
          'Papier peint et tissu',
          'Moquette, linoléum, parquet',
          'Décors patine et trompe-l\'oeil',
          'Imitation bois et faux marbre',
        ],
      },
      {
        _key: generateKey('service', 5),
        id: { current: 'renovation' },
        icon: 'Home',
        title: 'Rénovation',
        description:
          'Rénovation complète de votre intérieur. Nous coordonnons tous les corps de métiers pour vos projets de rénovation.',
        details: [
          'Rénovation appartement',
          'Rénovation maison',
          'Salle de bain complète',
          'Cuisine complète',
          'Aménagement',
          'Nettoyage fin de chantier',
        ],
      },
    ],

    // CTA Section
    cta: {
      title: "Besoin d'un devis gratuit ?",
      description: 'Contactez-nous pour obtenir un devis personnalisé et gratuit pour votre projet.',
      primaryButton: {
        label: 'Appeler maintenant',
        phone: '0605506363',
      },
      secondaryButton: {
        label: 'Demander un devis',
        link: '/contact',
      },
    },
  }

  try {
    console.log('📝 Création/mise à jour du document servicesPage...')
    const result = await writeClient.createOrReplace(servicesPageData)
    console.log('✅ Document servicesPage créé avec succès!')
    console.log(`   ID: ${result._id}`)
    console.log(`   Type: ${result._type}`)
    console.log(`   Nombre de services: ${servicesPageData.services.length}`)
    console.log('\n🎉 Migration terminée avec succès!')
    console.log(
      '\n💡 Vous pouvez maintenant éditer ces données dans Sanity Studio à http://localhost:3333'
    )
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    process.exit(1)
  }
}

migrateServicesPage()
