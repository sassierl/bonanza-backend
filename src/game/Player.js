import { GAME_RULES, PLAYER_LEVELS } from '../../config/constants.js';
import BackendSimulator from './BackendSimulator.js';

class Player {
  constructor(name, level=PLAYER_LEVELS.EXPERT){
    if(level !== PLAYER_LEVELS.EXPERT) this.numberOfFields = 3;
    this.gameId = 0;
    this.level = level;
    this.name = name;
    this.goldCoins = 0;
    this.hand = [];
    this.fields = [];
    this.harvest = [];
  }

  draw(deck, cardAmount = GAME_RULES.CARD_TO_DRAW_PER_TURN) {
    for (var i = 0; i < cardAmount; i++) {
       this.hand.push(deck.pop());
    }
  }

  initPlayer() {
    this.goldCoins = 0;
    this.hand = [];
    this.givesFields();
  }

  givesFields() {
    this.fields = [];
    for (var i=0;  i<this.numberOfFields; i++){
      this.fields.push([]);
    }
  }

  sortFields() {
    this.fields.sort((a, b) => b.length - a.length);
  }

  sellField(field) {
    // TODO : gérer les edges cases
    const card  = field[0];
    let i = card.sellValues.length - 1;
    while (card.sellValues[i].cards > field.length) {
      i -= 1;
    }
    if (i === -1) {
      this.harvest = this.harvest.concat(field);
      field = [];
      return 0;
    } else {
      this.goldCoins += card.sellValues[i].gold;
      for (var j = 0; j < field.length - card.sellValues[i].gold; j++) {
        this.harvest.push(field.pop());
      }
      field = [];
      return card.sellValues[i].gold;
    }
  }

  plantableFields(card) {
    const lenFields = this.fields.length;
    // cas on a le bon champ
    const goodFieldIndex = this.fields.findIndex(f => f[0] === card);
    if (goodFieldIndex) {
      return [goodFieldIndex];
    }
    // cas champ vide
    if (this.fields[0].length === 0) {
      return [0];
    }
    const lastSingleFieldIndex = this.fields.findLastIndex(f => f.length === 1);
    if (lastSingleFieldIndex === lenFields - 1) {
      return Array.from({ length: lenFields }, (_, i) => i);
    } else {
      return Array.from({ length: lenFields-lastSingleFieldIndex+1 }, (_, i) => i + lastSingleFieldIndex+1);
    }
  }

  plant(card, index) {
    this.fields[index].push(card);
    this.sortFields();
  }

  receiveTradeOffer(cards) {
    // logique frontend d'acceptation ou non d'une offre
  }

  choose1Card(cards) {
    // logique frontend de choix d'une carte
  }

  chooseCardsToTrade() {
    var cards = []
    var isFinished = false
    while (this.hand.length > 0 && !isFinished) {
      // fonction de proposition de carte
      cards.push(this.choose1Card(this.hand))
    }
    return cards;
  }

  initTrade(tradePartner) {
    const cardsToTrade = this.chooseCardsToTrade();
    const result = tradePartner.receiveTradeOffer(cardsToTrade);
    if (result.accepted) {
      // Faire l'échange + planter les cartes
    } else {
      // Récupérer ses cartes
    }
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      level: this.level,
      goldCoins: this.goldCoins,
      handSize: this.hand.length,  // On ne montre pas les cartes des autres
      hand: this.hand,  // Inclus pour le joueur actuel
      fields: this.fields.map(field => ({
        type: field[0]?.name || null,
        cards: field.length,
        value: field.length > 0 ? this.calculateFieldValue(field) : 0
      })),
      harvestSize: this.harvest.length
    };
  }

  toPublicJSON() {
    return {
      id: this.id,
      name: this.name,
      level: this.level,
      goldCoins: this. goldCoins,
      handSize: this.hand.length,  // Juste le nombre, pas les cartes
      fields: this.fields.map(field => ({
        type: field[0]?.name || null,
        cards: field.length
      })),
      harvestSize: this.harvest.length
    };
  }

  fromJSON(data) {
    const player = new Player(data.name, data.level);
    player.gameId = data.gameId;
    return player;
  }

  calculateFieldValue(field) {
    if (field.length === 0) return 0;
    const card = field[0];
    for (let i = card.sellValues.length - 1; i >= 0; i--) {
      if (field.length >= card.sellValues[i].cards) {
        return card.sellValues[i].gold;
      }
    }
    return 0;
  }
}

export default Player;
