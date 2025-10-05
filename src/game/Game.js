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
    this.gameBoard = [];
  }

  initDeck() {
    // Pour chaques types de cartes
    for (const def of cardDefinition){
      // On donne le nombre de cartes
      for (let i=0; i < def.number; i++) {
        // On ajoute la carte au deck
        this.deck.push(new Card(def.name, def.sellValues, def.number));
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

  initGame() {
    this.initDeck(); // Deck complet mélangé
    this.players.forEach(player => {
      player.initPlayer();
      if(this.nbPlayers === 3){
        player.numberOfFields = 3;
      } else {
        if(player.level === "Expert") {
          player.numberOfFields = 2;
        }
      }
      player.draw(this.deck, this.NUMBEROFCARD);
      const randomIndex = Math.floor(Math.random() * this.nbPlayers);
      this.currentPlayer = this.players[randomIndex];
    });
  }


  getFieldOptions() {
    if (this.currentPlayer.hand.length === 0) {
      return {card: null, options: []};
    }
    const card = this.currentPlayer.hand.pop();
    const options = this.currentPlayer.plantableFields(card);
    return {card, options};
  }

  setGameBoard() {
    this.gameBoard[0] = this.deck.pop();
    this.gameBoard[1] = this.deck.pop();
    // renvoyer les gens avec qui on peut échanger
    return this.gameBoard;
  }

}

module.exports = Game;