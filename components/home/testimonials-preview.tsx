import Image from "next/image"
import { ThumbsUp, Users, Award, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">TÉMOIGNAGES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Avis Clients Certifiés
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre priorité. Retrouvez tous nos avis vérifiés sur les plateformes de
            référence.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-50 to-white border-2 border-border hover:border-primary text-center py-10 shadow-sm hover:shadow-lg transition-all">
            <CardContent className="p-0">
              <ThumbsUp className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-5xl font-bold text-foreground mb-2">98%</p>
              <p className="text-muted-foreground font-medium">Clients Satisfaits</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-slate-50 to-white border-2 border-border hover:border-primary text-center py-10 shadow-sm hover:shadow-lg transition-all">
            <CardContent className="p-0">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-5xl font-bold text-foreground mb-2">500+</p>
              <p className="text-muted-foreground font-medium">Interventions Réussies</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-slate-50 to-white border-2 border-border hover:border-primary text-center py-10 shadow-sm hover:shadow-lg transition-all">
            <CardContent className="p-0">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-5xl font-bold text-foreground mb-2">10 ans</p>
              <p className="text-muted-foreground font-medium">{"D'Expérience"}</p>
            </CardContent>
          </Card>
        </div>

        {/* Review platforms */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Google */}
          <a href="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzLD6nnZDFoNv36yXgKFOZRypdCD4I36zyv9G7whtOf5dRagL_QtHCW-r2sA2KFRZhzbNGmxQVTcxSxJwilBRdCcueOwlO09kMtKnsO21lIt-jvlXF8Bds9WSEgEmSS2zQuWvmSg&q=plomberie%20LEB%20depannage%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1CWlta1mIARxT-zy5mWU2R-j4oDzccUoPKiy40sA6f5qSjaxy6-P6RZzCc-je_bR4-sFNy0Qb9y-aVzAhh3KbAGxuJslcWJDTjDl5ihv7NG00RMIg%3D%3D&cs=1&hl=fr&sa=X&ved=0CC0Q_4MLahcKEwjAre20lN6RAxUAAAAAHQAAAAAQBg&biw=1280&bih=665&dpr=1.5" target="_blank" rel="noopener noreferrer">
            <Card className="bg-white border-2 border-border hover:border-primary p-8 shadow-md hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-0 flex items-center gap-6">
                <div className="w-20 h-20 relative shrink-0">
                  <Image src="/google-logo.png" alt="Google" fill className="object-contain" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-xl mb-2">Avis Google</p>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-4xl font-bold text-foreground">4.7</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-6 w-6 ${i < 4 ? "fill-yellow-400 text-yellow-400" : i === 4 ? "fill-yellow-400/70 text-yellow-400" : "text-muted"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">15 avis vérifiés</p>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Travaux.com */}
          <a href="https://www.travaux.com/professionnel/leb-depannage" target="_blank" rel="noopener noreferrer">
            <Card className="bg-white border-2 border-border hover:border-primary p-8 shadow-md hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-0 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold shrink-0">
                  T
                </div>
                <div>
                  <p className="font-bold text-foreground text-xl mb-2">Travaux.com</p>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-4xl font-bold text-foreground">4.8</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${i < 4 ? "fill-yellow-400 text-yellow-400" : i === 4 ? "fill-yellow-400/50 text-yellow-400" : "text-muted"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">31 avis vérifiés</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  )
}
