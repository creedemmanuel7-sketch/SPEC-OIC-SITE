import json

def update(filepath, section, fr_data, en_data):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    if section not in data:
        data[section] = {}
    data[section].update(fr_data if filepath.endswith('fr.json') else en_data)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

calc_fr = {
    "sectionTitle": "Simulez votre projet",
    "sectionDesc": "Estimez vos remboursements de crédit ou calculez vos revenus d'épargne en quelques clics.",
    "tabCredit": "Crédit",
    "tabSavings": "Épargne",
    "amountBorrow": "Montant emprunté",
    "monthlyDeposit": "Dépôt mensuel",
    "duration": "Durée",
    "months": "Mois",
    "estimatedMonthly": "Mensualité estimée",
    "projectedCapital": "Capital projeté",
    "estimatedRate": "Taux d'intérêt estimé:",
    "totalToRepay": "Total à rembourser:",
    "totalDeposits": "Dépôts totaux:",
    "savingsDuration": "Durée de l'épargne:",
    "month": "mois",
    "requestCredit": "Demander ce crédit",
    "openAccount": "Ouvrir un compte",
    "disclaimer": "* Simulation à titre indicatif. Les conditions réelles peuvent varier."
}
calc_en = {
    "sectionTitle": "Simulate your project",
    "sectionDesc": "Estimate your credit repayments or calculate your savings returns in a few clicks.",
    "tabCredit": "Credit",
    "tabSavings": "Savings",
    "amountBorrow": "Amount borrowed",
    "monthlyDeposit": "Monthly deposit",
    "duration": "Duration",
    "months": "Months",
    "estimatedMonthly": "Estimated monthly payment",
    "projectedCapital": "Projected capital",
    "estimatedRate": "Estimated interest rate:",
    "totalToRepay": "Total to repay:",
    "totalDeposits": "Total deposits:",
    "savingsDuration": "Savings duration:",
    "month": "months",
    "requestCredit": "Request this credit",
    "openAccount": "Open an account",
    "disclaimer": "* Simulation for informational purposes. Actual conditions may vary."
}

actu_fr = {
    "title": "Actualités &",
    "titleHighlight": "Éducation Financière",
    "desc": "Suivez les dernières nouvelles de la SPEC OIC-Togo, nos conseils de gestion financière, et l'impact de nos actions sur le terrain.",
    "readMore": "Lire la suite",
    "loadMore": "Charger plus d'articles",
    "art1Title": "Lancement de la Campagne Agricole 2026",
    "art1Excerpt": "La SPEC OIC-Togo accompagne plus de 500 agriculteurs de la région des Plateaux pour la nouvelle saison. Découvrez nos offres de crédit de campagne.",
    "art1Date": "15 Juin 2026",
    "art1Cat": "Institution",
    "art1Author": "La Direction",
    "art2Title": "5 astuces pour bien gérer son épargne Tontine",
    "art2Excerpt": "La tontine est un excellent moyen d'économiser, mais savez-vous comment optimiser vos cotisations pour réaliser vos projets ? Nos conseils pratiques.",
    "art2Date": "02 Juin 2026",
    "art2Cat": "Éducation Financière",
    "art2Author": "Service Client",
    "art3Title": "Modernisation de nos services et Guichet Mobile",
    "art3Excerpt": "Dans le cadre de sa transition, la SPEC déploie de nouveaux outils pour faciliter vos dépôts et retraits. Focus sur le projet Mobile Money.",
    "art3Date": "20 Mai 2026",
    "art3Cat": "Innovation",
    "art3Author": "Équipe IT"
}
actu_en = {
    "title": "News &",
    "titleHighlight": "Financial Education",
    "desc": "Follow the latest news from SPEC OIC-Togo, our financial management tips, and the impact of our actions on the ground.",
    "readMore": "Read more",
    "loadMore": "Load more articles",
    "art1Title": "Launch of the 2026 Agricultural Campaign",
    "art1Excerpt": "SPEC OIC-Togo is supporting over 500 farmers in the Plateaux region for the new season. Discover our campaign credit offers.",
    "art1Date": "June 15, 2026",
    "art1Cat": "Institution",
    "art1Author": "Management",
    "art2Title": "5 tips for managing your Tontine savings",
    "art2Excerpt": "Tontine is an excellent way to save, but do you know how to optimize your contributions to achieve your goals? Our practical tips.",
    "art2Date": "June 2, 2026",
    "art2Cat": "Financial Education",
    "art2Author": "Customer Service",
    "art3Title": "Modernization of our services and Mobile Counter",
    "art3Excerpt": "As part of its transition, SPEC is deploying new tools to facilitate your deposits and withdrawals. Focus on the Mobile Money project.",
    "art3Date": "May 20, 2026",
    "art3Cat": "Innovation",
    "art3Author": "IT Team"
}

