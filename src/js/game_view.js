class GameView {
  constructor(match, game, ctx, stage) {
    this.ctx = ctx;
    this.game = game;
    this.match = match;
    this.stage = stage;
    this.warrior1 = this.game.addWarrior([105,70], "#ff00ff", "#00ff00", "right", 1, "Brutalax");
    this.warrior2 = this.game.addWarrior([865,70], "#ffff00", "#00ff00", "left", 2, "Decrapitator");
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

    key("m", () =>{ this.muteUnmute();} );
  
  }

  muteUnmuteEle(ele) {
    if (ele.muted){
      ele.muted = false;
    } else {
      ele.muted = true;
    }
  }

  muteUnmute() {
    document.querySelectorAll("video, audio").forEach( ele => this.muteUnmuteEle(ele));
    debugger
    document.getElementById("mute-button").classList.toggle("hidden");
  }
  
  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.game.draw(this.ctx);
    this.stage.draw(this.ctx);
    this.lastTime = time;

    if (this.muted){
      
    } else {

    }

    // every call to animate requests causes another call to animate
    if (!this.match.endMatch){
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.gameOverScreen(this.match.matchWinner);
    }
  }

  gameOverScreen(winner){
    const ctx = this.ctx;
    ctx.clearRect(0, 0, 1000, 600);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 1000, 600);

    ctx.fillStyle = "#00ff00";
    ctx.shadowColor = winner.color;
    ctx.shadowBlur = 20;
    ctx.font = "50px radioactive";
    ctx.textAlign = "center";
    
    
    ctx.fillText(`${winner.name} wins!`, 500, 100);
    ctx.fillText(`Would you like to play again?`, 500, 200);
    ctx.fillText('Press Enter', 500, 300);
    }
  }
  
  GameView.MOVES1 = {
    w: "up",
    a: "left",
    s: "down",
    d: "right",
    f: "jump",
  };
  GameView.MOVES2 = {
    i: "up",
    j: "left",
    k: "down",
    l: "right",
    h: "jump",
  };
  
  
export default GameView;