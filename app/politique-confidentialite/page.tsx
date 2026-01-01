import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-8">
              <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                LEB Dépannage accorde une grande importance à la protection de vos données personnelles. Cette politique de
                confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Responsable du traitement</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Responsable :</strong> LEB Dépannage
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Adresse :</strong> 50 rue du Dôme, 92100 Boulogne-Billancourt
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Email :</strong> <a href="mailto:contact@lebdepannage.fr" className="text-primary hover:underline">contact@lebdepannage.fr</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Téléphone :</strong> 06 05 50 63 63
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Données collectées</h2>
              <p className="text-muted-foreground mb-4">
                Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale </li>
                <li>Message et détails de votre demande</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Finalité du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Répondre à vos demandes de devis et d'information</li>
                <li>Assurer le suivi de nos prestations</li>
                <li>Vous contacter concernant nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Base légale du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Votre consentement lors de l'utilisation du formulaire de contact</li>
                <li>L'exécution de mesures précontractuelles (établissement de devis)</li>
                <li>Nos intérêts légitimes (gestion de la relation client)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Durée de conservation</h2>
              <p className="text-muted-foreground mb-4">
                Vos données sont conservées pendant :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>3 ans à compter de notre dernier contact pour les prospects</li>
                <li>10 ans pour les devis et factures (obligations comptables)</li>
                <li>Durée de la garantie décennale pour les travaux réalisés</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Destinataires des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont destinées uniquement à :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Le personnel de LEB Dépannage</li>
                <li>Nos sous-traitants techniques (hébergement du site)</li>
              </ul>
              <p className="text-muted-foreground">
                Nous ne vendons ni ne louons vos données à des tiers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Vos droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Pour exercer vos droits, contactez-nous par email à <a href="mailto:contact@lebdepannage.fr" className="text-primary hover:underline">contact@lebdepannage.fr</a> ou par courrier à notre adresse.
              </p>
              <p className="text-muted-foreground">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de
                l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Sécurité des données</h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                contre la destruction accidentelle ou illicite, la perte, l'altération, la divulgation ou l'accès non
                autorisé :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Hébergement sécurisé sur Netlify avec protocole HTTPS</li>
                <li>Accès limité aux données par authentification</li>
                <li>Sauvegardes régulières</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Notre site n'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques strictement
                nécessaires au fonctionnement du site peuvent être utilisés. Ces cookies ne collectent aucune donnée
                personnelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications</h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification
                sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données
                personnelles, vous pouvez nous contacter à <a href="mailto:contact@lebdepannage.fr" className="text-primary hover:underline">contact@lebdepannage.fr</a> ou au 06 05 50 63 63.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
