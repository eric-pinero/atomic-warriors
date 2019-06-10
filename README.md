# README
Atomic Warriors

###Background and Overview
My goal in creating this project is to create modern slice of my favorite parts of 80s and 90s arcade games. The game will be have a straightforward appearance and controls, making it easy to pick up. My goal is to make the game polished enough that there is a wide range of options created by the few controls. There will be two characters, one player controlled and the other controlled by an AI. Each character can walk forwards, backwards and can jump. Each player has a shield that can be held in three positions, top, middle, and low. A player wins by hitting the other player with their shield in an area not protected by a shield, or by jumping on their head. If a shield contacts the other player's shield, the characters bounce a short distance apart. Characters can also throw their shield, winning if it hits their opponent in an unprotected area. If a player throws a shield and it is blocked, they will need to wait until their shield regenerates (set amount of time). First player to win three rounds wins the game.

### Functionality and MVP Features
* Character can move, jump, and move their shield based on keyboard inputs
* Character movements are limited appropriately by the environment (cannot jump on air, fall through floor, walk through walls, etc.)
* A character is eliminated if their body contacts the other character's shield or if the other     character lands on their head
* The game correctly identifies when a player is eliminated, ending the round, attributing the point and starting a new round
* The game tracks each player's wins, ending the match when one player hits three wins
* Distinct color for the each character and their shield
* Menu allows players to pause/play game, restart match, and control sound


### Architecture and Technologies
* JavaScript for game logic
* Canvas for DOM manipulation and rendering
* Webpack to bundle script and translate JS as needed

### Implementation
* Tuesday - Skeleton of character movement is completed
* Wednesday - Characters are able to eliminate one another and the system for winning a match is fully implemented
* Thursday - Stage design complete
* Friday - Second player added

### Bonus Goals
* AI opponent
* More stages
* Music and sound effects
* Choice of character color
