import json

def deep_keys(d, prefix=""):
    keys = []
    for k, v in d.items():
        full = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            keys.extend(deep_keys(v, full))
        else:
            keys.append(full)
    return keys

with open('messages/en.json', encoding='utf-8') as f:
    en = json.load(f)
with open('messages/fr.json', encoding='utf-8') as f:
    fr = json.load(f)

en_keys = set(deep_keys(en))
fr_keys = set(deep_keys(fr))

missing_in_en = fr_keys - en_keys
missing_in_fr = en_keys - fr_keys

print("=== Missing in EN (exist in FR but not EN) ===")
for k in sorted(missing_in_en):
    print(f"  {k}")

print("\n=== Missing in FR (exist in EN but not FR) ===")
for k in sorted(missing_in_fr):
    print(f"  {k}")
