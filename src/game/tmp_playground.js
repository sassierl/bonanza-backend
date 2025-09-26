const Game = require('./Game');
const Player = require('./Player')

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
console.log(game.players[4].name);
console.log(game.players[4].fields);

const game2 = new Game([Thommy, Benjo, Adhemar, Tim])
game2.initGame();
console.log(game2.players[3].name);
console.log(game2.players[3].fields);
console.log(game2.players[3].hand);

console.log(game2.currentPlayer.name);

