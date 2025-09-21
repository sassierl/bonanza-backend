const Game = require('./Game');

const game = new Game(5);
game.initDeck();

console.log(game.deck.slice(0, 5)); // les 5 premières cartes après mélange
