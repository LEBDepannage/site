import { writeClient } from '../sanity/client'

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}-${index}-${Math.random().toString(36).substr(2, 9)}`
}

async function migrateLegalPages() {
  console.log('🚀 Migration des pages légales vers Sanity...\n')

  // Mentions Légales
  let blockIndex = 0
  const mentionsLegalesData = {
    _id: 'mentions-legales',
    _type: 'legalPage',
    slug: { current: 'mentions-legales' },
    title: 'Mentions Légales',
    content: [
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '1. Informations sur l\'entreprise' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Raison sociale : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: 'LEB Dépannage' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Forme juridique : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: 'Auto-entrepreneur' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'SIRET : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: '88483166000029' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'RCS : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: 'Nanterre' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Adresse : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: '50 rue du Dôme, 92100 Boulogne-Billancourt' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Téléphone : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: '06 05 50 63 63' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Email : ', marks: ['strong'] },
          {
            _key: generateKey('span', 1),
            _type: 'span',
            text: 'contact@lebdepannage.fr',
            marks: [
              {
                _key: generateKey('link', 0),
                _type: 'link',
                href: 'mailto:contact@lebdepannage.fr',
              },
            ],
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '2. Directeur de la publication' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Elisabeth Bouras' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '3. Hébergement du site' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Hébergeur : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: 'Vercel Inc.' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Adresse : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: '340 S Lemon Ave #4133, Walnut, CA 91789, USA' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Site web : ', marks: ['strong'] },
          {
            _key: generateKey('span', 1),
            _type: 'span',
            text: 'vercel.com',
            marks: [
              {
                _key: generateKey('link', 0),
                _type: 'link',
                href: 'https://www.vercel.com',
              },
            ],
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '4. Propriété intellectuelle' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'L\'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de LEB Dépannage, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.',
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '5. Assurance professionnelle' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Compagnie d\'assurance : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: 'Tetris Assurance' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Garantie décennale : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: 'N° SV75018041T34842' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '6. Médiateur de la consommation' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'Conformément à l\'article L. 616-1 du Code de la consommation, en cas de litige, vous avez la possibilité de recourir gratuitement à un service de médiation de la consommation. Pour plus d\'informations, nous contacter.',
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '7. Limitation de responsabilité' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'LEB Dépannage s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition sur ce site.',
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '8. Cookies' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'Ce site n\'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.',
          },
        ],
      },
    ],
  }

  // Politique de Confidentialité
  blockIndex = 0
  const politiqueData = {
    _id: 'politique-confidentialite',
    _type: 'legalPage',
    slug: { current: 'politique-confidentialite' },
    title: 'Politique de Confidentialité',
    lastUpdated: new Date().toISOString().split('T')[0],
    content: [
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '1. Introduction' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'LEB Dépannage accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD).',
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '2. Responsable du traitement' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Responsable : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: 'LEB Dépannage' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Adresse : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: '50 rue du Dôme, 92100 Boulogne-Billancourt' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Email : ', marks: ['strong'] },
          {
            _key: generateKey('span', 1),
            _type: 'span',
            text: 'contact@lebdepannage.fr',
            marks: [
              {
                _key: generateKey('link', 0),
                _type: 'link',
                href: 'mailto:contact@lebdepannage.fr',
              },
            ],
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          { _key: generateKey('span', 0), _type: 'span', text: 'Téléphone : ', marks: ['strong'] },
          { _key: generateKey('span', 1), _type: 'span', text: '06 05 50 63 63' },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '3. Données collectées' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :',
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Nom et prénom' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Adresse email' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Numéro de téléphone' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Message et détails de votre demande' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '4. Finalité du traitement' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Vos données sont utilisées pour :' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Répondre à vos demandes de devis' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Vous recontacter pour planifier une intervention' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Assurer le suivi de nos prestations' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '5. Durée de conservation' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'Vos données sont conservées pendant 3 ans à compter de notre dernier contact, sauf obligation légale de conservation plus longue.',
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '6. Vos droits' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Vous disposez des droits suivants :' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Droit d\'accès à vos données' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Droit de rectification' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Droit à l\'effacement' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: 'Droit d\'opposition au traitement' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'Pour exercer ces droits, contactez-nous à ',
          },
          {
            _key: generateKey('span', 1),
            _type: 'span',
            text: 'contact@lebdepannage.fr',
            marks: [
              {
                _key: generateKey('link', 0),
                _type: 'link',
                href: 'mailto:contact@lebdepannage.fr',
              },
            ],
          },
        ],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'h2',
        children: [{ _key: generateKey('span', 0), _type: 'span', text: '7. Sécurité' }],
      },
      {
        _key: generateKey('block', blockIndex++),
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: generateKey('span', 0),
            _type: 'span',
            text: 'Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles.',
          },
        ],
      },
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
