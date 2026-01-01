import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import type { ServicesPreviewData } from "@/types/sanity"

interface ServicesPreviewProps {
  data: ServicesPreviewData
}

export function ServicesPreview({ data }: ServicesPreviewProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4 letterSpacing-[0.15em]">
            {data.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {data.title}
          </h2>
          {/* Description - Portable Text à implémenter proprement plus tard */}
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
            {data.description && data.description.map((block: any, index: number) => (
              <p key={index} className={block.children[0]?.marks?.includes('strong') ? 'font-semibold text-foreground mb-4' : 'mb-4'}>
                {block.children[0]?.text}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {data.services.map((service) => (
              <Link
                key={service._key}
                href={`/services#${service.anchor}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-border bg-white text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:shadow-md transition-all cursor-pointer"
              >
                <Check className="h-4 w-4 text-primary" />
                {service.name}
              </Link>
            ))}
          </div>

          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all" size="lg">
            <Link href="/services">
              {data.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
