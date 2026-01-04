import { config } from 'dotenv'
import { writeClient } from '../sanity/client'
import { createReadStream } from 'fs'
import path from 'path'

config({ path: '.env.local' })

const MEDIA_TO_UPLOAD = [
  { path: 'télé1.jpg', alt: 'Installation Meuble TV avec LED', type: 'image' },
  { path: 'télé2.jpg', alt: 'Meuble TV Design avec Rétro-éclairage', type: 'image' },
  { path: 'carrelage.jpg', alt: 'Terrasse Extérieure en Dalles', type: 'image' },
  { path: 'sdb.jpg', alt: 'Douche Italienne Carrelage Imitation Bois', type: 'image' },
  { path: 'salon.jpg', alt: 'Faux Plafond avec Éclairage LED', type: 'image' },
  { path: 'video.mp4', alt: 'Installation de Fenêtres sur Mesure', type: 'video' },
]

async function uploadImage(filename: string, alt: string) {
  const imagePath = path.join(process.cwd(), 'public', 'images', filename)

  console.log(`📤 Upload de l'image ${filename}...`)

  try {
    const stream = createReadStream(imagePath)

    const asset = await writeClient.assets.upload('image', stream, {
      filename: filename,
    })

    console.log(`✅ ${filename} uploadé avec ID: ${asset._id}`)

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
      alt: alt,
    }
  } catch (error) {
    console.error(`❌ Erreur upload ${filename}:`, error)
    throw error
  }
}

async function uploadVideo(filename: string) {
  const videoPath = path.join(process.cwd(), 'public', 'images', filename)

  console.log(`📤 Upload de la vidéo ${filename}...`)

  try {
    const stream = createReadStream(videoPath)

    const asset = await writeClient.assets.upload('file', stream, {
      filename: filename,
    })

    console.log(`✅ ${filename} uploadé avec ID: ${asset._id}`)

    return {
      _type: 'file',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
  } catch (error) {
    console.error(`❌ Erreur upload ${filename}:`, error)
    throw error
  }
}

async function uploadAllMedia() {
  console.log('🚀 Début de l\'upload des médias vers Sanity CDN...\n')

  const uploadedMedia: Record<string, any> = {}

  for (const media of MEDIA_TO_UPLOAD) {
    if (media.type === 'image') {
      uploadedMedia[media.path] = await uploadImage(media.path, media.alt)
    } else if (media.type === 'video') {
      uploadedMedia[media.path] = await uploadVideo(media.path)
    }
  }

  console.log('\n✨ Tous les médias ont été uploadés!')
  console.log('\n📋 Références des médias (à copier dans migrate-realisations.ts):')
  console.log(JSON.stringify(uploadedMedia, null, 2))

  return uploadedMedia
}

uploadAllMedia()
  .then(() => process.exit(0))
  .catch(() => process.exit(1))
