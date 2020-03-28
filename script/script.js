var game = {
    started: false,
    showing: false,
    strictGamemode: false,
    possibilities: ["#51ff0d" , "#4deeea" , "#ffe700"],
    currentGame: [],
    playerMoves: [],
    playerMove: 0,
    maxStageNumber: 20
}

const elements = {
    gameContainer: $('#game-container'),
    gameMenu: $('#game-menu'),
    audioPlayer: document.querySelector('#player'),
    audioPlayer2:document.querySelector('#player2'),
    tiles: document.querySelectorAll('.tile'),
    correctAlert: $('#correct-alert'),
    wrongAlert: $('#wrong-alert'),
    failAlert: $('#fail-alert'),
    alertModal: $('#alert-modal'),
    stageNumber: $('.stage-number'),
    maxStageNumber: $('.max-stage-number'),
    gamemodeCheckbox: $('#gamemode-checkbox'),
    stageProgress: $('#stage-progress'),
    waitText: $('#wait-text'),
    goText: $('#go-text')
}

function clearGame() {
    game.started = false;
    game.currentGame = [];
    game.playerMove = 0;
}

function startGame() {
    clearGame();
    game.started = true;

    game.strictGamemode = elements.gamemodeCheckbox[0].checked;

    elements.goText.hide()
    elements.gameMenu.hide()
    elements.gameContainer.show()

    elements.failAlert.modal('hide')

    elements.maxStageNumber.text(game.maxStageNumber);
    elements.stageNumber.text(1)

    nextPattern()
    setTimeout(showPattern, 1500);
}

function nextPattern() {
    var nextTileId = Math.floor(Math.random() * 4);
    while (nextTileId == game.currentGame[game.currentGame.length - 1]) {
        nextTileId = Math.floor(Math.random() * 4);
    }
    game.currentGame.push(nextTileId);
    game.playerMove = 0;
}

function nextStage() {
    elements.stageNumber.text(game.currentGame.length + 1);
    elements.correctAlert.modal('hide');
    
    nextPattern()

    setTimeout(showPattern, 1000)
}

function exitGame() {
    clearGame()
    elements.gameContainer.hide()
    elements.gameMenu.show()
}

function repeatStage() {
    elements.wrongAlert.modal('hide');
    game.playerMove = 0;


    unflipOtherTiles()
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
    flipTile(elements.tiles[game.currentGame[move]])
    move++;

    // every 1 second show the next tile in the pattern
    var interval = setInterval(function() {
        // when the end of pattern is reached destroy the interval and disable the showing status
        if (move == game.currentGame.length) {
            game.showing = false;
            elements.goText.show();
            elements.waitText.hide();

            setTimeout(function() {
                elements.goText.hide()
            }, 2000);

            clearInterval(interval);
        } else {
            flipTile(elements.tiles[game.currentGame[move]]);
            move++;
            
        }
    }, 1000);
}

function tileClicked(tile) {
    console.dir(tile)
    // only allow clicking on tiles when game is started and game is not showing pattern
    if (!game.showing && game.started && !tile.classList.contains('flip-card-onclick')) {

        flipTile(tile);

        // check if game reached maximum number of stages i.e. game has been won
        if (game.playerMove < game.maxStageNumber) {

            // check if current move (tile clicked) matches the tile in the generated pattern
            if (parseInt(tile.id) == game.currentGame[game.playerMove]) {
                // increase the pattern pointer
                game.playerMove++;
                
                // play sound when correct tile has been clicked
                elements.audioPlayer.pause();
                elements.audioPlayer.currentTime = 0;
                elements.audioPlayer.play();
                

                
                // check if we reached the end of the current pattern
                if (game.playerMove == game.currentGame.length) {
                    // update the progress bar
                    elements.stageProgress.css('width', `${(game.currentGame.length / game.maxStageNumber) * 100}%`);
                    
                    // show alert prompting user to go to the next stage
                    elements.correctAlert.modal('show');
                }
            // current move did not match current pattern, wrong move
            } else {

                if (game.strictGamemode) {
                    elements.audioPlayer2.play();
                    // show fail alert and prompt to restart or exit game if strict mode has been selected
                    elements.failAlert.modal('show');
                } else {
                    // show wrong move alert and prompt to show pattern again
                    elements.audioPlayer2.play();
                    elements.wrongAlert.modal('show');
                }
            }
        }
    }
}



function flipTile(tile) {
    // unflip all other tiles on pressing a tile
    unflipOtherTiles(tile)
    
    // add flip effect
    tile.classList.add('flip-card-onclick');
    
    // remove flip effect after 1 second
    setTimeout(function() {
        tile.classList.remove('flip-card-onclick')
    }, 1000)
}

function unflipOtherTiles(currentTile) {
    // for each tile in the grid
    elements.tiles.forEach(function(tile) {
        // if its not the currently clicked tile unflip each tile
        if (tile != currentTile) {
            tile.classList.remove('flip-card-onclick')
        }
    })
}

// 1. start game
// 2. first pattern
// 3. repeat the first pattern
// 4. add a random tile to the pattern
// 5. user repeats the new pattern
// 6. repeat step 4 & 5 until 25 tiles in the pattern