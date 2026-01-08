import Image from "next/image"
import { ThumbsUp, Users, Award, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { urlFor } from "@/sanity/client"
import type { TestimonialsData } from "@/types/sanity"
import * as LucideIcons from "lucide-react"

interface TestimonialsPreviewProps {
  data: TestimonialsData
}

export function TestimonialsPreview({ data }: TestimonialsPreviewProps) {
  return (
    <section className="py-20 landscape:py-12 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16 landscape:mb-8">
          <p className="text-sm landscape:text-xs font-bold text-primary uppercase tracking-widest mb-4 landscape:mb-2">{data.sectionLabel}</p>
          <h2 className="text-3xl landscape:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 landscape:mb-3 leading-tight">
            {data.title}
          </h2>
          <p className="text-base landscape:text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-6 landscape:gap-4 md:grid-cols-3 mb-16 landscape:mb-8 max-w-5xl mx-auto">
          {data.stats.map((stat) => {
            const IconComponent = (LucideIcons as any)[stat.icon] || ThumbsUp
            return (
              <Card key={stat._key} className="bg-gradient-to-br from-slate-50 to-white border-2 border-border hover:border-primary text-center py-10 landscape:py-6 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <IconComponent className="h-10 w-10 landscape:h-8 landscape:w-8 text-primary mx-auto mb-4 landscape:mb-2" />
                  <p className="text-5xl landscape:text-3xl font-bold text-foreground mb-2 landscape:mb-1">{stat.value}</p>
                  <p className="text-muted-foreground landscape:text-sm font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Review platforms */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg landscape:text-base text-muted-foreground mb-8 landscape:mb-4 font-medium">
            Consultez nos avis sur Google et Travaux.com
          </p>
          <div className="grid gap-8 landscape:gap-4 md:grid-cols-2">
            {data.platforms.map((platform) => {
            const fullStars = Math.floor(platform.rating)
            const hasHalfStar = platform.rating % 1 >= 0.5

            // Logos locaux pour les plateformes connues
            const localLogos: Record<string, string> = {
              'Google': '/google-logo.png',
              'Travaux.com': '/travaux-logo.png',
            }

            const logoSrc = localLogos[platform.name] || (platform.logo ? urlFor(platform.logo).url() : '')

            // Forcer le lien Google en dur
            const platformLink = platform.name === 'Google'
              ? 'https://www.google.com/search?sa=X&sca_esv=a891270acf4ea91d&sxsrf=AE3TifP6d3-RpiYFMUQMOpPKUQj_K3zgQg:1767823154902&q=LEB+depannage+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLUwMzY2NLEwM7IwNjAwN7G0sNzAyPiKUcjH1UkhJbUgMS8vMT1VwbEss3gRKxZBAOkADX1FAAAA&rldimm=15863314862830074989&tbm=lcl&hl=fr-FR&ved=2ahUKEwiCybG5tvqRAxXbTKQEHTCcDB4Q9fQKegQITRAG&biw=1280&bih=665&dpr=1.5#lkt=LocalPoiReviews'
              : platform.link

            return (
              <a key={platform._key} href={platformLink} target="_blank" rel="noopener noreferrer">
                <Card className="bg-white border-2 border-border hover:border-primary p-8 landscape:p-4 shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <CardContent className="p-0 flex items-center gap-6 landscape:gap-4">
                    {logoSrc ? (
                      <div className="w-20 h-20 landscape:w-14 landscape:h-14 relative shrink-0">
                        <Image
                          src={logoSrc}
                          alt={`Logo ${platform.name}`}
                          fill
                          className="object-contain"
                          unoptimized={!logoSrc.startsWith('/')}
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 landscape:w-14 landscape:h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl landscape:text-2xl font-bold shrink-0">
                        {platform.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-foreground text-xl landscape:text-base mb-2 landscape:mb-1">{logoSrc ? `Avis ${platform.name}` : platform.name}</p>
                      <div className="flex items-center gap-3 landscape:gap-2 mb-1">
                        <span className="text-4xl landscape:text-2xl font-bold text-foreground">{platform.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-6 w-6 landscape:h-4 landscape:w-4 ${
                                i < fullStars
                                  ? "fill-yellow-400 text-yellow-400"
                                  : i === fullStars && hasHalfStar
                                  ? "fill-yellow-400/70 text-yellow-400"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm landscape:text-xs text-muted-foreground font-medium">{platform.reviewCount} avis vérifiés</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
