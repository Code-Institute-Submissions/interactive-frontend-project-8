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
  
}

function clearGame() {
    game.started = false;
    game.currentGame = [];
    game.playerMove = 0;
}

function startGame() {
    clearGame();
    game.started = true;

    

   
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


function showPattern() {
    
    game.showing = true;
  

    var move = 0;
    
    flipTile(elements.tiles[game.currentGame[move]])
    move++;

    

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