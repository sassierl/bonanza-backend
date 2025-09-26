const Card = require('./Card').default;
const cardDefinition = require('./cardDefinition').default;

class Game {
  NUMBEROFCARD = 5;
  constructor(players) {
    this.nbPlayers = players.length;
    this.players = players;
    this.deck = [];
    this.currentPlayer;
    this.discardPile = [];
    this.gameBoard;
  }

  initDeck() {
    for (const def of cardDefinition){
      for (let i=0; i < def.number; i++) {
        this.deck.push(new Card(def.name, def.sellValue, def.number));
      }
    }
    this.shuffle(this.deck);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  init(){
    this.initDeck(); // Deck complet mélangé
    this.players.forEach(player => {
      player.draw(this.deck, NUMBEROFCARD);
    });
  }
}

module.exports = Game;