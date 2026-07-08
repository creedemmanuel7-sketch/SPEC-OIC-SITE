import json

def update_json(filepath, section, data_fr, data_en, is_fr=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if section not in data:
        data[section] = {}
    
    data[section].update(data_fr if is_fr else data_en)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# FAQ keys
faq_fr = {
    "title": "Foire Aux Questions",
    "desc": "Retrouvez ici les réponses aux questions les plus fréquentes sur nos services, le fonctionnement de la coopérative et les conditions d'adhésion.",
    "q1": "Quel est l'âge minimum pour ouvrir un compte ?",
    "a1": "Il n'y a pas d'âge minimum strict pour ouvrir un compte chez nous. Nous proposons des comptes d'épargne adaptés aux jeunes pour encourager l'éducation financière dès le plus jeune âge, sous la supervision d'un tuteur légal pour les mineurs.",
    "q2": "Proposez-vous des services bancaires en ligne ou mobiles ?",
    "a2": "Actuellement, nos services sont purement physiques dans nos 13 guichets. Cette approche nous permet de maintenir un contact humain et de proximité essentiel avec nos membres ruraux et commerçants. Des réflexions sont en cours pour l'intégration de services digitaux à l'avenir.",
    "q3": "Qui supervise les activités de la SPEC OIC-Togo ?",
    "a3": "En tant qu'Institution de Microfinance reconnue, nous sommes sous la tutelle du Ministère de l'Économie et des Finances du Togo et de la Banque Centrale des États de l'Afrique de l'Ouest (BCEAO). Cela garantit la sécurité de vos fonds et le respect strict des réglementations financières.",
    "q4": "Qu'est-ce que la transition coopérative de 2027 ?",
    "a4": "Pour nous conformer à la nouvelle législation togolaise sur les institutions de microfinance, nous préparons notre transformation en coopérative d'ici 2027. Cela renforcera l'implication de nos membres dans la gouvernance de l'institution.",
    "q5": "Comment puis-je demander un crédit agricole ?",
    "a5": "Pour obtenir un crédit agricole, vous devez d'abord être membre et avoir un compte d'épargne actif à la SPEC. Rapprochez-vous de l'un de nos guichets avec votre pièce d'identité et les détails de votre projet (taille du champ, type de culture) pour qu'un agent de crédit étudie votre dossier."
}
faq_en = {
    "title": "Frequently Asked Questions",
    "desc": "Find here answers to the most common questions about our services, the cooperative's operation, and membership conditions.",
    "q1": "What is the minimum age to open an account?",
    "a1": "There is no strict minimum age to open an account with us. We offer savings accounts adapted for young people to encourage financial education from an early age, under the supervision of a legal guardian for minors.",
    "q2": "Do you offer online or mobile banking services?",
    "a2": "Currently, our services are purely physical at our 13 counters. This approach allows us to maintain the essential human and proximity contact with our rural and merchant members. Discussions are underway to integrate digital services in the future.",
    "q3": "Who supervises SPEC OIC-Togo's activities?",
    "a3": "As a recognized Microfinance Institution, we are under the supervision of the Togolese Ministry of Economy and Finance and the Central Bank of West African States (BCEAO). This guarantees the security of your funds and strict compliance with financial regulations.",
    "q4": "What is the 2027 cooperative transition?",
    "a4": "To comply with the new Togolese legislation on microfinance institutions, we are preparing our transformation into a cooperative by 2027. This will strengthen the involvement of our members in the governance of the institution.",
    "q5": "How can I apply for an agricultural loan?",
    "a5": "To obtain an agricultural loan, you must first be a member and have an active savings account at SPEC. Visit one of our counters with your ID and the details of your project (field size, type of crop) so a credit agent can review your file."
}

# Gouvernance keys
gov_fr = {
    "badge": "Notre Équipe",
    "title": "Gouvernance",
    "desc": "Une équipe dirigeante expérimentée et dévouée, travaillant chaque jour pour offrir les meilleurs services financiers à nos communautés.",
    "dgWord": "Le mot du Directeur Général",
    "dgQuote1": "\"Depuis la création de la SPEC OIC-Togo en 2002, notre mission est restée inchangée : lutter contre la précarité en favorisant l'inclusion financière des populations vulnérables, des petits exploitants agricoles et des artisans.",
    "dgQuote2": "Aujourd'hui, avec plus de 64 000 membres actifs, nous sommes fiers de voir les fruits de notre engagement quotidien. Mais notre travail n'est pas terminé. Nous continuons d'innover pour vous offrir des services toujours plus adaptés et sécurisés.\"",
    "dgTitle": "Directeur Général",
    "committeeTitle": "Comité de Direction",
    "committeeDesc": "Des experts dans leurs domaines respectifs qui pilotent la stratégie et les opérations de l'institution au quotidien.",
    "member1Role": "Directeur Marketing",
    "member1Bio": "Expert en stratégie de développement et relations publiques.",
    "member2Role": "Directrice de la Tontine",
    "member2Bio": "Plus de 15 ans d'expérience dans l'organisation de l'épargne communautaire.",
    "member3Role": "Directeur de l'Épargne",
    "member3Bio": "Spécialiste en gestion des risques et produits financiers.",
    "member4Role": "Directeur des Opérations",
    "member4Bio": "Garant de l'efficacité de notre réseau d'agences."
}
gov_en = {
    "badge": "Our Team",
    "title": "Governance",
    "desc": "An experienced and dedicated leadership team, working every day to provide the best financial services to our communities.",
    "dgWord": "A Message from the General Director",
    "dgQuote1": "\"Since SPEC OIC-Togo was established in 2002, our mission has remained unchanged: to fight precariousness by promoting financial inclusion of vulnerable populations, small farmers, and artisans.",
    "dgQuote2": "Today, with more than 64,000 active members, we are proud to see the fruits of our daily commitment. But our work is not over. We continue to innovate to offer you ever more adapted and secure services.\"",
    "dgTitle": "General Director",
    "committeeTitle": "Management Committee",
    "committeeDesc": "Experts in their respective fields who steer the strategy and operations of the institution on a daily basis.",
    "member1Role": "Marketing Director",
    "member1Bio": "Expert in development strategy and public relations.",
    "member2Role": "Tontine Director",
    "member2Bio": "Over 15 years of experience in organizing community savings.",
    "member3Role": "Savings Director",
    "member3Bio": "Specialist in risk management and financial products.",
    "member4Role": "Operations Director",
    "member4Bio": "Responsible for the efficiency of our branch network."
}

# Simulateur keys
sim_fr = {
    "title": "Simulez votre",
    "titleHighlight": "Avenir Financier",
    "desc": "Planifiez votre avenir en toute sérénité. Que vous ayez besoin d'un financement pour votre projet ou que vous souhaitiez faire fructifier votre argent, notre outil vous donne une estimation immédiate."
}
sim_en = {
    "title": "Simulate your",
    "titleHighlight": "Financial Future",
    "desc": "Plan your future with peace of mind. Whether you need financing for your project or want to grow your money, our tool gives you an immediate estimate."
}

# Tarifs keys
tar_fr = {
    "badge": "Transparence",
    "title": "Notre Grille Tarifaire",
    "desc": "À la SPEC OIC-Togo, nous croyons en une tarification juste et transparente. Retrouvez ci-dessous les conditions tarifaires de nos principaux services.",
    "downloadBtn": "Télécharger la grille complète (PDF)",
    "tableService": "Service ou Opération",
    "tableCost": "Tarification TTC",
    "disclaimer": "Cette grille tarifaire est donnée à titre indicatif et peut être soumise à modification. Pour les conditions exactes et détaillées, notamment sur les taux d'intérêts de crédit, veuillez vous rapprocher de votre conseiller en agence.",
    "fee1s": "Ouverture de compte (Épargne)",
    "fee1c": "Gratuit",
    "fee2s": "Ouverture de compte (Tontine)",
    "fee2c": "Gratuit",
    "fee3s": "Frais de tenue de compte annuel",
    "fee3c": "1 500 FCFA",
    "fee4s": "Dépôt en agence",
    "fee4c": "Gratuit",
    "fee5s": "Retrait en agence",
    "fee5c": "Gratuit",
    "fee6s": "Frais d'étude de dossier (Crédit)",
    "fee6c": "2% du montant demandé",
    "fee7s": "Assurance crédit",
    "fee7c": "Variable selon la durée",
    "fee8s": "Relevé de compte (1 par mois)",
    "fee8c": "Gratuit",
    "fee9s": "Relevé de compte supplémentaire",
    "fee9c": "500 FCFA / page"
}
tar_en = {
    "badge": "Transparency",
    "title": "Our Fee Schedule",
    "desc": "At SPEC OIC-Togo, we believe in fair and transparent pricing. Find below the pricing conditions for our main services.",
    "downloadBtn": "Download the complete schedule (PDF)",
    "tableService": "Service or Operation",
    "tableCost": "Pricing (incl. taxes)",
    "disclaimer": "This fee schedule is provided for information purposes and may be subject to change. For exact and detailed conditions, particularly regarding credit interest rates, please contact your branch advisor.",
    "fee1s": "Account opening (Savings)",
    "fee1c": "Free",
    "fee2s": "Account opening (Tontine)",
    "fee2c": "Free",
    "fee3s": "Annual account maintenance fee",
    "fee3c": "1,500 FCFA",
    "fee4s": "Deposit at branch",
    "fee4c": "Free",
    "fee5s": "Withdrawal at branch",
    "fee5c": "Free",
    "fee6s": "Credit application fee",
    "fee6c": "2% of the requested amount",
    "fee7s": "Credit insurance",
    "fee7c": "Variable by duration",
    "fee8s": "Account statement (1 per month)",
    "fee8c": "Free",
    "fee9s": "Additional account statement",
    "fee9c": "500 FCFA / page"
}

for filepath, is_fr in [("messages/fr.json", True), ("messages/en.json", False)]:
    update_json(filepath, "FAQ", faq_fr, faq_en, is_fr)
    update_json(filepath, "Gouvernance", gov_fr, gov_en, is_fr)
    update_json(filepath, "Simulateur", sim_fr, sim_en, is_fr)
    update_json(filepath, "Tarifs", tar_fr, tar_en, is_fr)

print("Updated FAQ, Gouvernance, Simulateur, Tarifs keys")
