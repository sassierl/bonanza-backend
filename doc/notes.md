# Squelette du projet

## Classes et attributs

```{json}
Jeu :
  attributs :
    Joueurs = `List[Joueur]`
    pioche = List[Carte]
    current_player = Joueur
    plateau List[Carte]
    défausse List[Carte]
  méthodes :
    game_end(): jeu fini ?
    retourne(): retourne les 2 cartes
    init_game():
      on créé les joueurs la pioche la defausse etc..
      pioche init
      distribue sur chaque joueurs
      current_player = rand(Joueurs)
    set_pieces(Joueur current_player): donne des pièces au joueurs
    add_defausse(List[Carte]): ajoute des cartes à la défausse
    retourne_defausse()
    async Game():
      init_game();
      while(self.game_end())
        // current player est géré par init
        Joueur.plante()
        self.retourne()
        // trades avec le plateau Trade
        Joueur.recupere(plateau) // récupère les cartes qui reste
        add_defausse(Joueur.récoltes) // calculer les pièces maintenant
        Joueur.reset_recolte()
        Joueur.pioche(pioche)
        current_player = Joueur_suivant

      on appelle distribue
```

```{json}
Carte :
  attributs :
    valeurs de revente
    leurs numéros
```

```{json}
Plateau :
  attributs :
    TODO : réfléchir à la partie trades du jeu.
```

```{json}
Joueur :
  attributs :
    main (relation d'ordre) List[Carte]
    pieces d'or int
    champs Champs
    récolte List[Carte]
  méthodes :
    plante() // possiblement update récolte
    pioche()
    récupère() : plante(plateau)
    reset_recolte() récolte = []
```

```{json}
Champs :
  attributs :
    champ1 List[Carte]
    champ2 List[Carte]
    champ3 List[Carte]
    affiche champ3 bool default=false
  méthodes :
   récolte : récolte si possible
```