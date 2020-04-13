var game = {
    started: false,
    showing: false,
    strictGamemode: false,
    currentGame: [],
    playerMoves: [],
    playerMove: 0,
    maxStageNumber: 20
};



const elements = {
    gameContainer: $('#game-container'),
    gameMenu: $('#game-menu'),
    audioPlayer: document.querySelector('#player'),
    audioPlayer2: document.querySelector('#player2'),
    audioPlayer3: document.querySelector('#player3'),
    tiles: $('.tile'),
    correctAlert: $('#correct-alert'),
    wrongAlert: $('#wrong-alert'),
    failAlert: $('#fail-alert'),
    alertModal: $('#alert-modal'),
    stageNumber: $('.stage-number'),
    maxStageNumber: $('.max-stage-number'),
    gamemodeCheckbox: $('#gamemode-checkbox'),
    stageProgress: $('#stage-progress'),
    waitText: $('#wait-text'),
    wonAlert: $('#won'),
    goText: $('#go-text')
};

console.log(elements.tiles)

elements.tiles.on("click touchstart", tileClicked);

function clearGame() {
    game.started = false;
    game.currentGame = [];
    game.playerMove = 0;
}


function startGame() {
    clearGame();
    game.started = true;

    game.strictGamemode = elements.gamemodeCheckbox[0].checked;

    elements.goText.hide();
    elements.gameMenu.hide();
    elements.gameContainer.show();

    elements.failAlert.modal('hide');

    elements.maxStageNumber.text(game.maxStageNumber);
    elements.stageNumber.text(1);

    nextPattern();
	setTimeout(showPattern, 1500);
	
	// elements.audioPlayer.muted = true;
	elements.audioPlayer.loop = true;
	elements.audioPlayer.play();
}


//Generates I.D's to push into array and randmises them first. 
function nextPattern() {
    var nextTileId = Math.floor(Math.random() * 4);
    //checks that no consecutive tiles appear. 
    while (nextTileId == game.currentGame[game.currentGame.length - 1]) {
        nextTileId = Math.floor(Math.random() * 4);
    }
    game.currentGame.push(nextTileId);
    game.playerMove = 0;
}


//If user successful, modal appears and user can click "next stage" button to progress. 
function nextStage() {
    elements.stageNumber.text(game.currentGame.length + 1);
    elements.correctAlert.modal('hide');

    nextPattern();

    setTimeout(showPattern, 1000);
}

// show user the pattern they have to repeat
function showPattern() {
    // set game status to showing pattern
    game.showing = true;
    elements.goText.hide();
    elements.waitText.show();

	var move = 0;
	
    // show first tile in the pattern
    flipTile(elements.tiles[game.currentGame[move]]);
    move++;

    // every 1 second show the next tile in the pattern
    var interval = setInterval(function() {
        // when the end of pattern is reached destroy the interval and disable the showing status
        if (move == game.currentGame.length) {
            game.showing = false;
            elements.goText.show();
            elements.waitText.hide();
            //hid the go in 2 seconds
            setTimeout(function() {
                elements.goText.hide();
            }, 2000);

            clearInterval(interval);
        } else {
            flipTile(elements.tiles[game.currentGame[move]]);
            move++;

        }
    }, 1000);
}

function exitGame() {
    clearGame();
    elements.gameContainer.hide();
    elements.gameMenu.show();
}

//If user clicks incorrect tile, they can preview again 
function repeatStage() {
    elements.wrongAlert.modal('hide');
    game.playerMove = 0;


    unflipOtherTiles();
    setTimeout(showPattern, 1000);
}

let timeout;

function tileClicked() {
    console.dir(this);
    // only allow clicking on tiles when game is started and game is not showing pattern
    if (!game.showing && game.started && !this.classList.contains('flip-card-onclick')) {

        flipTile(this);


        // check if current move (tile clicked) matches the tile in the generated pattern
        if (parseInt(this.id) == game.currentGame[game.playerMove]) {
            // increase the pattern pointer
            game.playerMove++;

			
			if (timeout) {
				clearTimeout(timeout);
			}
			// play sound when correct tile has been clicked
            // elements.audioPlayer.pause();
			elements.audioPlayer.muted = false;
			elements.audioPlayer.currentTime = 0;
			
			timeout = setTimeout(function() {
				elements.audioPlayer.muted = true;
			}, 150)
			

            // check if we reached the end of the current pattern         
            if (game.playerMove == game.currentGame.length) {
                //if game has won
                if (game.playerMove == game.maxStageNumber) {
                    elements.wonAlert.modal('show');
                    elements.audioPlayer3.play();
                } else {
                    // update the progress bar
                    elements.stageProgress.css('width', (game.currentGame.length / game.maxStageNumber) * 100 + "%");

                    // show alert prompting user to go to the next stage
                    elements.correctAlert.modal('show');
                }

            }

            // current move did not match current pattern, wrong move
        } else {

			elements.audioPlayer2.play();
            if (game.strictGamemode) {
                // show fail alert and prompt to restart or exit game if strict mode has been selected
                elements.failAlert.modal('show');
            } else {
                // show wrong move alert and prompt to show pattern again
                elements.wrongAlert.modal('show');
            }
        }
    }
}

function flipTile(tile) {
    // unflip all other tiles on pressing a tile
    unflipOtherTiles(tile);

    // add flip effect
    tile.classList.add('flip-card-onclick');

    // remove flip effect after 1 second
    setTimeout(function() {
        tile.classList.remove('flip-card-onclick');
    }, 1000);
}

function unflipOtherTiles(currentTile) {
    // for each tile in the grid
    elements.tiles.each(function() {
        // if its not the curreisly clicked tile unflip each tile
        if (this != currentTile) {
            this.classList.remove('flip-card-onclick');
        }
    });
}