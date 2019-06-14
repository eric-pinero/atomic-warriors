class Stage {
    constructor(){
        this.floor = [0, 540, 1000, 140];
        this.leftWall = [0, 0, 76, 600];
        this.rightWall = [924, 0, 76, 600];
    }

    draw(ctx){
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#c2b280";
        ctx.fillRect(this.floor[0], this.floor[1], this.floor[2], this.floor[3]);
        ctx.fillRect(this.leftWall[0], this.leftWall[1], this.leftWall[2], this.leftWall[3]);
        ctx.fillRect(this.rightWall[0], this.rightWall[1], this.rightWall[2], this.rightWall[3]);
    }
}
export default Stage;