import json

new_desc1_fr = "La SPEC OIC-Togo est née du programme PARAT (Programme de Revenu de l'Agriculteur Togolais), initié au sein de l'ONG OIC-Togo avec le soutien de l'USAID. Une partie des financements PARAT a servi de fonds de dotation initial. Après une phase d'incubation de 17 mois par l'OIC, appuyée par la microfinance WAGES (issue du Sommet international du Caire), la SPEC a démarré ses activités de manière indépendante en octobre 2002. Depuis, elle s'est imposée comme un partenaire de confiance."

new_desc1_en = "SPEC OIC-Togo was born from the PARAT program (Togolese Farmer Income Program), initiated within the NGO OIC-Togo with support from USAID. A portion of PARAT funding served as the initial endowment fund. After a 17-month incubation phase by OIC, supported by the microfinance institution WAGES (born from the Cairo International Summit), SPEC launched its independent operations in October 2002. Since then, it has established itself as a trusted partner."

patches = {
    'fr': new_desc1_fr,
    'en': new_desc1_en
}

for lang, desc in patches.items():
    path = f'messages/{lang}.json'
    with open(path, 'r', encoding='utf-8') as f:
        d = json.load(f)
    
    d['About']['desc1'] = desc
    
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(d, f, ensure_ascii=False, indent=2)
    print(f'Updated desc1 in {lang}.json')
