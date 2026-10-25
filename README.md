# AtelierPlaces — base initiale du TP final J3

AtelierPlaces gère les réservations à de petits ateliers internes. La base est **volontairement imparfaite** : des tests existants passent, mais des situations réelles ne sont pas couvertes.

## Démarrage sans installation de dépendances

Depuis ce dossier (celui qui contient `package.json`) :

```bash
node --version
npm test
php php/tests/summary_test.php
```

`npm test` repose sur le module de test intégré à Node.js (Node 20 ou plus récent). Le test PHP nécessite PHP 8.1 ou plus récent. Si PHP n'est pas disponible, le signaler dans la description de la PR sans prétendre l'avoir exécuté.

## Fonctions disponibles

- `createWorkshop(title, capacity)` : crée un atelier ou renvoie `null`.
- `register(workshopId, participantName)` : inscrit une personne, renvoie un booléen.
- `cancel(workshopId, participantName)` : désinscrit une personne, renvoie un booléen.
- `getWorkshop(id)` : renvoie une copie des informations ou `null`.
- `listWorkshops()` : renvoie une liste de copies.
- `remainingSeats(id)` : renvoie le nombre de places restantes ou `null`.
- `resetForTests()` : réinitialise les données pour les tests uniquement.

Pour les **règles attendues du TP**, lire `../01_ENONCE_TP_FINAL_J3.md`. Les tests initiaux ne décrivent pas tous les cas limites.

## Outils facultatifs

Les scripts `npm run lint` et `npm run format:check` nécessitent les outils installés (`npm install` ou `npm ci` si un verrou de dépendances existe). Ils ne sont **pas requis** pour exécuter les tests natifs. Ne pas modifier des dizaines de lignes de style pendant un TP de corrections ciblées.

## Règles métier vérifiées

_A compléter lors du TP : expliquer précisément les règles que les nouvelles vérifications démontrent, avec leurs tests._
