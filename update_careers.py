import json

def add_careers_keys(filepath, is_fr=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "Careers" not in data:
        data["Careers"] = {}
        
    c = data["Careers"]
    if is_fr:
        c["badge"] = "Rejoignez-nous"
        c["title"] = "Faites carrière à la SPEC"
        c["desc"] = "Contribuez à une mission qui a du sens. Nous recherchons des talents passionnés par l'inclusion financière et le développement du Togo."
        c["currentOffers"] = "Offres Actuelles"
        c["apply"] = "Postuler à cette offre"
        c["application"] = "Candidature"
        c["applicationDesc"] = "Postulez à une offre ou envoyez une candidature spontanée."
        c["successTitle"] = "Candidature Envoyée !"
        c["successDesc"] = "Notre équipe RH vous recontactera très prochainement."
        c["anotherApplication"] = "Envoyer une autre candidature"
        c["name"] = "Nom complet"
        c["targetJob"] = "Poste visé"
        c["targetJobPlaceholder"] = "Ex: Agent de Crédit ou Spontanée"
        c["cvLink"] = "Lien CV (LinkedIn ou Drive)"
        c["cvHelp"] = "Collez un lien public vers votre CV"
        c["submitBtn"] = "Envoyer ma candidature"
        c["submitting"] = "Envoi en cours..."
        c["job1Title"] = "Agent de Crédit Agricole"
        c["job1Location"] = "Région des Plateaux"
        c["job1Type"] = "Temps Plein"
        c["job1Desc"] = "Accompagnement des groupements paysans dans la constitution des dossiers de crédit et suivi des remboursements post-récolte."
        c["job2Title"] = "Caissier(ère)"
        c["job2Location"] = "Lomé"
        c["job2Type"] = "Temps Plein"
        c["job2Desc"] = "Accueil de la clientèle, opérations de dépôt/retrait et gestion rigoureuse de la caisse quotidienne."
        c["job3Title"] = "Agent de Collecte (Tontine)"
        c["job3Location"] = "Kpalimé"
        c["job3Type"] = "Temps Plein"
        c["job3Desc"] = "Collecte journalière de l'épargne auprès des commerçants du marché central."
    else:
        c["badge"] = "Join us"
        c["title"] = "Build a career at SPEC"
        c["desc"] = "Contribute to a meaningful mission. We are looking for talents passionate about financial inclusion and Togo's development."
        c["currentOffers"] = "Current Offers"
        c["apply"] = "Apply for this job"
        c["application"] = "Application"
        c["applicationDesc"] = "Apply for an offer or send an unsolicited application."
        c["successTitle"] = "Application Sent!"
        c["successDesc"] = "Our HR team will contact you very soon."
        c["anotherApplication"] = "Send another application"
        c["name"] = "Full Name"
        c["targetJob"] = "Targeted Job"
        c["targetJobPlaceholder"] = "E.g: Credit Agent or Unsolicited"
        c["cvLink"] = "CV Link (LinkedIn or Drive)"
        c["cvHelp"] = "Paste a public link to your CV"
        c["submitBtn"] = "Send my application"
        c["submitting"] = "Sending..."
        c["job1Title"] = "Agricultural Credit Agent"
        c["job1Location"] = "Plateaux Region"
        c["job1Type"] = "Full Time"
        c["job1Desc"] = "Supporting farmer groups in preparing credit applications and monitoring post-harvest repayments."
        c["job2Title"] = "Cashier"
        c["job2Location"] = "Lomé"
        c["job2Type"] = "Full Time"
        c["job2Desc"] = "Customer greeting, deposit/withdrawal operations, and rigorous management of the daily cash register."
        c["job3Title"] = "Collection Agent (Tontine)"
        c["job3Location"] = "Kpalimé"
        c["job3Type"] = "Full Time"
        c["job3Desc"] = "Daily collection of savings from merchants in the central market."

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

add_careers_keys("messages/fr.json", True)
add_careers_keys("messages/en.json", False)
print("Updated Careers keys")