espace_fr = {
    "backHome": "Retour à l'accueil",
    "title": "Espace Membre",
    "desc": "Connectez-vous pour gérer votre épargne et suivre vos crédits.",
    "comingSoon": "Bientôt disponible",
    "deployDesc": "Notre nouveau portail de digitalisation est en cours de déploiement.",
    "idLabel": "Identifiant",
    "idPlaceholder": "Votre numéro de membre",
    "passLabel": "Mot de passe",
    "loginBtn": "Se connecter",
    "futureServices": "Nos futurs services en ligne",
    "mobileMoney": "Mobile Money",
    "secure": "100% Sécurisé"
}
espace_en = {
    "backHome": "Back to home",
    "title": "Member Area",
    "desc": "Log in to manage your savings and track your credits.",
    "comingSoon": "Coming soon",
    "deployDesc": "Our new digitalization portal is being deployed.",
    "idLabel": "Username",
    "idPlaceholder": "Your member number",
    "passLabel": "Password",
    "loginBtn": "Log in",
    "futureServices": "Our future online services",
    "mobileMoney": "Mobile Money",
    "secure": "100% Secure"
}

pub_fr = {
    "title": "Transparence &",
    "titleHighlight": "Publications",
    "desc": "La confiance se bâtit par la clarté. Accédez à nos rapports financiers et nos textes réglementaires en toute transparence.",
    "cat1": "Rapports Annuels",
    "cat2": "Textes & Règlements",
    "publishedIn": "Publié en",
    "download": "Télécharger",
    "infoNote": "Ces documents sont mis à votre disposition à titre consultatif. Pour toute question concernant nos rapports ou nos statuts, n'hésitez pas à contacter la Direction Générale via notre",
    "contactFormLink": "formulaire de contact",
    "doc1Title": "Rapport Annuel d'Activités 2024",
    "doc1Date": "Janvier 2025",
    "doc2Title": "États Financiers Audités 2024",
    "doc2Date": "Mars 2025",
    "doc3Title": "Rapport Annuel d'Activités 2023",
    "doc3Date": "Janvier 2024",
    "doc4Title": "Statuts de la Coopérative SPEC OIC-Togo",
    "doc4Date": "Octobre 2002",
    "doc5Title": "Règlement Intérieur",
    "doc5Date": "Mis à jour en 2020",
    "doc6Title": "Code d'Éthique et de Déontologie",
    "doc6Date": "Février 2018"
}
pub_en = {
    "title": "Transparency &",
    "titleHighlight": "Publications",
    "desc": "Trust is built on clarity. Access our financial reports and regulatory texts in full transparency.",
    "cat1": "Annual Reports",
    "cat2": "Texts & Regulations",
    "publishedIn": "Published in",
    "download": "Download",
    "infoNote": "These documents are provided for informational purposes. For any questions about our reports or statutes, please contact the General Directorate via our",
    "contactFormLink": "contact form",
    "doc1Title": "2024 Annual Activity Report",
    "doc1Date": "January 2025",
    "doc2Title": "2024 Audited Financial Statements",
    "doc2Date": "March 2025",
    "doc3Title": "2023 Annual Activity Report",
    "doc3Date": "January 2024",
    "doc4Title": "SPEC OIC-Togo Cooperative Statutes",
    "doc4Date": "October 2002",
    "doc5Title": "Internal Regulations",
    "doc5Date": "Updated in 2020",
    "doc6Title": "Code of Ethics and Professional Conduct",
    "doc6Date": "February 2018"
}

for fp in ["messages/fr.json", "messages/en.json"]:
    update(fp, "Calculator", calc_fr, calc_en)
    update(fp, "Actualites", actu_fr, actu_en)
    update(fp, "EspaceClient", espace_fr, espace_en)
    update(fp, "Publications", pub_fr, pub_en)

print("Done!")
