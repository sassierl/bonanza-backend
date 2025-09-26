class Player {
  constructor(name, level="Expert"){
    if(level !== "Expert") this.numberOfFields = 3;
    this.level = level;
    this.name = name;
    this.goldCoins = 0;
    this.hand = [];
    this.fields = [];
    this.harvest = [];
  }

  draw(deck, cardAmount) {
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

  plant() {
    const card = this.hand.pop()
  }

  sellField(){
    // TODO : Faire cette fonction
  }
}

module.exports = Player;
