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


  addWarrior(pos, color, shieldColor, facing, player) {
    const warrior = new Warrior({
      pos: pos,
      color: color,
      shieldColor: shieldColor,
      facing: facing,
      player: player,
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

    ctx.fillStyle = "#ffffff";
    ctx.font = "30px Arial";
    ctx.fillText(`Player 1: ${this.match.score[0]}`, 10, 50);
    ctx.fillText(`Player 2: ${this.match.score[1]}`, 10, 85);

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
              this.gameOver(warrior.player);
          }
      }
  }

  gameOver(player){
      debugger
    this.match.addScore(player);
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