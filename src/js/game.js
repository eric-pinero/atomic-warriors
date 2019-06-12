import Warrior from "./warrior";
class Game {
  constructor() {
    this.warriors = [];
  }

  add(object) {
    if (object instanceof Warrior) {
      this.warriors.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }


  addWarrior(pos, color, shieldColor, facing) {
    const warrior = new Warrior({
      pos: pos,
      color: color,
      shieldColor: shieldColor,
      facing: facing,
    });

    this.add(warrior);

    return warrior;
  }

  allObjects() {
    return [].concat(this.warriors);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2) && obj1 !== obj2) {
          const collisionType = obj1.isCollidedWith(obj2);
          const collision = obj1.collideWith(obj2, collisionType);
          if (collision) return;
        }
      }
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    
    this.allObjects().forEach((object) => {
        if (!object.destroyed){
            object.update();
            object.draw(ctx);
        }
    });
    this.checkCollisions();
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