var game = {
    started: false,
    showing: false,
    color: ["#51ff0d" , "#4deeea" , "#ffe700"],
    currentGame: [],
    playerMoves: [],
    playerMove: 0,
    
}

const elements = {
    gameContainer: $('#game-container'),
    gameMenu: $('#game-menu'),
    tiles: document.querySelectorAll('.tile'),
    
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

    elements.goText.hide()
     elements.gameMenu.hide()
    elements.gameContainer.show()


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



function exitGame() {
    clearGame()
   
    
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

        
            // check if current move (tile clicked) matches the tile in the generated pattern
            if (parseInt(tile.id) == game.currentGame[game.playerMove]) {
                // increase the pattern pointer
                game.playerMove++;
                
                

                
               
            
            }
        }
    }
            



function flipTile(tile) {
    
    unflipOtherTiles(tile)
    
    
    tile.classList.add('flip-card-onclick');
    
    
    setTimeout(function() {
        tile.classList.remove('flip-card-onclick')
    }, 1000)
}

function unflipOtherTiles(currentTile) {
    
    elements.tiles.forEach(function(tile) {
        
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