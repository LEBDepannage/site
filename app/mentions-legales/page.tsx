import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Mentions Légales</h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Informations sur l'entreprise</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Raison sociale :</strong> LEB Dépannage
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Forme juridique :</strong> Auto-entrepreneur
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>SIRET :</strong> 88483166000029
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>RCS :</strong> Nanterre
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Adresse :</strong> 50 rue du Dôme, 92100 Boulogne-Billancourt
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Téléphone :</strong> 06 05 50 63 63
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Email :</strong> <a href="mailto:contact@lebdepannage.fr" className="text-primary hover:underline">contact@lebdepannage.fr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Directeur de la publication</h2>
              <p className="text-muted-foreground">
                Elisabeth Bouras
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Hébergement du site</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Hébergeur :</strong> Netlify, Inc.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA
              </p>
              <p className="text-muted-foreground">
                <strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">netlify.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de LEB Dépannage,
                sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou
                partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation
                écrite préalable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Assurance professionnelle</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Compagnie d'assurance :</strong> Tetris Assurance
              </p>
              <p className="text-muted-foreground">
                <strong>Garantie décennale :</strong> N° SV75018041T34842
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Médiateur de la consommation</h2>
              <p className="text-muted-foreground">
                Conformément à l'article L. 616-1 du Code de la consommation, en cas de litige, vous avez la possibilité
                de recourir gratuitement à un service de médiation de la consommation. Pour plus d'informations, nous contacter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation de responsabilité</h2>
              <p className="text-muted-foreground mb-4">
                LEB Dépannage s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
                Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
                disposition sur ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
              <p className="text-muted-foreground">
                Ce site n'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques nécessaires au
                bon fonctionnement du site peuvent être utilisés.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
