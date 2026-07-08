import json

def add_prod_serv_keys(filepath, is_fr=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "ProductsPage" not in data: data["ProductsPage"] = {}
    if "ServicesPage" not in data: data["ServicesPage"] = {}
        
    p = data["ProductsPage"]
    if is_fr:
        p["badge"] = "Nos Offres"
        p["title"] = "Produits et Services"
        p["desc"] = "Des solutions financières pensées pour vous, que vous souhaitiez sécuriser votre argent, financer un projet agricole ou développer votre commerce."
        p["epargneTitle"] = "Épargne"
        p["epargneDesc"] = "Des solutions d'épargne sécurisées et flexibles pour constituer un capital à votre rythme et préparer l'avenir sereinement."
        p["epargneF1"] = "Ouverture de compte rapide (dès 5 000 FCFA)"
        p["epargneF2"] = "Rémunération attractive selon le type d'épargne"
        p["epargneF3"] = "Épargne bloquée ou disponible à tout moment"
        p["epargneF4"] = "Pas de frais de tenue de compte mensuels"
        p["creditTitle"] = "Crédit"
        p["creditDesc"] = "Des financements adaptés à vos projets, que vous soyez agriculteur, commerçant, ou artisan. Nous vous accompagnons."
        p["creditF1"] = "Crédit Agricole (Campagne, équipement)"
        p["creditF2"] = "Crédit Commercial & Artisanat"
        p["creditF3"] = "Étude de dossier rapide"
        p["creditF4"] = "Taux d'intérêt compétitifs et transparents"
        p["creditF5"] = "Accompagnement personnalisé par nos conseillers"
        p["tontineTitle"] = "Tontine (Épargne Journalière)"
        p["tontineDesc"] = "Une collecte de proximité directement sur votre lieu d'activité pour vous faciliter l'épargne au quotidien sans vous déplacer."
        p["tontineF1"] = "Collecte journalière sur le marché ou en boutique"
        p["tontineF2"] = "Montant de cotisation libre"
        p["tontineF3"] = "Sécurité totale de vos fonds"
        p["tontineF4"] = "Accès facilité au micro-crédit après 3 mois"
        p["learnMore"] = "En savoir plus ou souscrire"
        p["needAdvice"] = "Besoin de conseils ?"
        p["adviceDesc"] = "Nos conseillers clientèle sont à votre disposition dans nos 13 agences pour vous orienter vers la solution la plus adaptée à vos besoins."
        p["findAgency"] = "Trouver une agence"
    else:
        p["badge"] = "Our Offers"
        p["title"] = "Products and Services"
        p["desc"] = "Financial solutions designed for you, whether you want to secure your money, finance an agricultural project, or grow your business."
        p["epargneTitle"] = "Savings"
        p["epargneDesc"] = "Secure and flexible savings solutions to build capital at your own pace and prepare for the future with peace of mind."
        p["epargneF1"] = "Quick account opening (from 5,000 FCFA)"
        p["epargneF2"] = "Attractive remuneration depending on the type of savings"
        p["epargneF3"] = "Fixed savings or available at any time"
        p["epargneF4"] = "No monthly account maintenance fees"
        p["creditTitle"] = "Credit"
        p["creditDesc"] = "Financing adapted to your projects, whether you are a farmer, merchant, or artisan. We support you."
        p["creditF1"] = "Agricultural Credit (Campaign, equipment)"
        p["creditF2"] = "Commercial & Artisanal Credit"
        p["creditF3"] = "Quick file review"
        p["creditF4"] = "Competitive and transparent interest rates"
        p["creditF5"] = "Personalized support from our advisors"
        p["tontineTitle"] = "Tontine (Daily Savings)"
        p["tontineDesc"] = "A local collection directly at your place of business to facilitate daily savings without you having to travel."
        p["tontineF1"] = "Daily collection in the market or shop"
        p["tontineF2"] = "Free contribution amount"
        p["tontineF3"] = "Total security of your funds"
        p["tontineF4"] = "Easy access to micro-credit after 3 months"
        p["learnMore"] = "Learn more or subscribe"
        p["needAdvice"] = "Need advice?"
        p["adviceDesc"] = "Our customer advisors are at your disposal in our 13 branches to guide you towards the solution best suited to your needs."
        p["findAgency"] = "Find a branch"

    s = data["ServicesPage"]
    if is_fr:
        s["title"] = "Nos Services Financiers"
        s["desc"] = "Des solutions adaptées aux réalités du Togo rural et urbain. Épargne, crédits sur-mesure et transferts d'argent internationaux."
        s["transferTitle"] = "Transfert d'Argent"
        s["transferDesc"] = "Besoin d'envoyer ou de recevoir de l'argent depuis l'étranger ou partout au Togo ? Nos guichets sont équipés pour traiter vos opérations rapidement et en toute sécurité avec nos partenaires."
        s["transfer1"] = "Ria Money Transfer"
        s["transfer2"] = "Wari"
        s["transfer3"] = "Dépôts et Retraits bancaires"
    else:
        s["title"] = "Our Financial Services"
        s["desc"] = "Solutions tailored to the realities of rural and urban Togo. Savings, tailored credits, and international money transfers."
        s["transferTitle"] = "Money Transfer"
        s["transferDesc"] = "Need to send or receive money from abroad or anywhere in Togo? Our counters are equipped to process your transactions quickly and securely with our partners."
        s["transfer1"] = "Ria Money Transfer"
        s["transfer2"] = "Wari"
        s["transfer3"] = "Bank deposits and withdrawals"
        
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

add_prod_serv_keys("messages/fr.json", True)
add_prod_serv_keys("messages/en.json", False)
print("Updated Products/Services keys")
