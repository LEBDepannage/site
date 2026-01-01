import { config } from 'dotenv'
import { writeClient } from '../sanity/client'
import { createReadStream } from 'fs'
import path from 'path'

config({ path: '.env.local' })

const IMAGES_TO_UPLOAD = [
  { path: 'photo-artisan.jpg', alt: 'Artisan LEB Dépannage' },
  { path: 'télé1.jpg', alt: 'Installation Meuble TV avec LED' },
  { path: 'salon.jpg', alt: 'Faux Plafond avec Éclairage LED' },
  { path: 'carrelage.jpg', alt: 'Terrasse Extérieure en Dalles' },
  { path: 'google-logo.png', alt: 'Google Logo' },
]

async function uploadImage(filename: string, alt: string) {
  const imagePath = path.join(process.cwd(), 'public', 'images', filename)

  console.log(`📤 Upload de ${filename}...`)

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

async function uploadAllImages() {
  console.log('🚀 Début de l\'upload des images vers Sanity CDN...\n')

  const uploadedImages: Record<string, any> = {}

  for (const img of IMAGES_TO_UPLOAD) {
    uploadedImages[img.path] = await uploadImage(img.path, img.alt)
  }

  console.log('\n✨ Toutes les images ont été uploadées!')
  console.log('\n📋 Références des images (à copier dans migrate-homepage.ts):')
  console.log(JSON.stringify(uploadedImages, null, 2))

  return uploadedImages
}

uploadAllImages()
  .then(() => process.exit(0))
  .catch(() => process.exit(1))
