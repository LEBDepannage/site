import { client } from "@/sanity/client"
import type { HeaderData, FooterData } from "@/types/sanity"

export async function getHeaderData(): Promise<HeaderData | null> {
  try {
    return await client.fetch(
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
  } catch (error) {
    console.error('Error fetching header data:', error)
    return null
  }
}

export async function getFooterData(): Promise<FooterData | null> {
  try {
    return await client.fetch(
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
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return null
  }
}
