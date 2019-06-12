class GameView {
    constructor(game, ctx) {
      this.ctx = ctx;
      this.game = game;
      this.warrior = this.game.addWarrior();
    }
  
    bindKeyHandlers() {
      const warrior = this.warrior;
  
      Object.keys(GameView.MOVES).forEach((k) => {
        const command = GameView.MOVES[k];
        key(k, () => { warrior.move(command); });
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
  
  GameView.MOVES = {
    w: "up",
    a: "left",
    s: "down",
    d: "right",
    f: "jump",
  };
  
  
export default GameView;