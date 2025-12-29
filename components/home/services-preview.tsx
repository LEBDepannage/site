import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

const services = ["Plomberie", "Rénovation", "Peinture", "Électricité", "Menuiserie"]

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4 letterSpacing-[0.15em]">
            NOS PRESTATIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Tout problème a sa solution
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Spécialisé dans la rénovation et le dépannage urgent, nous intervenons pour tous vos besoins :
          </p>
          <p className="text-base md:text-lg text-foreground font-semibold mb-4">
            Plomberie générale, électricité, peinture et menuiserie.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
            Que ce soit pour une urgence ou la rénovation complète de votre salle de bain ou cuisine, nous vous
            accompagnons avec rapidité et efficacité.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-border bg-white text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:shadow-md transition-all"
              >
                <Check className="h-4 w-4 text-primary" />
                {service}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all" size="lg">
            <Link href="/services">
              Voir toutes nos prestations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
