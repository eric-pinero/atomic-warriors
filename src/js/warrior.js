class Warrior{
    constructor(options){
        this.player = options.player;
        this.name = options.name;
        this.height = 80;
        this.width = 40;

        this.shieldHeight = this.height / 2;
        this.shieldWidth = this.width / 4;
        this.shieldStance = "middle";
        this.warriorPos = options.pos;
        this.shieldPos = [this.warriorPos[0] + 50, this.warriorPos[1]];
        this.color = options.color;
        this.shieldColor = options.shieldColor;
        this.glowFactor = 10;

        this.facing = options.facing;
        this.dy = 0;
        this.dx = 0;
        this.destroyed = false;

        this.winner = false;
        this.i = 0;   
    }

    move(command){

        switch (command) {
            case "left":
                    this.dx -= 3;
                break;
            case "right":
                    this.dx += 3;
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
    }

    update(){
        if (this.warriorPos[1] + this.dy > 460){
            this.dy = 0;
        } else {
            this.dy += 1;
        }
        
        if (this.warriorPos[0] + this.dx < 99 || this.warriorPos[0] + this.dx > 865){
            this.dx = 0;
        }else if (this.dx > 9){
            this.dx = 9;
        }else if (this.dx < -9){
            this.dx = -9;
        }

        if (this.dx < 0){
            this.facing = "left";
        } else if (this.dx > 0){
            this.facing = "right";
        }
        
        switch (this.shieldStance) {
            case "middle":
                if (this.facing === "right"){
                    this.shieldPos = [this.warriorPos[0] + 50 + this.dx * 3, this.warriorPos[1]];
                } else {
                    this.shieldPos = [this.warriorPos[0] - 25 + (this.dx * 3), this.warriorPos[1]]; 
                }
                this.shieldHeight = 40;
                this.shieldWidth = 10;
                break;
        
            case "low":
                if (this.facing === "right"){
                    this.shieldPos = [this.warriorPos[0] + 50 + this.dx * 3, this.warriorPos[1] + 40];
                } else {
                    this.shieldPos = [this.warriorPos[0] - 25 + (this.dx * 3), this.warriorPos[1] + 40]; 
                }
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
        ctx.shadowColor = this.color;
        ctx.shadowBlur = Math.abs(this.glowFactor * this.dx);
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillRect(this.warriorPos[0], this.warriorPos[1], this.width, this.height);
        ctx.fillStyle = this.shieldColor;
        ctx.fillRect(this.shieldPos[0], this.shieldPos[1], this.shieldWidth, this.shieldHeight);
    }
    
    isCollidedWith(otherObject) {
        const warriorHitbox = {
            x: this.warriorPos[0],
            y: this.warriorPos[1],
            width: this.width,
            height: this.height,
        };

        const shieldHitbox = {
            x: this.shieldPos[0],
            y: this.shieldPos[1],
            width: this.shieldWidth,
            height: this.shieldHeight,
        };

        const otherWarriorHitbox ={
            x: otherObject.warriorPos[0],
            y: otherObject.warriorPos[1],
            width: otherObject.width,
            height: otherObject.height,
        };

        const otherShieldHitbox ={
            x: otherObject.shieldPos[0],
            y: otherObject.shieldPos[1],
            width: otherObject.shieldWidth,
            height: otherObject.shieldHeight,
        };

        
        
        // const shieldClash = 
        //     (
        //         (this.shieldPos[0] + this.shieldWidth > otherObject.shieldPos[0] &&
        //         this.shieldPos[0] + this.shieldWidth < otherObject.shieldPos[0] + otherObject.shieldWidth)
        //         ||
        //         (this.shieldPos[0] < otherObject.shieldPos[0] + otherObject.shieldWidth &&
        //         this.shieldPos[0] > otherObject.shieldPos[0]
        //     )

        //     &&
        //     (
        //         (this.shieldPos[1] + this.shieldHeight > otherObject.shieldPos[1] &&
        //         this.shieldPos[1] + this.shieldHeight < otherObject.shieldPos[1] + otherObject.shieldHeight)
        //         ||
        //         (this.shieldPos[1] < otherObject.shieldPos[1] + otherObject.height &&
        //         this.shieldPos[1] > otherObject.shieldPos[1])
        //     )
        // )
        // ;


        const shieldClash =
            (shieldHitbox.x < otherShieldHitbox.x + otherShieldHitbox.width &&
            shieldHitbox.x + shieldHitbox.width > otherShieldHitbox.x &&
            shieldHitbox.y < otherShieldHitbox.y + otherShieldHitbox.height &&
            shieldHitbox.y + shieldHitbox.height > otherShieldHitbox.y)
        ;

        const hitwithShield = 
            (warriorHitbox.x < otherShieldHitbox.x + otherShieldHitbox.width &&
            warriorHitbox.x + warriorHitbox.width > otherShieldHitbox.x &&
            warriorHitbox.y < otherShieldHitbox.y + otherShieldHitbox.height &&
            warriorHitbox.y + warriorHitbox.height > otherShieldHitbox.y)
        ;

        // const hitbyShield =
        // (warriorHitbox.x + warriorHitbox.width === otherShieldHitbox.x &&
        //     warriorHitbox.x + warriorHitbox.width < otherShieldHitbox.x + otherShieldHitbox.width &&
        //     warriorHitbox.y < otherShieldHitbox.y &&
        //     warriorHitbox.y + warriorHitbox.height >= otherShieldHitbox.y + otherShieldHitbox.height)
        // ;

        // const simulHit = (hitbyShield && hitwithShield);

        const warriorClash = 
            (warriorHitbox.x < otherWarriorHitbox.x + otherWarriorHitbox.width &&
            warriorHitbox.x + warriorHitbox.width > otherWarriorHitbox.x &&
            warriorHitbox.y < otherWarriorHitbox.y + otherWarriorHitbox.height &&
            warriorHitbox.y + warriorHitbox.height > otherWarriorHitbox.y)
        ;
            
        switch (true) {
            case shieldClash:
                return "shieldClash";
            // case simulHit:
            //     return "simulHit";
            // case hitbyShield :
            //     return "hitbyShield";
            case hitwithShield :
                return "hitwithShield";
            case warriorClash:
                return "warriorClash";
            default:
                return null;
        }

    }

    collideWith(otherObject, collisionType) {
        if (!otherObject.destroyed && !this.destroyed){
            switch (true) {
                case collisionType === "shieldClash":
                    this.dx = -this.dx;
                    // otherObject.dx = -otherObject.dx;
                    this.dy = -this.dy;
                    // otherObject.dy = -otherObject.dy;
                    break;
                // case collisionType === "simulHit":
                //     this.destroyWarrior();
                //     otherObject.destroyWarrior();
                //     break;
                case collisionType === "hitwithShield":
                    this.destroyWarrior();
                    otherObject.winner = true;
                    break;
                // case collisionType === "hitbyShield":
                //     otherObject.destroyWarrior();
                //     break;
                case collisionType === "warriorClash" && this.dy > 0:
                    otherObject.destroyWarrior();
                    this.winner = true;
                    break;
                case collisionType === "warriorClash":
                    this.dx = 0;
                    break;
                default:
                    break;
            }
        }
    }

    destroyWarrior(){
        this.destroyed = true;
    }
}    


Warrior.pos = [20, 20];
Warrior.color = "00ff00";
Warrior.height = 20;
Warrior.width = 10;
export default Warrior;