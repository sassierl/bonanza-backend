import Card from './Card.js';
import cardDefinition from './cardDefinition.js';

class Game {
  NUMBEROFCARD = 5;
  constructor(id) {
    this.id = id;
    this.players = [];
    this.nbPlayers = this.players.length;
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
      player.gameId = this.id;
      if(this.nbPlayers === 3){
        player.numberOfFields = 3;
      } else {
        if(player.level === "Expert") {
          player.numberOfFields = 2;
        }
      }
      player.draw(this.deck, this.NUMBEROFCARD);
    });
    const randomIndex = Math.floor(Math.random() * this.nbPlayers);
    this.currentPlayer = this.players[randomIndex];
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

  addPlayer(player) {
    if (this.players.length < 5) {
      player.gameId = this.id;
      this.players.push(player);
      this.nbPlayers = this.players.length;
      return true;
    }
    return false;
  }

   /**
   * Convertir en objet pour l'API
   * @param {string} playerId - ID du joueur qui fait la requête
   */
  toJSON(playerId = null) {
    return {
      turn: this.turn,
      phase: this.phase,
      currentPlayerId: this.currentPlayer.id,
      players: this.players.map(p => 
        p.id === playerId ? p.toJSON() : p.toPublicJSON()
      ),
      deckSize: this.deck.length,
      gameBoard: this.gameBoard,
      discardPileSize: this.discardPile.length
    };
  }

  /**
   * Créer une instance depuis un objet
   */
  static fromJSON(data) {
    const players = data.players.map(p => Player.fromJSON(p));
    const game = new Game(players);
    game.deck = data.deck || [];
    game.currentPlayer = data.currentPlayer || null;
    game.discardPile = data.discardPile || [];
    game. gameBoard = data.gameBoard || [];
    game.turn = data.turn || 0;
    game.phase = data.phase || 'plant';
    return game;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }
}

export default Game;