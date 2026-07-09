import json

patches = {
    'fr': {
        'errorSubmit': "Erreur lors de l'envoi de la demande. Veuillez réessayer.",
        'errorConn': 'Erreur réseau. Veuillez vérifier votre connexion.'
    },
    'en': {
        'errorSubmit': 'An error occurred while submitting. Please try again.',
        'errorConn': 'Network error. Please check your connection.'
    }
}

for lang, keys in patches.items():
    path = f'messages/{lang}.json'
    with open(path, encoding='utf-8') as f:
        d = json.load(f)
    d['LoanRequest'].update(keys)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(d, f, ensure_ascii=False, indent=2)
    print(f'Updated {path}')

print("Done!")
