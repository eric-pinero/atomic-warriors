# Atomic Warriors

### Architecture and Technologies
* JavaScript for game logic
* Canvas for DOM manipulation and rendering
* Webpack to bundle script and translate JS as needed


<img width="1436" alt="Screen Shot 2019-07-03 at 11 17 47 AM" src="https://user-images.githubusercontent.com/34456998/60604117-f600c400-9d84-11e9-9d35-29b6d358b7fe.png">


### Background and Overview
My goal in creating this project is to create modern slice of my favorite parts of 80s and 90s arcade games. The game will be have a straightforward appearance and controls, making it easy to pick up. My goal is to make the game polished enough that there is a wide range of options created by the few controls. There will be two characters, each controlled by a player. Each character can walk forwards, backwards, and can jump. Each player has a shield that can be held in three positions, top, middle, and low. A player wins by hitting the other player with their shield in an area not protected by a shield, or by jumping on their head. If a held shield contacts the other player's shield, the characters bounce a short distance apart. Characters can also throw their shield, winning if it hits their opponent in an unprotected area. If a player throws a shield and it is blocked, they will need to wait until their shield regenerates (set amount of time). First player to win three rounds wins the game.

<img width="1440" alt="Screen Shot 2019-07-03 at 11 24 19 AM" src="https://user-images.githubusercontent.com/34456998/60604211-2b0d1680-9d85-11e9-8b71-7cf9378a003a.png">

### Functionality and MVP Features
* Character can move, jump, and move their shield based on keyboard inputs
+ Walk AD/JL, move shield WS/IK, jump F/;, shield throw G/'
* Character movements are limited appropriately by the environment (cannot jump on air, fall through floor, walk through walls, etc.)
* A character is eliminated if their body contacts the other character's shield or if the other     character lands on their head
* The game correctly identifies when a player is eliminated, ending the round, attributing the point and starting a new round
* The game tracks each player's wins, ending the match when one player hits three wins
* Distinct color for the each character and their shield
* Menu allows players to pause/play game, restart match, and control sound
+ Spacebar pauses/plays and M mute/unmutes sound


```javascript
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
```

### Implementation
* Tuesday - Skeleton of character movement is completed
* Wednesday - Characters are able to eliminate one another and second player is added
* Thursday - and the system for winning a match is fully implemented
* Friday -  Stage design complete and round and match system finalized

### Bonus Goals
* Scrolling backstory loop while game is waiting for match to start
* More stages
* Choice of character color
* Shields can be thrown and regenerate appropriately
* AI added



