import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import { urlFor } from "@/sanity/client"
import type { RealisationsPreviewData } from "@/types/sanity"

interface RealisationsPreviewProps {
  data: RealisationsPreviewData
}

export function RealisationsPreview({ data }: RealisationsPreviewProps) {
  return (
    <section className="py-20 landscape:py-12 md:py-28 bg-gradient-to-b from-white to-slate-50">
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

        <div className="grid gap-8 landscape:gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12 landscape:mb-6">
          {data.realisations.map((realisation) => (
            <div
              key={realisation._key}
              className="group bg-white rounded-2xl landscape:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] landscape:aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={realisation.image ? urlFor(realisation.image).url() : "/placeholder.svg"}
                  alt={realisation.image?.alt || realisation.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized={!!realisation.image}
                />
                <span className="absolute top-4 landscape:top-2 left-4 landscape:left-2 text-xs landscape:text-[10px] font-bold bg-primary text-white px-4 landscape:px-3 py-2 landscape:py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {realisation.category}
                </span>
              </div>
              <div className="p-6 landscape:p-4">
                <div className="flex items-center gap-2 text-sm landscape:text-xs text-muted-foreground mb-3 landscape:mb-2">
                  <MapPin className="h-4 w-4 landscape:h-3 landscape:w-3 text-primary" />
                  {realisation.location}
                </div>
                <h3 className="text-xl landscape:text-base font-bold text-foreground">{realisation.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Link href="/realisations">
              {data.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
