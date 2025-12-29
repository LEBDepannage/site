import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import { RealisationsPreview } from "@/components/home/realisations-preview"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <RealisationsPreview />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
