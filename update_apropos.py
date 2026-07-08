import json

def add_apropos_keys(filepath, is_fr=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if "AboutPage" not in data:
        data["AboutPage"] = {}
        
    c = data["AboutPage"]
    if is_fr:
        c["heroTitle"] = "Notre Institution"
        c["heroDesc"] = "Plus de deux décennies d'engagement pour l'inclusion financière au Togo. De notre héritage avec l'OIC jusqu'à notre transition en coopérative prévue pour 2027."
        c["missionVisionTitle"] = "Notre Mission & Notre Vision"
        c["missionTitle"] = "La Mission"
        c["missionDesc"] = "Offrir des services financiers de proximité, accessibles et adaptés aux populations exclues du système bancaire classique, en particulier les agriculteurs et les femmes entrepreneures, afin de favoriser la création de richesses et la réduction de la pauvreté."
        c["visionTitle"] = "La Vision"
        c["visionDesc"] = "Devenir l'institution de microfinance coopérative de référence au Togo d'ici 2027, reconnue pour son innovation, sa transparence et son impact durable sur le développement socio-économique de ses membres."
        c["teamTitle"] = "Notre Équipe Dirigeante"
        c["teamDesc"] = "Une gouvernance solide et expérimentée, au service de l'inclusion financière. Découvrez les femmes et les hommes qui pilotent la SPEC OIC-Togo au quotidien."
        c["teamBtn"] = "Découvrir notre équipe de Direction"
    else:
        c["heroTitle"] = "Our Institution"
        c["heroDesc"] = "More than two decades of commitment to financial inclusion in Togo. From our heritage with OIC to our cooperative transition planned for 2027."
        c["missionVisionTitle"] = "Our Mission & Vision"
        c["missionTitle"] = "The Mission"
        c["missionDesc"] = "Offer accessible, local financial services tailored to populations excluded from the traditional banking system, particularly farmers and women entrepreneurs, to foster wealth creation and poverty reduction."
        c["visionTitle"] = "The Vision"
        c["visionDesc"] = "Become the reference cooperative microfinance institution in Togo by 2027, recognized for its innovation, transparency, and sustainable impact on the socio-economic development of its members."
        c["teamTitle"] = "Our Leadership Team"
        c["teamDesc"] = "Solid and experienced governance, serving financial inclusion. Discover the women and men who steer SPEC OIC-Togo every day."
        c["teamBtn"] = "Discover our Management team"

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

add_apropos_keys("messages/fr.json", True)
add_apropos_keys("messages/en.json", False)
print("Updated Apropos keys")
