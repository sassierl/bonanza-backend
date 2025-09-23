const Game = require('./Game');
const Player = require('./Player')


const player1 = new Player('joueur 1', 1);
const player2 = new Player('joueur 2', 2);
const game = new Game([player1, player2]);
game.init();

