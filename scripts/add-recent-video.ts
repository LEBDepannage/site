import { config } from 'dotenv'
import { writeClient } from '../sanity/client'
import fs from 'fs'
import path from 'path'

config({ path: '.env.local' })

async function uploadVideoToSanity() {
  console.log('🎬 Upload de la vidéo vers Sanity...\n')

  try {
    // Chemin vers la vidéo
    const videoPath = path.join(process.cwd(), 'public', 'images', 'video.mp4')

    if (!fs.existsSync(videoPath)) {
      throw new Error('Le fichier video.mp4 n\'existe pas dans public/images/')
    }

    // Upload du fichier vidéo
    console.log('📤 Upload de video.mp4...')
    const videoBuffer = fs.readFileSync(videoPath)
    const videoAsset = await writeClient.assets.upload('file', videoBuffer, {
      filename: 'video.mp4',
      contentType: 'video/mp4',
    })
    console.log('✅ Vidéo uploadée:', videoAsset._id)

    return videoAsset._id
  } catch (error) {
    console.error('❌ Erreur lors de l\'upload de la vidéo:', error)
    throw error
  }
}

async function addRecentVideoSection() {
  console.log('🎥 Ajout de la section vidéo chantier récent...\n')

  try {
    // Upload de la vidéo
    const videoAssetId = await uploadVideoToSanity()

    // Récupérer le document homePage existant
    const existingDoc = await writeClient.fetch(`*[_id == "homePage"][0]`)

    if (!existingDoc) {
      throw new Error('Le document homePage n\'existe pas. Exécutez d\'abord npm run sanity:migrate-home')
    }

    // Ajouter la section recentVideo
    const updatedDoc = {
      ...existingDoc,
      recentVideo: {
        sectionLabel: 'CHANTIER RÉCENT',
        title: 'Notre dernier chantier en vidéo',
        description: 'Découvrez en images le professionnalisme et la qualité de notre travail sur un chantier récent de carrelage.',
        video: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: videoAssetId,
          },
          alt: 'Vidéo d\'un chantier de carrelage réalisé par LEB Dépannage',
        },
        projectDetails: {
          category: 'Carrelage',
          location: 'Île-de-France',
          duration: '2 jours',
        },
      },
    }

    // Mettre à jour le document
    await writeClient
      .patch('homePage')
      .set({ recentVideo: updatedDoc.recentVideo })
      .commit()

    console.log('✅ Section vidéo ajoutée avec succès!')
    console.log('\n📍 Détails:')
    console.log('   - Titre: Notre dernier chantier en vidéo')
    console.log('   - Catégorie: Carrelage')
    console.log('   - Localisation: Île-de-France')
    console.log('   - Durée: 2 jours')
    console.log('\n🎉 La section vidéo devrait maintenant apparaître sur votre page d\'accueil!')
    console.log('   Rechargez http://localhost:3000 pour voir le résultat.')

  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout de la section vidéo:', error)
    process.exit(1)
  }
}

addRecentVideoSection()
