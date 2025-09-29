const Game = require('./Game');
const Player = require('./Player');
const BackendSimulator = require('./BackendSimulator');

// Appli (Front , Back)
// Jeu (game)

// Front* (les navigateurs des joueurs) <=  HTTP  => Back (serveur) <= Javascript => Jeu (serveur)


const Thommy = new Player('Thommy la tomate');
const Benjo = new Player("Benjo l'alcoolo");
const Sassier = new Player('Sassier creatorture');
const Adhemar = new Player('Adhemar le cafard');
const Tim = new Player("Tim", "Beginner");

const game = new Game([Thommy, Benjo, Sassier, Adhemar, Tim]);
game.initGame();
console.log(`${game.currentPlayer.name} starts the game!`);
game.startTurn();

const sim = BackendSimulator();

