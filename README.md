# Atomic Warriors

### Background and Overview
My goal in creating this project is to create modern slice of my favorite parts of 80s and 90s arcade games. The game will be have a straightforward appearance and controls, making it easy to pick up. My goal is to make the game polished enough that there is a wide range of options created by the few controls. There will be two characters, each controlled by a player. Each character can walk forwards, backwards, and can jump. Each player has a shield that can be held in three positions, top, middle, and low. A player wins by hitting the other player with their shield in an area not protected by a shield, or by jumping on their head. If a held shield contacts the other player's shield, the characters bounce a short distance apart. Characters can also throw their shield, winning if it hits their opponent in an unprotected area. If a player throws a shield and it is blocked, they will need to wait until their shield regenerates (set amount of time). First player to win three rounds wins the game.

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


### Architecture and Technologies
* JavaScript for game logic
* Canvas for DOM manipulation and rendering
* Webpack to bundle script and translate JS as needed

### Implementation
* Tuesday - Skeleton of character movement is completed
* Wednesday - Characters are able to eliminate one another and second player is added.
* Thursday - Stage design complete, shields can be thrown and regenerate appropriately, and the system for winning a match is fully implemented
* Friday - AI added, refine styling of stages and characters

### Bonus Goals
* Scrolling backstory loop while game is waiting for match to start
* More stages
* Music and sound effects
* Choice of character color
