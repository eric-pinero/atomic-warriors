import Game from "./game";
import GameView from "./game_view";
import Stage from "./stage";
import Sound from "./sound";

class Match{
    constructor(bgMusic){
        this.score = [0, 0];
        this.endMatch = false;
        this.matchWinner = "";
        this.bgMusic = bgMusic;
        this.bgMusic.addEventListener("canplaythrough", () => {
            // debugger
            this.bgMusic.play();
        });
        // this.deathSound = new Sound("./assets/deathSound.mp3");
    }

    addScore(warrior){
        this.score[warrior.player - 1]++;
        if (this.score[warrior.player - 1] === 3){
            this.matchOver(warrior);
        }
    }

    matchOver(winner){
        this.endMatch = true;
        this.matchWinner = winner;
    }

    start(){
        const canvasEl = document.getElementsByTagName("canvas")[0];
        canvasEl.width = Game.DIM_X;
        canvasEl.height = Game.DIM_Y;
      
        const ctx = canvasEl.getContext("2d");
        const game = new Game(this);
        const stage = new Stage();
        new GameView(this, game, ctx, stage).start();
        this.bgMusic.play();    
    }



}

export default Match;