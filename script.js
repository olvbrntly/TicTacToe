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
        gameOverMessage.textContent =`${winner} is the winner!`
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
    let player1 = Player('player one', 'X');
    let player2 = Player('player two','O');
    let currentPlayer = player1;
    let rounds = 0;
    let gameOver = false;

    function playRound(){
        console.log('round is being played')

        // if(checkWinner === true){
        //     gameOver = true;
        //     DisplayController.displayWinner();
        //     return;
        // }

        if(rounds > 9){
            console.log('The game is a tie');
            gameOver = true;
            DisplayController.declareTie();
            return;
        }

        getPlayer();

        if(GameBoard.board[this.id] === ' '){
            if(getPlayer() === player1){
                this.textContent = "X";
                GameBoard.board[this.id] = currentPlayer.getSymbol();
                console.log(this)
               
            }else{
                this.textContent = "O";
                GameBoard.board[this.id] = currentPlayer.getSymbol();
            }
            nextPlayer();
       
            DisplayController.gameOverMessage.textContent = `It is ${currentPlayer.getName()}'s turn!`
            rounds++
            console.log(rounds);
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
        return
    }

    const CheckWinner = () =>{
        const winningCombos =[
                                [0,1,2]
                                [3,4,5]
                                [6,7,8]
                                [0,3,6]
                                [1,4,7]
                                [2,5,8]
                                [0,4,8]
                                [2,4,6]
                                        ]

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
     }
    }
)();


 