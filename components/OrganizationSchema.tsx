export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LEB Dépannage",
    "url": "https://lebdepannage.com",
    "logo": "https://lebdepannage.com/images/image.png",
    "image": "https://lebdepannage.com/images/image.png",
    "description": "Artisan plombier à Boulogne-Billancourt, spécialisé en plomberie, menuiserie, carrelage, électricité et peinture.",
    "telephone": "+33605506363",
    "email": "contact@lebdepannage.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 rue du Dôme",
      "addressLocality": "Boulogne-Billancourt",
      "postalCode": "92100",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.google.com/search?sa=X&sca_esv=a891270acf4ea91d&sxsrf=AE3TifP6d3-RpiYFMUQMOpPKUQj_K3zgQg:1767823154902&q=LEB+depannage+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLUwMzY2NLEwM7IwNjAwN7G0sNzAyPiKUcjH1UkhJbUgMS8vMT1VwbEss3gRKxZBAOkADX1FAAAA&rldimm=15863314862830074989&tbm=lcl&hl=fr-FR"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "48.8396",
        "longitude": "2.2448"
      },
      "geoRadius": "50000"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
