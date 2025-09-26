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
    var indiceVide = 0;
    // cas on a le bon champ
    const goodField = this.fields.find(f => f[0] === card);
    if (goodField) {
      goodField.push(card);
      return;
    }
    // cas champ vide
    const emptyField = this.fields.find(f => f.length === 0);
    if (emptyField) {
      emptyField.push(card);
      return;
    }
    // cas champs a tej
    // TODO : faire les cas suivants
  }

  sellField(){
    // TODO : Faire cette fonction
  }
}

module.exports = Player;
