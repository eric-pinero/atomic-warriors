import Shield from "./shield";
class Warrior{
    constructor(props){
        this.height = 80;
        this.width = 40;

        this.shieldHeight = this.height / 2;
        this.shieldWidth = this.width / 4;
        this.shieldStance = "middle";
        this.shieldPos = "middle";
        this.warriorPos = props.pos;
        this.color = "#00ff00";
        this.shieldColor = "ffff00";
        this.dy = 0;
        this.dx = 0;
        new Shield();
    }

    move(command){

        switch (command) {
            case "left":
                    this.dx -= 5;
                break;
            case "right":
                    this.dx += 5;
                break;
            case "jump":
                if (this.warriorPos[1] === 461)
                this.dy -= 20;
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


        // if (command && command !== "jump"){
        //     this.warriorPos[0] += command[0];
        //     this.warriorPos[1] += command[1];
        // } else if (command === "jump" && this.warriorPos[1] === 461){
        //     this.dy -= 20;
        // }

    }

    update(){
        if (this.warriorPos[1] + this.dy > 460){
            this.dy = 0;
        } else {
            this.dy += 1;
        }
        
        if (this.warriorPos[0] + this.dx < 99 || this.warriorPos[0] + this.dx > 900){
            this.dx = 0;
        }else if (this.dx > 5){
            this.dx = 5;
        }else if (this.dx < -5){
            this.dx = -5;
        }

        debugger
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

        this.warriorPos[1] += this.dy;
        this.warriorPos[0] += this.dx;

        this.shieldPos[1] += this.dy;
        this.shieldPos[0] += this.dx;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.warriorPos[0], this.warriorPos[1], this.width, this.height);
        ctx.fillStyle = this.shieldColor;
        ctx.fillRect(this.shieldPos[0], this.shieldPos[1], this.shieldWidth, this.shieldHeight);
    }
    
    //   isCollidedWith(otherObject) {
    //     const centerDist = Util.dist(this.pos, otherObject.pos);
    //     return centerDist < (this.radius + otherObject.radius);
}    


Warrior.pos = [20, 20];
Warrior.color = "00ff00";
Warrior.height = 20;
Warrior.width = 10;
export default Warrior;