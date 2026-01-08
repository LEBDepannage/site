import { client } from "@/sanity/client"
import type { HeaderData, FooterData } from "@/types/sanity"

export async function getHeaderData(): Promise<HeaderData | null> {
  try {
    console.log('[getHeaderData] Fetching header data from Sanity...')
    const data = await client.fetch(
      `*[_type == "header"][0]{
        logo{
          ...,
          asset->
        },
        navLinks,
        contactPhone,
        contactButtonLabel
      }`,
      {},
      {
        next: { revalidate: 60 }
      }
    )
    console.log('[getHeaderData] Received data:', JSON.stringify(data, null, 2))
    return data
  } catch (error) {
    console.error('[getHeaderData] Error fetching header data:', error)
    return null
  }
}

export async function getFooterData(): Promise<FooterData | null> {
  try {
    console.log('[getFooterData] Fetching footer data from Sanity...')
    const data = await client.fetch(
      `*[_type == "footer"][0]{
        companyName,
        description,
        mainNavLinks,
        legalLinks,
        address,
        copyrightText
      }`,
      {},
      {
        next: { revalidate: 60 }
      }
    )
    console.log('[getFooterData] Received data:', JSON.stringify(data, null, 2))
    return data
  } catch (error) {
    console.error('[getFooterData] Error fetching footer data:', error)
    return null
  }
}
