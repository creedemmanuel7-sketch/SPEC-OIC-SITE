import json

def update(filepath, data):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = json.load(f)
    
    if "Navigation" not in content:
        content["Navigation"] = {}
        
    for k, v in data.items():
        content["Navigation"][k] = v
        
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)

nav_fr = {
    "prod_savings": "Épargne Classique",
    "prod_tontine": "Tontine",
    "prod_credit_solidaire": "Crédit Solidaire",
    "prod_credit_individuel": "Crédit Individuel",
    "prod_transfers": "Transferts d'argent",
    "prod_commercial": "Compte Courant Commercial",
    "prod_agri": "Crédit Agricole",
    "prod_term": "Dépôt à Terme"
}

nav_en = {
    "prod_savings": "Regular Savings",
    "prod_tontine": "Tontine",
    "prod_credit_solidaire": "Solidarity Credit",
    "prod_credit_individuel": "Individual Credit",
    "prod_transfers": "Money Transfers",
    "prod_commercial": "Commercial Checking Account",
    "prod_agri": "Agricultural Credit",
    "prod_term": "Term Deposit"
}

update("messages/fr.json", nav_fr)
update("messages/en.json", nav_en)
print("Done!")
