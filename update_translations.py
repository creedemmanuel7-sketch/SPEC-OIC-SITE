import json

def update_json(filepath, updates):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Update Impact
    data["Impact"] = updates["Impact"]
    data["About"] = updates["About"]
    data["Network"] = updates["Network"]
    data["Testimonials"] = updates["Testimonials"]
    data["CTA"] = updates["CTA"]

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

fr_updates = {
  "Impact": {
    "title": "Notre Impact depuis 2002",
    "desc": "Des résultats concrets qui témoignent de notre engagement quotidien pour le développement économique du Togo et l'inclusion financière de nos communautés.",
    "metric1": "Milliards FCFA de crédits accordés",
    "metric2": "Membres actifs",
    "metric3": "Guichets au Togo",
    "metric4": "Taux de remboursement"
  },
  "About": {
    "title": "Un acteur majeur de la microfinance au Togo",
    "desc1": "Depuis plus de deux décennies, la SPEC OIC-Togo accompagne les acteurs économiques du secteur formel et informel. Née de l'ONG OIC-Togo, notre institution s'est imposée comme un partenaire de confiance pour des milliers de ménages ruraux et urbains.",
    "desc2": "Notre réseau s'étend à travers les régions des Plateaux et Centrale, avec pour mission principale l'amélioration continue des conditions de vie de nos membres à travers des services financiers adaptés, accessibles et innovants.",
    "list1": "Proximité et accessibilité",
    "list2": "Transparence totale",
    "list3": "Engagement social",
    "cta": "Découvrir notre histoire"
  },
  "Network": {
    "title": "Notre Réseau d'Agences",
    "desc": "13 guichets répartis stratégiquement pour être au plus proche de vos activités.",
    "hq": "Siège Social",
    "hqLocation": "Notsè",
    "branches1": "Région des Plateaux",
    "branches1Desc": "Notsè, Kpalimé, Atakpamé, Badou, Amlamé...",
    "branches2": "Région Centrale",
    "branches2Desc": "Sokodé, Blitta, Sotouboua, Tchamba...",
    "cta": "Voir toutes nos agences"
  },
  "Testimonials": {
    "title": "Ils nous font confiance",
    "desc": "Découvrez les témoignages de nos membres qui ont transformé leurs projets en succès.",
    "quote1": "Grâce au crédit agricole, j'ai pu augmenter ma surface cultivable et mes rendements.",
    "role1": "Agriculteur, Notsè",
    "quote2": "L'accompagnement de la SPEC m'a permis de moderniser ma boutique. Leur proximité fait toute la différence.",
    "role2": "Commerçante, Kpalimé",
    "quote3": "Les solutions d'épargne m'aident à sécuriser l'avenir de ma famille de façon très simple.",
    "role3": "Artisan, Sokodé"
  },
  "CTA": {
    "title": "Prêt à construire votre avenir ?",
    "desc": "Rejoignez une institution solide qui met l'humain au centre de ses priorités financières.",
    "primaryBtn": "Ouvrir un compte",
    "secondaryBtn": "Nous contacter"
  }
}

en_updates = {
  "Impact": {
    "title": "Our Impact since 2002",
    "desc": "Concrete results that testify to our daily commitment to Togo's economic development and the financial inclusion of our communities.",
    "metric1": "Billion FCFA in loans granted",
    "metric2": "Active members",
    "metric3": "Branches in Togo",
    "metric4": "Repayment rate"
  },
  "About": {
    "title": "A major player in microfinance in Togo",
    "desc1": "For over two decades, SPEC OIC-Togo has supported economic actors in the formal and informal sectors. Born from the NGO OIC-Togo, our institution has established itself as a trusted partner for thousands of rural and urban households.",
    "desc2": "Our network extends across the Plateaux and Centrale regions, with the main mission of continuously improving our members' living conditions through tailored, accessible, and innovative financial services.",
    "list1": "Proximity and accessibility",
    "list2": "Full transparency",
    "list3": "Social commitment",
    "cta": "Discover our history"
  },
  "Network": {
    "title": "Our Branch Network",
    "desc": "13 strategically located counters to be as close as possible to your activities.",
    "hq": "Headquarters",
    "hqLocation": "Notsè",
    "branches1": "Plateaux Region",
    "branches1Desc": "Notsè, Kpalimé, Atakpamé, Badou, Amlamé...",
    "branches2": "Centrale Region",
    "branches2Desc": "Sokodé, Blitta, Sotouboua, Tchamba...",
    "cta": "View all our branches"
  },
  "Testimonials": {
    "title": "They trust us",
    "desc": "Discover testimonials from our members who have turned their projects into successes.",
    "quote1": "Thanks to the agricultural loan, I was able to increase my cultivable area and my yields.",
    "role1": "Farmer, Notsè",
    "quote2": "SPEC's support allowed me to modernize my shop. Their proximity makes all the difference.",
    "role2": "Merchant, Kpalimé",
    "quote3": "Savings solutions help me easily secure my family's future.",
    "role3": "Artisan, Sokodé"
  },
  "CTA": {
    "title": "Ready to build your future?",
    "desc": "Join a solid institution that puts people at the center of its financial priorities.",
    "primaryBtn": "Open an account",
    "secondaryBtn": "Contact us"
  }
}

update_json("messages/fr.json", fr_updates)
update_json("messages/en.json", en_updates)
print("Updated accurate translations for both files!")
