import Warrior from "./warrior";

class Game {
  constructor(match) {
    this.match = match;
    this.warriors = [];
    this.endGame = false;
  }

  add(object) {
    if (object instanceof Warrior) {
      this.warriors.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }


  addWarrior(pos, color, shieldColor, facing, player, name) {
    const warrior = new Warrior({
      pos: pos,
      color: color,
      shieldColor: shieldColor,
      facing: facing,
      player: player,
      name: name,
    });

    this.add(warrior);

    return warrior;
  }

  allObjects() {
    return [].concat(this.warriors);
  }

  checkCollisions() {
        const war1 = this.warriors[0];
        const war2 = this.warriors[1];


        if (war1.isCollidedWith(war2)) {
            const collisionType = war1.isCollidedWith(war2);
            war1.collideWith(war2, collisionType);
            war2.collideWith(war1, collisionType);
        } else if (war2.isCollidedWith(war1)){
            const collisionType = war2.isCollidedWith(war1);
            war2.collideWith(war1, collisionType);
        }
    }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    ctx.fillStyle = this.warriors[0].color;
    ctx.font = "30px radioactive";
    ctx.fillText(`${this.warriors[0].name}: ${this.match.score[0]}`, 80, 25);
    ctx.fillStyle = this.warriors[1].color;
    ctx.fillText(`${this.warriors[1].name}: ${this.match.score[1]}`, 690, 25);

    this.checkCollisions();
    this.allObjects().forEach((object) => {
        object.update();
        if (!object.destroyed){
            object.draw(ctx);
        } 
    });
    if (!this.endGame) this.checkWinner();
  }

  checkWinner(){
      for (let i = 0; i < this.warriors.length; i++) {
          const warrior = this.warriors[i];

          if (warrior.winner){
              this.endGame = true;
              this.match.deathSound.play();
              this.gameOver(warrior);
          }
      }
  }

  gameOver(warrior){

    this.match.addScore(warrior);

    this.endGame = false;

    this.warriors[0].warriorPos = [105,70];
    this.warriors[0].facing = "right";
    this.warriors[1].warriorPos = [865,70];
    this.warriors[1].facing = "left";

    for (let i = 0; i < this.warriors.length; i++) {
      const warrior = this.warriors[i];
      warrior.shieldStance = "middle";
      warrior.winner = false;
      warrior.destroyed = false;
      warrior.dx = 0;
    }
    
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

}


Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;


export default Game;