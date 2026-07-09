# Bilan de Production & Estimations Financières - SPEC OIC-Togo

Ce document résume l'état actuel du projet, ce qui manque pour un lancement officiel à 100%, ainsi que les estimations des coûts d'infrastructure et de la facturation de votre travail.

---

## 1. Ce qui manque fonctionnellement (Gaps Actuels)

Le site a un design premium, mais plusieurs fonctionnalités interactives sont uniquement des interfaces (UI) et n'ont pas encore de logique "Backend" :

- **Formulaire de Contact** : L'interface est prête, mais l'envoi réel de l'email à l'administration de la SPEC n'est pas connecté (nécessite l'intégration d'une API comme Resend ou SendGrid).
- **Ouverture de Compte & Demande de Prêt** : Les formulaires existent, mais les données ne sont pas enregistrées dans une base de données sécurisée, ni transmises par email aux conseillers.
- **Espace Client (My Account)** : L'interface est présente, mais il n'y a pas de système d'authentification (login sécurisé) ni de liaison avec le système bancaire (Core Banking) de la SPEC pour afficher les soldes réels.
- **Actualités et Publications** : Le contenu est "codé en dur" (statique). Il faudrait idéalement un CMS (Content Management System comme Sanity ou Strapi) pour permettre au personnel de la SPEC de publier des articles sans avoir besoin de vous appeler pour modifier le code.
- **Sous-pages Produits** : Le menu déroulant redirige actuellement vers une seule page produit générique. Il faut créer les contenus spécifiques pour "Tontine", "Crédit Solidaire", etc.

## 2. Ce qui manque sécuritairement (Avant lancement)

Une institution de microfinance doit inspirer une confiance absolue. 

- **Protection Anti-Spam (CAPTCHA)** : Il est impératif d'ajouter Google reCAPTCHA ou Cloudflare Turnstile sur les formulaires pour éviter que des robots n'inondent l'email de la SPEC de spams.
- **Sécurité des Données (RGPD / UEMOA)** : Si vous stockez les demandes de prêt (noms, téléphones, montants), elles doivent être chiffrées dans la base de données.
- **Rate Limiting** : Limiter le nombre de requêtes depuis une même adresse IP pour éviter les attaques par déni de service (DDoS) ou le piratage par force brute sur l'Espace Client.

---

## 3. Coûts d'Infrastructure (Ce que la SPEC OIC doit payer pour le site)

Pour que l'entreprise soit professionnelle, elle doit payer certains services en ligne.

### Paiements Annuels
1. **Nom de Domaine Professionnel** (`specoic.tg` ou `specoic.com`) :
   - Un domaine `.tg` coûte généralement entre **15 000 et 30 000 FCFA / an**.
   - Un domaine `.com` coûte environ **10 000 FCFA / an** (environ 15$).
2. **Email Professionnel (ex: contact@specoic.tg)** :
   - Indispensable pour la crédibilité (éviter les adresses `@gmail.com`). Via Google Workspace ou Microsoft 365, cela coûte environ **45 000 FCFA / an** (environ 70$) par adresse email.

### Paiements Mensuels (Hébergement et Services)
1. **Hébergement du site (Vercel)** : 
   - Vous pouvez commencer avec le plan gratuit, mais pour une entreprise, le plan **Vercel Pro (20$ / mois, soit ~12 000 FCFA)** est recommandé pour la sécurité, la rapidité et le support.
2. **Base de données (Supabase / MongoDB)** : 
   - Gratuit au démarrage, puis environ **15 000 FCFA / mois** si le trafic augmente.
3. **API d'envoi d'emails transactionnels (Resend)** :
   - Gratuit jusqu'à 3000 emails/mois (largement suffisant au début).

👉 **Budget Infrastructure Estimé : Environ 100 000 FCFA / an + 15 000 FCFA / mois**.

---

## 4. Facturation de votre Travail (Ce que l'institution doit VOUS payer)

Votre travail sur ce projet est d'une qualité **Premium**. Vous n'avez pas utilisé un simple template WordPress : vous avez construit une application web complète (Next.js 15, Tailwind, multilingue, mode sombre, ultra-rapide). Vous devez valoriser cette expertise technique.

### A. Création du Site (Paiement en une fois)
Pour la conception UI/UX, le développement frontend, l'intégration des animations, du multilinguisme et du mode sombre :
- **Prix marché bas (Au Togo/Région)** : 500 000 FCFA.
- **Prix recommandé (Juste valeur pour une institution financière)** : **800 000 FCFA à 1 500 000 FCFA**.
*Conseil : Ne descendez pas en dessous de 500 000 FCFA. C'est une institution financière, l'image de marque que vous leur offrez a une très grande valeur commerciale.*

### B. Contrat de Maintenance & Mise à jour (Paiement mensuel ou annuel)
Une fois le site en ligne, il faudra le surveiller, le mettre à jour, résoudre les bugs, et publier les actualités qu'ils vous enverront.
- **Forfait de Base (Hébergement technique, sécurité, sauvegardes)** : **30 000 FCFA à 50 000 FCFA / mois**. (Soit ~400 000 FCFA/an).
- **Forfait Avancé (Mises à jour des textes, ajout d'actualités, création de nouvelles pages produits)** : **75 000 FCFA à 100 000 FCFA / mois**.

### C. Évolutions Futures (Devis supplémentaires)
Si dans 6 mois ils veulent activer l'Espace Client (connexion aux comptes bancaires) ou intégrer le paiement par TMoney/Flooz, cela ne fait pas partie du contrat de base. Vous devrez facturer cela comme une nouvelle application (ex: + 1 000 000 FCFA pour un portail bancaire sécurisé).

---

## Conclusion pour les prochaines étapes
Pour finaliser le site avant la présentation finale à l'institution, je vous recommande :
1. De terminer les sous-pages Produits (textes et images).
2. De configurer l'envoi d'email pour que le formulaire de contact fonctionne.
3. De créer une interface d'attente ("Bientôt disponible") pour l'Espace Client, car le relier au système bancaire est un projet informatique lourd qui nécessite la collaboration de leur département informatique.
