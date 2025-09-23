# Description du déroulement d'une partie

## Initialisation

- Constituer la pioche et la mélanger
- Donner les 2 champs aux joueurs
- Distribuer les cartes aux joueurs

## Deroulement du jeu

Déroulement du tour d'un seul joueur.

### Jeu des haricots

fonction plant()

- Il joue le premier haricot (Obligatoire) :
  -  Soit il a la place ou déjà un champ -> l'haricot s'ajoute sur l'un des champs du joueur (fonction plant)
  -  Sinon il n'a pas la place :
     -  Soit (il a 2 champs à plus que 1) OU (il a 2 champs a exactement 1) -> il peut vendre celui de son choix (gestion d'input whichFieldSell)
     -  Sinon il a 1 champ à 1 et l'autre à plus de 1 -> on vend celui à plus de 1 (pas d'input)
- Il a le choix de jouer le second haricot (Gestion d'input plantAnotherBean):
  - On rappelle la même fonction

### Marchander et cadeau

Le processus étant le même pour les 2 cartes, il ne sera expliciter qu'une seule fois.

- Tirer 2 cartes de la pioche pour les mettre sur la table
- Soit le joueur récupère la carte :
  - même procédé que dans le jeu des haricots (fonction plant)
- Soit le joueur échange (transaction à coder) :
  - Cadeau possible de n'importe quel joueur au joueur qui joue (fonction événementielle disponible que pendant cette partie du jeu)
  - Cadeau possible du joueur aux autres joueurs (transaction simple car 1 seul sens)
  - Soit échange proposé par le joueur en cours (transaction initiée par le joueur)
  - Soit échange proposé par les autres joueurs (transaction initiée par les autres joueurs)
- Ils plantent tous les haricots qu'ils ont échangés (Pour tous les joueurs qui ont participés au transaction choix de la carte à planter puis appelle de plant())

### Piocher les cartes

- appeler draw (attention à l'ordre) -> structure de file ?

## Action disponible à tous moments

### Vendre

- appel à sellField

### Acheter un troisième champ

- verif que le joueur n'a pas déjà un troisième champs et qu'il a assez de gold
- (-3 gold + 1 champ) (attention la logique de plant dois prendre ça en compte)

## Fin d'une pioche

- Si la pioche est finie ou qu'il manque des cartes : on la remplace par la défausse (à mélanger)

--> Check à faire à chaque fois que l'on pioche ou quand on sort les cartes pour le marchandage


## Fin du jeu

Le jeu est fini au bout de la 3e pioche finie

- Si après que le joueur ai pioché à la fin de son tour : Fin du jeu instantanée
- Si c'est pendant la phase de marchandage -> on finit la phase puis fin du jeu (ajouter un check à la fin de la fonction de marchandage)

Tous les joueurs vendent automatiquement et le joueur avec le plus de gold gagne

## Variantes

- Un joueur débutant peut commencer avec 3 champs
- à 5 personnes, le 3e champ ne coûte que 2 gold
- Si tous les joueurs sont expérimentés on peut marchander avec des golds (à faire dans le marchandage)
