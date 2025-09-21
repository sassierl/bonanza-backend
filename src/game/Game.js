const Card = require('./Card');
const cardDefinition = require('./cardDefinition');

class Game {
  constructor(players) {
    this.nbPlayers = players.length;
    this.players = players;
    this.deck = [];
    this.currentPlayer;
    this.discardPile = [];
    this.gameBoard;
  }

  initDeck() {
    for (let value = 0; value <= 20; value+=2){
      for (const def of cardDefinition){
        for (let i=0; i < def.number; i++) {
          this.deck.push(new Card(def.name, def.requiredAmount, def.number));
        }
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
      
    });
  }
}

module.exports = Game;