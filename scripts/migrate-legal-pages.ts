import { writeClient } from '../sanity/client'

// Helper to create a block
function createBlock(style: string, textContent: string | Array<{text: string, marks?: string[]}>, listItem?: 'bullet') {
  const children = typeof textContent === 'string'
    ? [{ _key: Math.random().toString(36).substr(2, 9), text: textContent, marks: [] }]
    : textContent.map((item, idx) => ({
        _key: `span-${idx}-${Math.random().toString(36).substr(2, 9)}`,
        text: item.text,
        marks: item.marks || []
      }))

  const block: any = {
    _key: `block-${Math.random().toString(36).substr(2, 9)}`,
    _type: 'block',
    style,
    children,
  }

  if (listItem) {
    block.listItem = listItem
    block.level = 1
  }

  return block
}

async function migrateLegalPages() {
  console.log('🚀 Migration des pages légales vers Sanity...\n')

  // Mentions Légales
  const mentionsLegalesData = {
    _id: 'mentions-legales',
    _type: 'legalPage',
    slug: { current: 'mentions-legales' },
    title: 'Mentions Légales',
    content: [
      createBlock('h2', '1. Informations sur l\'entreprise'),
      createBlock('normal', [
        { text: 'Raison sociale : ', marks: ['strong'] },
        { text: 'LEB Dépannage' }
      ]),
      createBlock('normal', [
        { text: 'Forme juridique : ', marks: ['strong'] },
        { text: 'Auto-entrepreneur' }
      ]),
      createBlock('normal', [
        { text: 'SIRET : ', marks: ['strong'] },
        { text: '88483166000029' }
      ]),
      createBlock('normal', [
        { text: 'RCS : ', marks: ['strong'] },
        { text: 'Nanterre' }
      ]),
      createBlock('normal', [
        { text: 'Adresse : ', marks: ['strong'] },
        { text: '50 rue du Dôme, 92100 Boulogne-Billancourt' }
      ]),
      createBlock('normal', [
        { text: 'Téléphone : ', marks: ['strong'] },
        { text: '06 05 50 63 63' }
      ]),
      createBlock('normal', [
        { text: 'Email : ', marks: ['strong'] },
        { text: 'contact@lebdepannage.fr' }
      ]),

      createBlock('h2', '2. Directeur de la publication'),
      createBlock('normal', 'Elisabeth Bouras'),

      createBlock('h2', '3. Hébergement du site'),
      createBlock('normal', [
        { text: 'Hébergeur : ', marks: ['strong'] },
        { text: 'Vercel Inc.' }
      ]),
      createBlock('normal', [
        { text: 'Adresse : ', marks: ['strong'] },
        { text: '340 S Lemon Ave #4133, Walnut, CA 91789, USA' }
      ]),
      createBlock('normal', [
        { text: 'Site web : ', marks: ['strong'] },
        { text: 'vercel.com' }
      ]),

      createBlock('h2', '4. Propriété intellectuelle'),
      createBlock('normal', 'L\'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de LEB Dépannage, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.'),

      createBlock('h2', '5. Assurance professionnelle'),
      createBlock('normal', [
        { text: 'Compagnie d\'assurance : ', marks: ['strong'] },
        { text: 'Tetris Assurance' }
      ]),
      createBlock('normal', [
        { text: 'Garantie décennale : ', marks: ['strong'] },
        { text: 'N° SV75018041T34842' }
      ]),

      createBlock('h2', '6. Médiateur de la consommation'),
      createBlock('normal', 'Conformément à l\'article L. 616-1 du Code de la consommation, en cas de litige, vous avez la possibilité de recourir gratuitement à un service de médiation de la consommation. Pour plus d\'informations, nous contacter.'),

      createBlock('h2', '7. Limitation de responsabilité'),
      createBlock('normal', 'LEB Dépannage s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition sur ce site.'),

      createBlock('h2', '8. Cookies'),
      createBlock('normal', 'Ce site n\'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.'),
    ],
  }

  // Politique de Confidentialité
  const politiqueData = {
    _id: 'politique-confidentialite',
    _type: 'legalPage',
    slug: { current: 'politique-confidentialite' },
    title: 'Politique de Confidentialité',
    lastUpdated: new Date().toISOString().split('T')[0],
    content: [
      createBlock('h2', '1. Introduction'),
      createBlock('normal', 'LEB Dépannage accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD).'),

      createBlock('h2', '2. Responsable du traitement'),
      createBlock('normal', [
        { text: 'Responsable : ', marks: ['strong'] },
        { text: 'LEB Dépannage' }
      ]),
      createBlock('normal', [
        { text: 'Adresse : ', marks: ['strong'] },
        { text: '50 rue du Dôme, 92100 Boulogne-Billancourt' }
      ]),
      createBlock('normal', [
        { text: 'Email : ', marks: ['strong'] },
        { text: 'contact@lebdepannage.fr' }
      ]),
      createBlock('normal', [
        { text: 'Téléphone : ', marks: ['strong'] },
        { text: '06 05 50 63 63' }
      ]),

      createBlock('h2', '3. Données collectées'),
      createBlock('normal', 'Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :'),
      createBlock('normal', 'Nom et prénom', 'bullet'),
      createBlock('normal', 'Adresse email', 'bullet'),
      createBlock('normal', 'Numéro de téléphone', 'bullet'),
      createBlock('normal', 'Message et détails de votre demande', 'bullet'),

      createBlock('h2', '4. Finalité du traitement'),
      createBlock('normal', 'Vos données sont utilisées pour :'),
      createBlock('normal', 'Répondre à vos demandes de devis', 'bullet'),
      createBlock('normal', 'Vous recontacter pour planifier une intervention', 'bullet'),
      createBlock('normal', 'Assurer le suivi de nos prestations', 'bullet'),

      createBlock('h2', '5. Durée de conservation'),
      createBlock('normal', 'Vos données sont conservées pendant 3 ans à compter de notre dernier contact, sauf obligation légale de conservation plus longue.'),

      createBlock('h2', '6. Vos droits'),
      createBlock('normal', 'Vous disposez des droits suivants :'),
      createBlock('normal', 'Droit d\'accès à vos données', 'bullet'),
      createBlock('normal', 'Droit de rectification', 'bullet'),
      createBlock('normal', 'Droit à l\'effacement', 'bullet'),
      createBlock('normal', 'Droit d\'opposition au traitement', 'bullet'),
      createBlock('normal', 'Pour exercer ces droits, contactez-nous à contact@lebdepannage.fr'),

      createBlock('h2', '7. Sécurité'),
      createBlock('normal', 'Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles.'),
    ],
  }

  try {
    console.log('📝 Création des pages légales...')

    await writeClient.createOrReplace(mentionsLegalesData)
    console.log('✅ Mentions Légales créées')

    await writeClient.createOrReplace(politiqueData)
    console.log('✅ Politique de Confidentialité créée')

    console.log('\n🎉 Migration terminée avec succès!')
    console.log('\n💡 Vous pouvez maintenant éditer ces pages dans Sanity Studio')
    console.log('   → Pages Légales → Mentions Légales')
    console.log('   → Pages Légales → Politique de Confidentialité')
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error)
    process.exit(1)
  }
}

migrateLegalPages()
