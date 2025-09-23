class Player {
  constructor(name, index){
    this.index = index;
    this.name = name;
    this.goldCoins;
    this.main = [];
    this.champs = [];
    this.recolte = [];
  }

  draw(deck, cardAmount) {
    this.main = deck.splice(0,cardAmount);
  }

  sellField(){

  }
}

module.exports = Player;