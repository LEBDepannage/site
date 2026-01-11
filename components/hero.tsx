import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import type { HeroData } from "@/types/sanity"

interface HeroProps {
  data: HeroData
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3A52] via-[#3E5173] to-[#4A6085] py-16 max-lg:landscape:py-8 md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTE4IDBjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wIDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMTggMGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container relative mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid gap-12 max-lg:landscape:gap-6 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 max-lg:landscape:gap-3">
            <div className="inline-flex items-center gap-2 text-sm max-lg:landscape:text-xs bg-white/10 backdrop-blur-sm px-4 py-2 max-lg:landscape:px-3 max-lg:landscape:py-1.5 rounded-full border border-white/20 w-fit shadow-lg">
              <span className="w-2.5 h-2.5 max-lg:landscape:w-2 max-lg:landscape:h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></span>
              <span className="font-semibold text-white">{data.badge}</span>
            </div>

            <h1 className="text-4xl max-lg:landscape:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl">
              {data.title}
            </h1>

            <p className="text-lg max-lg:landscape:text-base text-white font-medium max-w-xl leading-relaxed drop-shadow-lg">
              {data.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-lg:landscape:gap-3 pt-2 max-lg:landscape:pt-1">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-8 max-lg:landscape:px-6 h-12 max-lg:landscape:h-10 max-lg:landscape:text-sm shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <a href={`tel:${data.ctaPrimary.phone}`}>
                  <Phone className="mr-2 h-5 w-5 max-lg:landscape:h-4 max-lg:landscape:w-4" />
                  {data.ctaPrimary.label}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full px-8 max-lg:landscape:px-6 h-12 max-lg:landscape:h-10 max-lg:landscape:text-sm bg-transparent backdrop-blur-sm transition-all"
                asChild
              >
                <Link href={data.ctaSecondary.link}>{data.ctaSecondary.label}</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 max-lg:landscape:gap-3 pt-4 max-lg:landscape:pt-2 text-sm max-lg:landscape:text-xs">
              {data.badges.map((badge) => {
                const IconComponent = badge.icon === 'CheckCircle' ? CheckCircle : MapPin
                return (
                  <div key={badge._key} className="flex items-center gap-2 max-lg:landscape:gap-1.5 text-white bg-white/10 backdrop-blur-sm px-3 py-2 max-lg:landscape:px-2 max-lg:landscape:py-1.5 rounded-lg border border-white/20">
                    <IconComponent className="h-5 w-5 max-lg:landscape:h-4 max-lg:landscape:w-4 text-green-400" />
                    <span className="font-semibold">{badge.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end max-lg:landscape:hidden">
            <div className="relative w-full max-w-[320px] h-96 md:max-w-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              <Image
                src="/images/photo-artisan.jpg"
                alt="Artisan LEB Dépannage"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
