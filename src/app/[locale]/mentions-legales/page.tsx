export const metadata = {
  title: "Mentions Légales | SPEC OIC-Togo",
  description: "Mentions légales, conditions d'utilisation et politique de confidentialité de la SPEC OIC-Togo.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white dark:bg-spec-black min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-spec-black dark:text-white mb-10">Mentions Légales & Confidentialité</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">1. Éditeur du Site</h2>
          <p>
            Le présent site est édité par la <strong>Structure de Promotion d'Épargne et de Crédit (SPEC OIC-Togo)</strong>, Institution de Microfinance.
            <br />
            <strong>Siège Social :</strong> Notsè, Préfecture de Haho, Togo.
            <br />
            <strong>Email :</strong> secretariat.dg.specoic@gmail.com
          </p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">2. Agrément & Réglementation</h2>
          <p>
            La SPEC OIC-Togo est une institution de microfinance officiellement reconnue et agréée par les autorités togolaises. Ses opérations sont placées sous le contrôle et la réglementation de la <strong>Banque Centrale des États de l'Afrique de l'Ouest (BCEAO)</strong> et du Ministère de l'Économie et des Finances de la République Togolaise.
          </p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">3. Protection des Données Personnelles</h2>
          <p>
            Conformément aux directives de la CEDEAO et de l'UEMOA relatives à la protection des données à caractère personnel, la SPEC OIC s'engage à préserver la confidentialité des informations fournies en ligne par les internautes et par ses membres en agence.
          </p>
          <p>
            Les données collectées via nos formulaires de contact (nom, prénom, numéro de téléphone, email) sont exclusivement destinées au traitement de votre demande par nos services internes. Elles ne sont en aucun cas vendues, cédées ou louées à des tiers.
          </p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">4. Propriété Intellectuelle</h2>
          <p>
            L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc...) ainsi que le site lui-même, relèvent des législations togolaises et internationales sur le droit d'auteur et la propriété intellectuelle.
          </p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">5. Limitation de Responsabilité</h2>
          <p>
            La SPEC OIC s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
            Toutefois, les informations financières ou de services présentées n'ont pas de valeur contractuelle absolue et doivent être confirmées en guichet.
          </p>
        </div>
      </div>
    </div>
  );
}
