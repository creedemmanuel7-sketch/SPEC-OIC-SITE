import json

def add_nav_keys(filepath, is_fr=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "Navigation" not in data:
        data["Navigation"] = {}
        
    nav = data["Navigation"]
    if is_fr:
        nav["products_services"] = "Produits & Services"
        nav["individuals"] = "Particuliers & Pros"
        nav["businesses"] = "Entreprises"
        nav["tools_rates"] = "Outils & Tarifs"
        nav["about_spec"] = "À Propos de la SPEC"
        nav["aboutUs"] = "Qui sommes-nous"
        nav["network"] = "Notre Réseau"
        nav["news"] = "Actualités"
        nav["faq"] = "FAQ"
        
        if "Network" not in data: data["Network"] = {}
        data["Network"]["directions"] = "Itinéraire"
        data["Network"]["guichets"] = "guichets"
        data["Network"]["agency"] = "Agence"
        data["Network"]["underConstruction"] = "En construction"
    else:
        nav["products_services"] = "Products & Services"
        nav["individuals"] = "Individuals & Pros"
        nav["businesses"] = "Businesses"
        nav["tools_rates"] = "Tools & Rates"
        nav["about_spec"] = "About SPEC"
        nav["aboutUs"] = "About Us"
        nav["network"] = "Our Network"
        nav["news"] = "News"
        nav["faq"] = "FAQ"
        
        if "Network" not in data: data["Network"] = {}
        data["Network"]["directions"] = "Directions"
        data["Network"]["guichets"] = "counters"
        data["Network"]["agency"] = "Branch"
        data["Network"]["underConstruction"] = "Under construction"

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

add_nav_keys("messages/fr.json", True)
add_nav_keys("messages/en.json", False)
print("Updated Nav keys")
