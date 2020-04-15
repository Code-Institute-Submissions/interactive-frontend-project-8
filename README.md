# Interactive-frontend-project
 ## Memory Tiles
 
 This is my Interactive Front-end Development project. I created a simple memory game which was inspired by the popular game, Simon. 
 Click [here](https://aliciarawlings.github.io/interactive-frontend-project/) for deployed project. 
 
 
 
 
## Strategy 

My Goal is to design a memory game that is fun, intuitive and user friendly. The page will be simplistic and easy to navigate around. 
Its purpose is to provide the user with a enjoyable game. 

## UX 
### The ideal user:
* age 10+
* Seeking memory training challenges

### User Stories:
1. As a user : As a new visitor to the site I want the page to be intuitive and  easily navigated.
1. As a user: As a new visitor I want clear instructions of the how to play the game. 
1. As a user: I want a game that responds quickly to my interaction.
1. As a User: I want a game that challenges my memory in a fun way. 
1. As a user: I want a clear indication of how my progress is during the game. 
1. As a user: I want to be able to exit the game easily at any point.


## How To Play

Press the Start game button and the game container will appear. Wait for the game to flip one of the four tiles.Once the game has revealed the tile and has flipped back over you must select the same tile.Each time you remember successfully,the game will add one more tile to the pattern. The challenge is to reach level 20. 
## Scope 

This page is to provide users with quick access to a memory game. The Game is to challenge the users memory and have them remember a sequence of flip tiles and the order in which they appear. 

## Structure

The game buttons are displayed on a black background. Three options are presented to the user, "start", "tutorial" and "strictmode". 
The start game button triggers the game container to bounce down. Four black tiles appear, the game begins by firstly flipping one tile. Placed above the four tiles is an "exit" button which allows the user to return to the main menu. 
The tutorial button triggers a modal. The modal contains step by step insturctions. These include a desciption of how to play along with corresponding images. 
The strictmode option is a simple checkbox which the user can select if they wish to play the game in strictmode. 

## Skeleton

I created a wireframe using the program "Miro". 
![Wireframe](https://i.imgur.com/MtE3Pyo.jpg)


## Surface

For the surface plane I wanted the design and colour scheme to be minimalist. My surface design was inspired by popular games such as Defender and Pacman. On the back side of the flip tiles I used neon colours, which created a fun contrast with the black background. The buttons turn white when hovered over to help the user identify which button they wish to click. 

For the typography I used google fonts and applied  the "coda caption" font family to all the text and headers on the page. I found this font  to be very clear and legible which will accomadate any users who may suffer with visual impairments. 
The "WAIT" and "GO" text were coloured yellow and green, this emmualtes the traffic light colour scheme. Giving the user an intrinsic link between when to wait and go, again this calls to any users who may have reading difficulties who could potentially grasp the notion through the colours used. 

## Technologies

* HTML
* CSS
* javascript
* Bootstrap
* jQuery
## Features 


#### Bounce Down Effect:
Upon entry to the page, the game menu reveals itself with a bouncing down effect from the top of the screen. 
This effect is also applied to the game container itself, which is triggered when the user selects the "start Game " button. 
This was applied with the use of css. 

#### Modals :
Bootstrap modals were used for the tutorial Information,"Correct" and"incorrect" alerts .Within these modals are a "next stage", "preview again" or "restart game " button. The "preview again" button only appears within the modal if you havent selected the "strict Mode" checkbox, otherwise the user is asked to restart the game. 

#### Audio Alerts:
Audio is triggered by the users onclick, depending on whether or not they have selected the correct pattern previously displayed to them. 

#### Font awesome Icons :
Font awesome icons were used for the correct alert, incorrect alert, exit button and tutorial button. 

#### Counter :
A display of what level the user is on is on the top hand right corner of the game container so the user has a realtime reference to where they are within the game. 

#### No consecutive tiles : 
The same tiles that appear consecutively, I feel, created an unsatisfactory user experience because the user must wait for the tile to flip back both times. This takes away from the fluidity of the game . In order to prevent this from happening a “while” statement was created within the “nextPattern” function, which checks that the previous ID that was pushed into the array is not matching the current ID being pushed.  

#### Show pattern:
The show pattern function enables the game to reveal a pattern to user which they must repeat. Within this function is an interval which is showing a pattern every one second. This function also  double checks that the game has reached the end of the pattern. The interval is cleared as not to allow the function to continue to run. 

#### Tile Clicked function: 
The Tile clicked function checks whether the user has selected the correct or incorrect tile. 
Within this function is an “if” statement that only allows clicking on the tile if it is not in showing mode, the game has started and if the tile is not being clicked already. Once these arguments have been confirmed the pattern will increment by one . Along with this the “correct “ audio will play and the “correct” modal will display.  If the user has selected incorrectly  the “incorrect” modal will display, prompting the user to preview the pattern again. If the user has selected “strict mode “ the user will revert back to level 1 and start the game again. 


## Features Left to Implement

I would like to implement an option whereby the user could decide how many tiles they want. 


## Testing

All testing carried out was done so manually. When developing the game I found that if the user was being shown the pattern they were still able to click on other tiles revealing them. This was not what I wanted for the game as this level of interaction would confuse the user. To avoid this I created an "if" statement that would only allow the tile to be flipped if the game was in start mode and the game was not in showing mode or the tile wasnt already flipped.

Problems with the audio samples appeared when paired with the onclick event. I found that there was latency between the onclick event and the playing of the "correct" audio file. Also if the user clicked the tile in quick succession, sometimes the audio clip was not being played, its as though it was being skipped.  Clearly this isnt something that would provoke a positive response from the user. So to combat this I used the .pause method paired with play() and current time. I set the current time to be [0], meaning that the audio  was starting from the beginning of the clip. This resolved the issue. 

There was an issue on all IOS devices and the ontouch event. A latency between the users touch and the game playing the "correct" audio clip occurred. If the user selected the tiles in a quick motion the audio clips would be skipped over sometimes. So if the user selected five correct tiles quickly the game might only play 3 "correct" audio clips. To resolve this I used an audio wrapper "Lowlag", which resulted in an audio clip being played for each touch of a correct tile.  

Another problem I came across was that sometimes the same tiles were being flipped consecutively. This wasnt something that I wanted in the game as it meant that the user would have to wait for the tile to flip and unflip twice. It didnt look good and it would take away from the fluidity of the users input and interaction with the game. To avoid this the  variable ,"nexTileId" contains a "while" statement which verifys that the next generated ID is not the same as the previous one before pushing it into the array. 

Testing was also carried out to ensure that the game would realize when the incorrect tile was being clicked and the appropriate follow on events would occurr such as the preview again or restart game functions. 



## Deployment. 
This project was created using Visual Studio code. I used github to deploy the project. 
1. I logged into Github
1. I created a **repository**. 
1. Select the **settings**tab
1. Scroll down and under **source** click the dropdown menu labelled **None** and select **Master Branch**
1. Once this is selected the page will refresh and will be deployed. 
1. In the **Github Pages** section to find the link. 

## Credits 

All audio samples were taken from Zapsplat.com [https://www.zapsplat.com/sound-effect-category/game-sounds/]

 I had help with the transform property used to turn the tiles from [https://www.w3schools.com/]
 
 Information to resolve audio lag was found at https://lowlag.alienbill.com/. 
 
 








