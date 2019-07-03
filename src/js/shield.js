class Shield{
    constructor(warriorPos){
        this.height = 40;
        this.width = 10;
        this.warriorPos = warriorPos;
        this.shieldStance = "middle";
        this.pos = [0,0];
        this.color = "ffff00";
        this.dx = 0;
        this.dy = 0;
    }

    move(command){
        switch (command) {
            case "up":
                if (this.shieldStance === "low"){
                    this.shieldStance = "middle";
                } else if(this.shieldStance === "middle") {
                    this.shieldStance = "top";
                }
                break;
            case "down":
                if (this.shieldStance === "middle"){
                    this.shieldStance = "low";
                } else if(this.shieldStance === "top") {
                    this.shieldStance = "middle";
                }
                break;
            default:
                break;
        }

    }

    update(){
        if (this.pos[1] + this.dy > 460){
            this.dy = 0;
        } else {
            this.dy += 1;
        }
        
        if (this.pos[0] + this.dx < 99 || this.pos[0] + this.dx > 900){
            this.dx = 0;
        }else if (this.dx > 5){
            this.dx = 5;
        }else if (this.dx < -5){
            this.dx = -5;
        }


        switch (this.shieldStance) {
            case "middle":
                this.pos = [this.warriorPos[0] + 50, this.warriorPos[1]];
                this.height = 40;
                this.width = 10;
                break;
        
            case "low":
                this.pos = [this.warriorPos[0] + 50, this.warriorPos[1] + 40];
                this.height = 40;
                this.width = 10;
                break;
        
            case "top":
                this.pos = [this.warriorPos[0], this.warriorPos[1] - 25];
                this.height = 10;
                this.width = 40;
                break;
        
            default:
                break;
        }

        this.pos[1] += this.dy;
        this.pos[0] += this.dx;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}    

export default Shield;