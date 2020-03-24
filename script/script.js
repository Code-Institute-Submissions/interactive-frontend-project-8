var game ={
    started:false,
    colors: ["#51ff0d" , "#4deeea" , "#ffe700"],
    currentGame: [],
    playerMoves: [],

}

function clearGame(){
    game.started= true,
    game.currentGame = [],
    game.playerMove = 0;


}

function startGame() {
    clearGame();
    game.started = true;
}
