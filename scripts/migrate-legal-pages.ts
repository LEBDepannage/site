import { writeClient } from '../sanity/client'

async function migrateLegalPages() {
  console.log('🚀 Migration des pages légales vers Sanity...\n')

  // Mentions Légales
  const mentionsLegalesData = {
    _id: 'mentions-legales',
    _type: 'legalPage',
    slug: { current: 'mentions-legales' },
    title: 'Mentions Légales',
    content: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Informations sur l\'entreprise' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Raison sociale : ', marks: ['strong'] },
          { _type: 'span', text: 'LEB Dépannage' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Forme juridique : ', marks: ['strong'] },
          { _type: 'span', text: 'Auto-entrepreneur' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'SIRET : ', marks: ['strong'] },
          { _type: 'span', text: '88483166000029' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'RCS : ', marks: ['strong'] },
          { _type: 'span', text: 'Nanterre' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Adresse : ', marks: ['strong'] },
          { _type: 'span', text: '50 rue du Dôme, 92100 Boulogne-Billancourt' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Téléphone : ', marks: ['strong'] },
          { _type: 'span', text: '06 05 50 63 63' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Email : ', marks: ['strong'] },
          {
            _type: 'span',
            text: 'contact@lebdepannage.fr',
            marks: [
              {
                _type: 'link',
                href: 'mailto:contact@lebdepannage.fr',
              },
            ],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. Directeur de la publication' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Elisabeth Bouras' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Hébergement du site' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Hébergeur : ', marks: ['strong'] },
          { _type: 'span', text: 'Vercel Inc.' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Adresse : ', marks: ['strong'] },
          { _type: 'span', text: '340 S Lemon Ave #4133, Walnut, CA 91789, USA' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Site web : ', marks: ['strong'] },
          {
            _type: 'span',
            text: 'vercel.com',
            marks: [
              {
                _type: 'link',
                href: 'https://www.vercel.com',
              },
            ],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '4. Propriété intellectuelle' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'L\'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de LEB Dépannage, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '5. Assurance professionnelle' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Compagnie d\'assurance : ', marks: ['strong'] },
          { _type: 'span', text: 'Tetris Assurance' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Garantie décennale : ', marks: ['strong'] },
          { _type: 'span', text: 'N° SV75018041T34842' },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '6. Médiateur de la consommation' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Conformément à l\'article L. 616-1 du Code de la consommation, en cas de litige, vous avez la possibilité de recourir gratuitement à un service de médiation de la consommation. Pour plus d\'informations, nous contacter.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '7. Limitation de responsabilité' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'LEB Dépannage s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition sur ce site.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '8. Cookies' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ce site n\'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.',
          },
        ],
      },
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
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Introduction' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'LEB Dépannage accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. Responsable du traitement' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Responsable : ', marks: ['strong'] },
          { _type: 'span', text: 'LEB Dépannage' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Adresse : ', marks: ['strong'] },
          { _type: 'span', text: '50 rue du Dôme, 92100 Boulogne-Billancourt' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Email : ', marks: ['strong'] },
          {
            _type: 'span',
            text: 'contact@lebdepannage.fr',
            marks: [
              {
                _type: 'link',
                href: 'mailto:contact@lebdepannage.fr',
              },
            ],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Téléphone : ', marks: ['strong'] },
          { _type: 'span', text: '06 05 50 63 63' },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Données collectées' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :',
          },
        ],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Nom et prénom' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Adresse email' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Numéro de téléphone' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Message et détails de votre demande' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '4. Finalité du traitement' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Vos données sont utilisées pour :' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Répondre à vos demandes de devis' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Vous recontacter pour planifier une intervention' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Assurer le suivi de nos prestations' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '5. Durée de conservation' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Vos données sont conservées pendant 3 ans à compter de notre dernier contact, sauf obligation légale de conservation plus longue.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '6. Vos droits' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Vous disposez des droits suivants :' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Droit d\'accès à vos données' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Droit de rectification' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Droit à l\'effacement' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Droit d\'opposition au traitement' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Pour exercer ces droits, contactez-nous à ',
          },
          {
            _type: 'span',
            text: 'contact@lebdepannage.fr',
            marks: [
              {
                _type: 'link',
                href: 'mailto:contact@lebdepannage.fr',
              },
            ],
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '7. Sécurité' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
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
