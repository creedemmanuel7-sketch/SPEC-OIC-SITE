import json

def add_contact_keys(filepath, is_fr=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "ContactPage" not in data:
        data["ContactPage"] = {}
        
    c = data["ContactPage"]
    if is_fr:
        c["home"] = "Accueil"
        c["contact"] = "Contact"
        c["title"] = "Contactez-nous"
        c["desc"] = "Notre équipe est à votre disposition pour vous accompagner dans vos projets d'épargne et de crédit."
        c["successTitle"] = "Message envoyé avec succès !"
        c["successDesc"] = "Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais."
        c["formTitle"] = "Envoyez-nous un message"
        c["name"] = "Nom complet"
        c["phone"] = "Numéro de téléphone"
        c["email"] = "Adresse email"
        c["subject"] = "Sujet"
        c["subjectCredit"] = "Demande de crédit"
        c["subjectSavings"] = "Ouverture de compte / Épargne"
        c["subjectPartnership"] = "Partenariat"
        c["subjectOther"] = "Autre demande"
        c["message"] = "Votre message"
        c["messagePlaceholder"] = "Comment pouvons-nous vous aider ?"
        c["sending"] = "Envoi en cours..."
        c["sendBtn"] = "Envoyer le message"
        c["infoTitle"] = "Informations"
        c["hq"] = "Siège Social"
        c["hqAddress"] = "Tegbé, BP 106<br />Notsè, Togo"
        c["phoneLabel"] = "Téléphone"
        c["emailLabel"] = "Email"
        c["hoursLabel"] = "Horaires d'ouverture"
        c["hoursDesc"] = "Lundi au Vendredi<br />07h30 - 12h30<br />14h30 - 17h30"
    else:
        c["home"] = "Home"
        c["contact"] = "Contact"
        c["title"] = "Contact us"
        c["desc"] = "Our team is at your disposal to support you in your savings and credit projects."
        c["successTitle"] = "Message sent successfully!"
        c["successDesc"] = "We have received your request and will respond as soon as possible."
        c["formTitle"] = "Send us a message"
        c["name"] = "Full Name"
        c["phone"] = "Phone Number"
        c["email"] = "Email address"
        c["subject"] = "Subject"
        c["subjectCredit"] = "Credit Request"
        c["subjectSavings"] = "Account Opening / Savings"
        c["subjectPartnership"] = "Partnership"
        c["subjectOther"] = "Other Request"
        c["message"] = "Your message"
        c["messagePlaceholder"] = "How can we help you?"
        c["sending"] = "Sending..."
        c["sendBtn"] = "Send message"
        c["infoTitle"] = "Information"
        c["hq"] = "Headquarters"
        c["hqAddress"] = "Tegbé, BP 106<br />Notsè, Togo"
        c["phoneLabel"] = "Phone"
        c["emailLabel"] = "Email"
        c["hoursLabel"] = "Opening hours"
        c["hoursDesc"] = "Monday to Friday<br />07:30 AM - 12:30 PM<br />02:30 PM - 05:30 PM"

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

add_contact_keys("messages/fr.json", True)
add_contact_keys("messages/en.json", False)
print("Updated Contact keys")
