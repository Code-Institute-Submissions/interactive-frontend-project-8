var game = {
    started: false,
    colors: ["#51ff0d" , "#4deeea" , "#ffe700"],
    currentGame: [],
    playerMoves: [],
    playerMove: 0,
    
}

const elements = {
    gameContainer: $('#game-container'),
    gameMenu: $('#game-menu'),
    
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



  
}


function exitGame() {
    clearGame()
  
}



   


                
               





// 1. start game
// 2. first pattern
// 3. repeat the first pattern
// 4. add a random tile to the pattern
// 5. user repeats the new pattern
// 6. repeat step 4 & 5 until 25 tiles in the pattern