# Interactive-frontend-project
 ## Memory Tiles
 
 This is my Interactive Front-end Development project. I created a simple memory game which was inspired by the popular game, Simon. 
 
 ---
 
 
## Strategy 

My Goal is to design a memory game that is fun, intuitive and user friendly. The page will be simplistic and easy to navigate around. 
Its purpose is to provide the user with a enjoyable game. 

#### User Stories: 
## The ideal user:
** age 10+ **
** Seeking brain training challenges**

* **As a user** : I want a game that responds quickly to my interaction
* **As a User** : I want a game that challenges my memory in a fun way. 
* **As a user** : I want a page that navigates easily and takes me to the game as quickly as possible. 
* **As a user** : I want a clear definition of the how to play the game. 
* **As a user** : I want a clear indication of how my progress in the game is. 
* **As a user** : I want to be able to exit the game easily at any point.



---

## How To Play
Press the Start Game button .The game will show the user a pattern, one tile at a time. The challenge is that with each level this sequence will increment by one tile. The user must remember each tile in the correct order. The goal is to reach level 20!

## Scope 
This page is to provide users with quick access to a memory game. The Game is to challenge the users memory and have them remember a sequence of flip tiles and the order in which they appear. 

## Structure
The game buttons are displayed on a black background. Three options are presented to the user, "start", "tutorial" and "strictmode". 

The start game button triggers the game container to bounce down. Four black tiles appear, upon commencement one tile flips over displaying a colour which the user must remember its location. Placed above the four tiles is an "exit" button which allows the user to return the main menu. 
The tutorial button triggers a modal. The modal contains "step by step" insturctions. These include a desciption of how to play along with corresponding images. 
The strictmode option is a simple checkbox which the user can select if they wish to play the game in strictmode. 

## Skeleton
I created a wireframe using the program "Miro". 
![Wireframe]()


## Surface
For the surface plane I wanted the design and colour scheme to be minimalist. My surface design was inspired by popular games such as Defender and Pacman. On the back side of the flip tiles I used neon colours, which create a fun contrast with the black background. The buttons turn white when hovered over to help the user identify which button they wish to click. 

For the typography I used google fonts and applied  the "coda caption" font family to all the text and headers on the page. I found this font  to be very clear and legible which will accomadate any users who may suffer with visual impairments. 
The "WAIT" and "GO" text were coloured yellow and green, this emmualtes the traffic light colour scheme. Giving the user an intrinsic link between when to stop and go,again this calls to any users who may have reading difficulties who could potentially grasp the notion through the colours used. 

## Technologies
-HTML
-CSS
-javascript
-Bootstrap

## Features 


#### Bounce Down Effect:
Upon entry to the page, the game menu reveals itself with a bouncing down effect from the top of the screen. 
This effect is also applied to the game container itself, which is triggered when the user selects the "start Game " button. 

#### Modals :
Bootstrap modals were used for the "Correct" and "incorrect" alert. Within these modals are a "next stage", "preview again" or "restart game " button. The "preview again" button only appears within the modal if you havent selected the "strict Mode" checkbox, otherwise the user is asked to restart the game. 

#### Audio Alerts:
Audio is triggered by the users input depending on whether or not they have selected the correct pattern previously displayed to them. 

#### Font awesome Icons :
Font awesome icons were used for the correct alert, incorrect alert, exit button and tutorial button. 

#### Counter :
A display of what level the user is on is on the top hand right corner of the game container so the user has a realtime reference to where they are within the game. 

## Features Left to Implement
I would like to implement an option whereby the user could decide how many tiles they want. 


## Testing
All testing carried out was done so manually. When developing the game I found that if the user was being shown the pattern they were still able to click on other tiles revealing them. This was not what I wanted for the game as this level of interaction would confuse the user. To avoid this I created an "if" statement that would only allow the tile to be flipped if the game was in start mode and the game was not in showing mode or the tile wasnt already flipped.

Problems with the audio samples appeared when paired with the onclick event. I found that there was latency between the onclick event and the playing of the "correct" audio file. Also if the user clicked the tile in quick succession, sometimes the audio clip was not being played, its as though it was being skipped.  Clearly this isnt something that would provoke a positive response from the user. So to combat this I used the .pause method paired with play() and current time. I set the current time to be [0], meaning that the audio  was starting from the beginning of the clip. This resolved the issue. 

Another problem I came across was that sometimes the same tiles were being flipped consecutively. This wasnt something that I wanted in the game as it meant that the user would have to wait for the tile to flip and unflip twice. It didnt look good and it would take away from the fluidity of the users input and interaction with the game. To avoid this the  variable ,"nexTileId" contains a "while" statement which verifys that the next generated ID is not the same as the previous one before pushing it into the array. 

Testing was also carried out to ensure that the game would realize when the incorrect tile was being clicked and the appropriate follow on events would occurr such as the preview again or restart game functions. 


---



## Credits 
All audio samples were taken from Zapsplat.com [https://www.zapsplat.com/sound-effect-category/game-sounds/]

 I had help with the transform property used to turn the tiles from [https://www.w3schools.com/]








