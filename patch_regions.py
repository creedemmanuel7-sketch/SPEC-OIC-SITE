import json

patches_fr = {
    'About': {
        'desc2': "Notre réseau s'étend à travers la région des Plateaux et en partie dans la région Maritime, avec pour mission principale l'amélioration continue des conditions de vie de nos membres à travers des services financiers adaptés, accessibles et innovants."
    },
    'Network': {
        'desc': '3 agences et <strong>13 guichets</strong> pour vous servir au plus près dans la région des Plateaux et en partie dans la région Maritime.'
    }
}

patches_en = {
    'About': {
        'desc2': "Our network extends across the Plateaux region and partially in the Maritime region, with the main mission of continuously improving our members' living conditions through tailored, accessible, and innovative financial services."
    },
    'Network': {
        'desc': '3 branches and <strong>13 counters</strong> to serve you as closely as possible in the Plateaux region and partially in the Maritime region.'
    }
}

for lang, patches in [('fr', patches_fr), ('en', patches_en)]:
    path = f'messages/{lang}.json'
    with open(path, 'r', encoding='utf-8') as f:
        d = json.load(f)
    for k, v in patches.items():
        d[k].update(v)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(d, f, ensure_ascii=False, indent=2)
    print(f'Updated {path}')
