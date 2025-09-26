const Game = require('./Game');
const Player = require('./Player')

// Appli (Front , Back)
// Jeu (game)

// Front* (les navigateurs des joueurs) <=  HTTP  => Back (serveur) <= Javascript => Jeu (serveur)


const Thommy = new Player('Thommy la tomate', 1);
const Benjo = new Player("Benjo l'alcoolo", 2);
const Sassier = new Player('Sassier creatorture', 3);
const Adhemar = new Player('Adhemar le cafard',4);
const Tim = new Player("Tim", 5, "Beginner");

const game = new Game([Thommy, Benjo, Sassier, Adhemar, Tim]);
game.init();

