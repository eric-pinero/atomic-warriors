import Warrior from "./warrior";
class Shield{
    constructor(props){
        // super();
        this.height = 40;
        this.width = 10;

        this.shieldStance = "middle";
        this.pos = [0,0];
        this.color = "ffff00";
        this.dx = 0;
    }

    move(command){
        switch (command) {
            case "left":
                    this.dx -= 5;
                break;
            case "right":
                    this.dx += 5;
                break;
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

        switch (this.shieldStance) {
            case "middle":
                this.shieldPos = [this.warriorPos[0] + 50, this.warriorPos[1]];
                this.shieldHeight = 40;
                this.shieldWidth = 10;
                break;
        
            case "low":
                this.shieldPos = [this.warriorPos[0] + 50, this.warriorPos[1] + 40];
                this.shieldHeight = 40;
                this.shieldWidth = 10;
                break;
        
            case "top":
                this.shieldPos = [this.warriorPos[0], this.warriorPos[1] - 25];
                this.shieldHeight = 10;
                this.shieldWidth = 40;
                break;
        
            default:
                break;
        }

        this.shieldPos[1] += this.dy;
        this.shieldPos[0] += this.dx;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.shieldPos[0], this.shieldPos[1], this.shieldWidth, this.shieldHeight);
    }
    
    //   isCollidedWith(otherObject) {
    //     const centerDist = Util.dist(this.pos, otherObject.pos);
    //     return centerDist < (this.radius + otherObject.radius);
}    

export default Shield;