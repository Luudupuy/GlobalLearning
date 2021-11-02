class game{
    name
    position
    life
    ranking
    experience
    constructor(name, position, life, ranking, experience){
        this.name = name;
        this.position = '00';
        this.life = 100;
        this.ranking = 5;
        this.experience = 0;
    }
  }
let game1 = new game();
if(game1.name==undefined){
    let game1 = new game('Heroe');
    console.log(game1);
}
else{
    console.log(game1);
}