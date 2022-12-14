//---------FACTORIES--------

//PLAYER FACTORY
const Player = (name, symbol)=>{
    this.name = name;
    this.symbol = symbol;
    const setName = (newName) => name = newName;

    const getName = () => {
        return name;
    }

    const getSymbol = () =>{
        return symbol;
    };
    return {
        getName,
        getSymbol,
        setName,
    }
}

//-------MODULES--------

//GAME BOARD MODULE
const GameBoard = (function() {

   //store a game board inside of an array inside of a game board object
   const board = new Array(9);

   for(let i = 0; i < board.length; i++){
    board[i] = " ";
   }
 
    function resetGame(){
        for(let i = 0; i < board.length; i++){
            board[i] = " ";
        }
    }
    console.log(board);

    return{
        board,
        resetGame
    }

})();

//DISPLAY CONTROLLER MODULE

const DisplayController = (() => {
    const gridDiv = document.querySelectorAll('.box');
    let gameOverMessage = document.getElementById('winnerMessage');
    let turns = 0;

    //message box on bottom functions

    function declareWinner(){
        gameOverMessage.textContent =` ${GamePlay.getPlayer()} is the winner!`
    }

    function declareTie(){
        gameOverMessage.textContent = "It's a tie!"
    }

    return{
        gridDiv,
        gameOverMessage,

        declareWinner,
        declareTie,
    }
})();

// GAME PLAY MODULE
const GamePlay = (() => {
    let player1 = Player('Player One', 'X');
    let player2 = Player('Player Two','O');
    let currentPlayer = player1;
    let rounds = 0;
    let gameOver = false;
    
    function playRound(){
        console.log(rounds);
        rounds++;
        
        getPlayer();

        if(GameBoard.board[this.id] === ' '){
            if(getPlayer() === player1){
                this.textContent = "X";
                GameBoard.board[this.id] = currentPlayer.getSymbol();
            }else{
                this.textContent = "O";
                GameBoard.board[this.id] = currentPlayer.getSymbol();
            }
            nextPlayer();
    
            DisplayController.gameOverMessage.textContent = `It is ${currentPlayer.getName()}'s turn!`

            console.log(rounds);
        }

        if(rounds === 9 ){
            console.log('The game is a tie');
            gameOver = true;
            DisplayController.declareTie;
            return;
        }

        if(checkWinner(player1.getSymbol())){
            gameOver = true;
            DisplayController.gameOverMessage.textContent = ` ${nextPlayer().getName()} Wins!`
            return;
        }

        if(checkWinner(player2.getSymbol())){
            gameOver = true;
            DisplayController.gameOverMessage.textContent = ` ${nextPlayer().getName()} Wins!`
            return;
        }
        
      
    }

   function getPlayer() {
        return currentPlayer;
    }

    const nextPlayer = () => {
        if(currentPlayer === player1){
            currentPlayer = player2;
        }else{
            currentPlayer = player1;
        }
        return currentPlayer;
    }

    function checkWinner(player){
        const horizontal = [0,3,6].map(i=>{return[i,i+1,i+2]});
        const vertical = [0,1,2].map(i=>{return[i,i+3,i+6]});
        const diagonal = [[0,4,8],[2,4,6]];
      
        var allwins = [].concat(horizontal).concat(vertical).concat(diagonal);
        
        let res = allwins.some(indices => { 
        return GameBoard.board[indices[0]] == player && GameBoard.board[indices[1]] == player && GameBoard.board[indices[2]] == player})
        return res;
    }


    

    function isGameOver(){
    return gameOver;
    }

    //EVENT LISTENER FOR CLICKING EACH BOX ON TIC TAC TOE GRID
    DisplayController.gridDiv.forEach((box, index)=>{
        box.addEventListener('click', playRound);
    });

    return{
        currentPlayer,
        playRound,
        isGameOver,
        nextPlayer,
        getPlayer
     }
    }

)();


 