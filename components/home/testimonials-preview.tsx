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
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">{data.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16 max-w-5xl mx-auto">
          {data.stats.map((stat) => {
            const IconComponent = (LucideIcons as any)[stat.icon] || ThumbsUp
            return (
              <Card key={stat._key} className="bg-gradient-to-br from-slate-50 to-white border-2 border-border hover:border-primary text-center py-10 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
                  <p className="text-5xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Review platforms */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {data.platforms.map((platform) => {
            const fullStars = Math.floor(platform.rating)
            const hasHalfStar = platform.rating % 1 >= 0.5

            // Logos locaux pour les plateformes connues
            const localLogos: Record<string, string> = {
              'Google': '/google-logo.png',
              'Travaux.com': '/travaux-logo.png',
            }

            const logoSrc = localLogos[platform.name] || (platform.logo ? urlFor(platform.logo).url() : '')

            return (
              <a key={platform._key} href={platform.link} target="_blank" rel="noopener noreferrer">
                <Card className="bg-white border-2 border-border hover:border-primary p-8 shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <CardContent className="p-0 flex items-center gap-6">
                    {logoSrc ? (
                      <div className="w-20 h-20 relative shrink-0">
                        <Image
                          src={logoSrc}
                          alt={`Logo ${platform.name}`}
                          fill
                          className="object-contain"
                          unoptimized={!logoSrc.startsWith('/')}
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold shrink-0">
                        {platform.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-foreground text-xl mb-2">{logoSrc ? `Avis ${platform.name}` : platform.name}</p>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-4xl font-bold text-foreground">{platform.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-6 w-6 ${
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
                      <p className="text-sm text-muted-foreground font-medium">{platform.reviewCount} avis vérifiés</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
