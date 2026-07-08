import json

def add_pret_keys(filepath, is_fr=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "LoanRequest" not in data:
        data["LoanRequest"] = {}
        
    c = data["LoanRequest"]
    if is_fr:
        c["heroTitle"] = "Demande de Crédit"
        c["heroDesc"] = "Remplissez ce formulaire pour initier votre demande. Un agent vous contactera sous 48h."
        c["successTitle"] = "Demande envoyée !"
        c["successDesc"] = "Votre demande de crédit a été transmise avec succès à notre équipe. Un chargé de clientèle vous contactera sous 48h pour analyser votre dossier."
        c["backHome"] = "Retour à l'accueil"
        c["section1"] = "1. Informations Personnelles"
        c["nameLabel"] = "Nom et Prénoms *"
        c["phoneLabel"] = "Téléphone (WhatsApp de préférence) *"
        c["cityLabel"] = "Ville / Localité *"
        c["agencyLabel"] = "Agence SPEC la plus proche *"
        c["agencyPlaceholder"] = "Sélectionnez une agence..."
        c["section2"] = "2. Votre Projet"
        c["amountLabel"] = "Montant souhaité (FCFA) *"
        c["durationLabel"] = "Durée de remboursement (Mois) *"
        c["creditTypeLabel"] = "Type de Crédit *"
        c["creditTypePlaceholder"] = "Sélectionnez le type de crédit..."
        c["creditType1"] = "Crédit Agricole (Campagne, Matériel)"
        c["creditType2"] = "Crédit Commercial (Stock, Boutique)"
        c["creditType3"] = "Crédit Tontine / Prépayé"
        c["creditType4"] = "Crédit Artisanat"
        c["descriptionLabel"] = "Description brève de l'activité ou du projet *"
        c["descriptionPlaceholder"] = "Ex: Achat d'intrants pour 2 hectares de maïs..."
        c["noteLabel"] = "Note :"
        c["noteText"] = "Cette demande en ligne est une pré-qualification. L'octroi du crédit est soumis à l'étude approfondie de votre dossier par le comité de crédit et à l'ouverture d'un compte (si non membre)."
        c["submitting"] = "Traitement en cours..."
        c["submitBtn"] = "Soumettre la demande"
    else:
        c["heroTitle"] = "Credit Request"
        c["heroDesc"] = "Fill out this form to initiate your request. An agent will contact you within 48 hours."
        c["successTitle"] = "Request sent!"
        c["successDesc"] = "Your credit request has been successfully submitted to our team. A customer relationship manager will contact you within 48 hours to review your file."
        c["backHome"] = "Back to home"
        c["section1"] = "1. Personal Information"
        c["nameLabel"] = "First and Last Name *"
        c["phoneLabel"] = "Phone (WhatsApp preferred) *"
        c["cityLabel"] = "City / Locality *"
        c["agencyLabel"] = "Nearest SPEC Branch *"
        c["agencyPlaceholder"] = "Select a branch..."
        c["section2"] = "2. Your Project"
        c["amountLabel"] = "Requested Amount (FCFA) *"
        c["durationLabel"] = "Repayment Duration (Months) *"
        c["creditTypeLabel"] = "Credit Type *"
        c["creditTypePlaceholder"] = "Select the credit type..."
        c["creditType1"] = "Agricultural Credit (Campaign, Equipment)"
        c["creditType2"] = "Commercial Credit (Stock, Shop)"
        c["creditType3"] = "Tontine / Prepaid Credit"
        c["creditType4"] = "Artisanal Credit"
        c["descriptionLabel"] = "Brief description of the activity or project *"
        c["descriptionPlaceholder"] = "E.g: Purchase of inputs for 2 hectares of maize..."
        c["noteLabel"] = "Note:"
        c["noteText"] = "This online request is a pre-qualification. Credit approval is subject to an in-depth review of your file by the credit committee and to opening an account (if not yet a member)."
        c["submitting"] = "Processing..."
        c["submitBtn"] = "Submit request"

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

add_pret_keys("messages/fr.json", True)
add_pret_keys("messages/en.json", False)
print("Updated LoanRequest keys")
