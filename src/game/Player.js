class Player {
  constructor(name, index, level="Expert"){
    if(level !== "Expert") this.numberOfFields = 3;
    this.index = index;
    this.name = name;
    this.goldCoins = 0;
    this.main = [];
    this.fields = [];
    this.harvest = [];
  }

  draw(deck, cardAmount) {
    this.main = deck.splice(0,cardAmount);
  }

  givesFields() {
    for (var i=0;  i<this.numberOfFields; i++){
      this.fields.push([]);
    }
  }

  sellField(){
    // TODO : Faire cette fonction
  }
}

export default Player;