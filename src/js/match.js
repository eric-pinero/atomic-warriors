import Game from "./game";
import GameView from "./game_view";

class Match{
    constructor(){
        this.score = [0, 0];
    }

    addScore(player){
        this.score[player - 1]++;
        this.start();
    }

    start(){
        const canvasEl = document.getElementsByTagName("canvas")[0];
        canvasEl.width = Game.DIM_X;
        canvasEl.height = Game.DIM_Y;
      
        const ctx = canvasEl.getContext("2d");
        const game = new Game(this);
        new GameView(game, ctx).start();
    }



}

export default Match;