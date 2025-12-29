"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <Card className="bg-white border-2 border-border shadow-xl">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
          Demande de Devis Gratuit
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement. Devis sur mesure gratuit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Demande envoyée !</h3>
            <p className="text-muted-foreground text-lg">Nous vous recontacterons dans les plus brefs délais.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-semibold text-foreground">
                  Prénom
                </Label>
                <Input id="firstName" placeholder="Votre prénom" required className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-semibold text-foreground">
                  Nom
                </Label>
                <Input id="lastName" placeholder="Votre nom" required className="h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-foreground">
                Email
              </Label>
              <Input id="email" type="email" placeholder="votre@email.fr" required className="h-11" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold text-foreground">
                Téléphone
              </Label>
              <Input id="phone" type="tel" placeholder="06 00 00 00 00" required className="h-11" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="font-semibold text-foreground">
                Type de service
              </Label>
              <select
                id="service"
                className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
                required
              >
                <option value="">Sélectionnez un service</option>
                <option value="plomberie">Plomberie</option>
                <option value="menuiserie">Menuiserie</option>
                <option value="carrelage">Carrelage</option>
                <option value="electricite">Électricité</option>
                <option value="peinture">Peinture</option>
                <option value="renovation">Rénovation complète</option>
                <option value="debouchage">Débouchage</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-semibold text-foreground">
                Décrivez votre projet
              </Label>
              <Textarea id="message" placeholder="Décrivez vos besoins en détail..." rows={5} required className="resize-none" />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              <Send className="mr-2 h-5 w-5" />
              Envoyer ma demande
            </Button>

            <p className="text-sm text-center text-muted-foreground pt-2">
              En soumettant ce formulaire, vous acceptez d'être contacté par LEB Dépannage.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
