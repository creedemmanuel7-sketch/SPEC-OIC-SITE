import json

def update(filepath, section, data):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = json.load(f)
    content[section] = data
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)

# Patch: add missing keys to OpenAccount (badge text) and LoanRequest (duration options)
patch_fr = {
    "OpenAccount": {
        "badge": "Onboarding"
    },
    "LoanRequest": {
        "duration6m": "6 mois",
        "duration12m": "12 mois",
        "duration18m": "18 mois",
        "duration24m": "24 mois",
        "duration36m": "36 mois"
    }
}

patch_en = {
    "OpenAccount": {
        "badge": "Onboarding"
    },
    "LoanRequest": {
        "duration6m": "6 months",
        "duration12m": "12 months",
        "duration18m": "18 months",
        "duration24m": "24 months",
        "duration36m": "36 months"
    }
}

for filepath, patch in [("messages/fr.json", patch_fr), ("messages/en.json", patch_en)]:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = json.load(f)
    for section, keys in patch.items():
        content[section].update(keys)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
    print(f"Patched {filepath}")

print("Done!")
