class GameView {
    constructor(game, ctx) {
      this.ctx = ctx;
      this.game = game;
      this.warrior1 = this.game.addWarrior([100,70], "#ff00ff");
      this.warrior2 = this.game.addWarrior([400,70], "#ffff00");
    }
  
    bindKeyHandlers() {
      const warrior1 = this.warrior1;
      const warrior2 = this.warrior2;
  
      Object.keys(GameView.MOVES1).forEach((k) => {
        const command1 = GameView.MOVES1[k];
        key(k, () => { warrior1.move(command1); });
      });

      Object.keys(GameView.MOVES2).forEach((k) => {
        const command2 = GameView.MOVES2[k];
        key(k, () => { warrior2.move(command2); });
      });
  
    }
  
    start() {
      this.bindKeyHandlers();
      this.lastTime = 0;
      // start the animation
      requestAnimationFrame(this.animate.bind(this));
    }
  
    animate(time) {
      const timeDelta = time - this.lastTime;
  
    //   this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.lastTime = time;
  
      // every call to animate requests causes another call to animate
      requestAnimationFrame(this.animate.bind(this));
    }
  }
  
  GameView.MOVES1 = {
    w: "up",
    a: "left",
    s: "down",
    d: "right",
    z: "jump",
  };
  GameView.MOVES2 = {
    i: "up",
    j: "left",
    k: "down",
    l: "right",
    b: "jump",
  };
  
  
export default GameView;