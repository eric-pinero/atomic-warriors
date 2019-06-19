import Game from "./game";
import GameView from "./game_view";
import Stage from "./stage";

class Match{
    constructor(ctx){
        this.ctx = ctx;
        this.score = [0, 0];
        this.startMatch = false;
        this.endMatch = false;
        this.matchWinner = "";
        this.deathSound = "";
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

    start(sounds){
        if (!this.startMatch){
            const game = new Game(this);
            const stage = new Stage();
            new GameView(this, game, this.ctx, stage).start();
            this.startMatch = true;
            sounds[0].play();
        }
        else if (this.endMatch){
            this.score = [0,0];
            this.matchWinner = "";
            this.endMatch = false;
            sounds[0].play();
        }
        this.deathSound = sounds[1];
    }
}

export default Match;