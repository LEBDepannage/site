import { config } from 'dotenv'
import { client } from '../sanity/client'

config({ path: '.env.local' })

async function checkVideoData() {
  console.log('🔍 Vérification des données vidéo dans Sanity...\n')

  try {
    const data = await client.fetch(`*[_id == "homePage"][0]{
      recentVideo
    }`)

    console.log('📊 Données complètes de recentVideo:')
    console.log(JSON.stringify(data, null, 2))

  } catch (error) {
    console.error('❌ Erreur:', error)
  }
}

checkVideoData()
