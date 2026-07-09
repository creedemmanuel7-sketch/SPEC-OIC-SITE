import json

def update(filepath, section, data):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = json.load(f)
    
    content[section] = data
        
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)

legal_fr = {
  "title": "Mentions Légales & Confidentialité",
  "section1_title": "1. Éditeur du Site",
  "section1_text": "Le présent site est édité par la <strong class='text-spec-blue'>Structure de Promotion d'Épargne et de Crédit (SPEC OIC-Togo)</strong>, Institution de Microfinance.<br /><br /><strong>Siège Social :</strong> Notsè, Préfecture de Haho, Togo.<br /><strong>Email :</strong> secretariat.dg.specoic@gmail.com",
  "section2_title": "2. Agrément & Réglementation",
  "section2_text": "La SPEC OIC-Togo est une institution de microfinance officiellement reconnue et agréée par les autorités togolaises. Ses opérations sont placées sous le contrôle et la réglementation de la <strong>Banque Centrale des États de l'Afrique de l'Ouest (BCEAO)</strong> et du Ministère de l'Économie et des Finances de la République Togolaise.",
  "section3_title": "3. Protection des Données Personnelles",
  "section3_text1": "Conformément aux directives de la CEDEAO et de l'UEMOA relatives à la protection des données à caractère personnel, la SPEC OIC s'engage à préserver la confidentialité des informations fournies en ligne par les internautes et par ses membres en agence.",
  "section3_text2": "Les données collectées via nos formulaires de contact (nom, prénom, numéro de téléphone, email) sont exclusivement destinées au traitement de votre demande par nos services internes. Elles ne sont en aucun cas vendues, cédées ou louées à des tiers.",
  "section4_title": "4. Propriété Intellectuelle",
  "section4_text": "L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc...) ainsi que le site lui-même, relèvent des législations togolaises et internationales sur le droit d'auteur et la propriété intellectuelle.",
  "section5_title": "5. Limitation de Responsabilité",
  "section5_text": "La SPEC OIC s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, les informations financières ou de services présentées n'ont pas de valeur contractuelle absolue et doivent être confirmées en guichet."
}

legal_en = {
  "title": "Legal Notice & Privacy Policy",
  "section1_title": "1. Site Publisher",
  "section1_text": "This site is published by the <strong class='text-spec-blue'>Structure de Promotion d'Épargne et de Crédit (SPEC OIC-Togo)</strong>, a Microfinance Institution.<br /><br /><strong>Head Office:</strong> Notsè, Haho Prefecture, Togo.<br /><strong>Email:</strong> secretariat.dg.specoic@gmail.com",
  "section2_title": "2. Approval & Regulation",
  "section2_text": "SPEC OIC-Togo is an officially recognized and approved microfinance institution by the Togolese authorities. Its operations are under the control and regulation of the <strong>Central Bank of West African States (BCEAO)</strong> and the Ministry of Economy and Finance of the Togolese Republic.",
  "section3_title": "3. Personal Data Protection",
  "section3_text1": "In accordance with ECOWAS and UEMOA directives regarding the protection of personal data, SPEC OIC is committed to preserving the confidentiality of information provided online by users and by its members in branches.",
  "section3_text2": "The data collected via our contact forms (last name, first name, phone number, email) is exclusively intended for the processing of your request by our internal services. They are in no case sold, transferred, or rented to third parties.",
  "section4_title": "4. Intellectual Property",
  "section4_text": "All elements constituting this site (texts, graphics, software, photographs, images, videos, sounds, plans, names, logos, brands, various protectable creations and works, databases, etc...) as well as the site itself, are subject to Togolese and international laws on copyright and intellectual property.",
  "section5_title": "5. Limitation of Liability",
  "section5_text": "SPEC OIC strives to ensure to the best of its ability the accuracy and updating of the information broadcast on this site, of which it reserves the right to correct the content at any time and without notice. However, the financial or service information presented does not have absolute contractual value and must be confirmed at the branch."
}

update("messages/fr.json", "Legal", legal_fr)
update("messages/en.json", "Legal", legal_en)
print("Done!")
