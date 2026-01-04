import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Secret token pour sécuriser le webhook
const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN || 'dev-secret-token'

export async function POST(request: NextRequest) {
  try {
    // Vérifier le token de sécurité
    const token = request.nextUrl.searchParams.get('token')

    if (token !== REVALIDATE_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    // Récupérer le type de document modifié
    const body = await request.json()
    const documentType = body._type

    console.log(`🔄 Revalidation triggered for: ${documentType}`)

    // Revalider les pages en fonction du type de document
    switch (documentType) {
      case 'homePage':
        revalidatePath('/')
        console.log('✅ Revalidated: /')
        break

      case 'servicesPage':
        revalidatePath('/services')
        console.log('✅ Revalidated: /services')
        break

      case 'realisationsPage':
        revalidatePath('/realisations')
        console.log('✅ Revalidated: /realisations')
        break

      case 'siteSettings':
        // Revalider toutes les pages si les paramètres globaux changent
        revalidatePath('/', 'layout')
        console.log('✅ Revalidated: all pages (layout)')
        break

      default:
        console.log(`⚠️ Unknown document type: ${documentType}`)
    }

    return NextResponse.json({
      revalidated: true,
      documentType,
      now: Date.now()
    })

  } catch (error) {
    console.error('❌ Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    )
  }
}

// Support GET pour tester facilement
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')

  if (token !== REVALIDATE_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  return NextResponse.json({
    message: 'Revalidation endpoint is working',
    usage: 'POST to this endpoint with document data to trigger revalidation'
  })
}
