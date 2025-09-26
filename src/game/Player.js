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

  initChamps(){
    this.champs.push([]);
    this.champs.push([]);
  }

  sellField(){
    // TODO : Faire cette fonction
  }
}

export default Player;