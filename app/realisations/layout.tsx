import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Réalisations Plomberie & Rénovation à Boulogne-Billancourt",
  description:
    "Découvrez nos réalisations en plomberie, menuiserie, carrelage et rénovation à Boulogne-Billancourt et Île-de-France. Portfolio de nos meilleurs chantiers.",
  openGraph: {
    title: "Réalisations Plomberie & Rénovation à Boulogne-Billancourt | LEB Dépannage",
    description: "Portfolio de nos réalisations en plomberie, menuiserie et rénovation à Boulogne-Billancourt.",
    url: "/realisations",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEB Dépannage - Portfolio de nos réalisations",
      },
    ],
  },
  alternates: {
    canonical: "/realisations",
  },
}

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
