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
        console.log(symbol)
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

    function attachIDs(){
        for(let i = 0; i < board.length; i++){
            let div = document.getElementById(`${i}`);
            board[i] = div;
        }
    };

    attachIDs();

    function accessBoard(){
        return board;
    }

    function resetGame(){
        for(let i = 0; i < board.length; i++){
            board[i] = " ";
        }
    }
    console.log(board);

    return{
        accessBoard,
        resetGame
    }

})();

//DISPLAY CONTROLLER MODULE

const DisplayController = (() => {
    const gridDiv = document.querySelectorAll('.box');
    let gameOverMessage = document.getElementById('winnerMessage');
    let turns = 0;

    function playersMove(){
       let player = GamePlay.currentPlayer();
       console.log(player);
       let sign = player.getSymbol();
       console.log(`the ${sign}`);
       gridDiv.textContent = `${sign}`;
    }
 
    

    //message box on bottom functions
    function declareTurn(){
        gameOverMessage.textContent = `it is ${currentPlayer}'s turn!`
    }

    function declareWinner(){
        gameOverMessage.textContent =`${winner} is the winner!`
    }

    function declareTie(){
        gameOverMessage.textContent = "It's a tie!"
    }

    return{
        gridDiv,

        declareTurn,
        declareWinner,
        declareTie,
    }
})();

// GAME PLAY MODULE
const GamePlay = (() => {
    let player1 = Player('one', 'x');
    let player2 = Player('two','O');
    let currentPlayer = player1;
    let rounds = 0;
    let gameOver = true;

    function playRound(){
        console.log('round is being played')

        // if(checkWinner === true){
        //     gameOver = true;
        //     DisplayController.displayWinner();
        //     return;
        // }

        if(rounds > 9){
            console.log('The game is a tie');
            DisplayController.displayWinner();
            return;
        }

        getPlayer();

        if(getPlayer() === player1){
            this.textContent = "X";
            
        }else{
            this.textContent = "O"
            
        }

        console.log(`${currentPlayer.getName()}'s turn`)
        console.log(rounds);
        rounds++;
        nextPlayer()
        console.log(`${currentPlayer.getName()}'s turn`)
        console.log(rounds);
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
    }

    
  
    

    let getRounds = () => {
        return rounds
    }

    const CheckWinner = () =>{
        if( board[0] === symbol && board[1] === symbol && board[2] ===symbol || //      horizontal
            board[3] === symbol && board[4] === symbol && board[5] === symbol || //horizontal
            board[6] === symbol && board[7] === symbol && board[8] === symbol || //horizontal
            board[0] === symbol && board[1] === symbol && board[2] === symbol || //vertical
            board[3] === symbol && board[4] === symbol && board[5] === symbol || //vertical
            board[6] === symbol && board[7] === symbol && board[8] === symbol || //vertical
            board[0] === symbol && board[4] === symbol && board[8] === symbol || //diagonal
            board[2] === symbol && board[4] === symbol && board[06] === symbol)   //diagonal
           {
            return true
           }
           return false
    }


    function isGameOver(){
    return gameOver;
    }

    function game(){
        playRound();
        clicked();
    }

    DisplayController.gridDiv.forEach(function(box){
        box.addEventListener('click', playRound);
    });

    return{

        currentPlayer,

        
        playRound,
        getRounds,
        isGameOver,
        nextPlayer,

    }
    }
)();


    //    


//basically, there are three outside modules. these cannot communicate with each other on their own
//when they are passed into the gameplay module then that module can in fact communicate them
//otherwise they do all theyre sepearte thing and allow for no gloabl code



//notify mye if someone clicks a div and where they clicked
//then hey can you play the current player there
//does the current player have a win

//player(instance od player factory)
//gameboard(module purely state data)
//displaycontolrrer(module, purely view)



   //connects the array to the html div based on matching ID and index
//    function attachIDs(){
//         for(let i = 0; i < board.length; i++){
//             let div = document.getElementById(`${i}`);
//             board[i] = div;
//         }
//     };


   // if(this.textContent == ''){
        //     if(turns % 2 == 0){
        //         this.textContent = "X";
        //     }
        //     else{
        //         this.textContent = "O"
        //     }
        //     turns++
        // }

//game state: the data of the board, its ongoing state changes
//game view: the Display Contoller(controls how the DOm looks)
//game logic(the thing htat binds the state the view and the players)

//probably going to want an object to control the flow of the game
    //main goal is to have as little as global code as possible
    //try to tuck everything away inside of a module or factory
    //if you only need one thing use a module
    //if you need multiples use factories

//set up HTML and write JS function that will render the contents of the game board array to the webpage
//(for now just manually fill array with x's and o's)

//build the functions that allow players to add marks to a specific spot on the onboard and then tie it to the DOM, letting players click on game board to place their marker
//include logic that keeps players from playing in spots that are already taken

    //think carefully when each bit of logic should reside
    //Each little piece of functionality should be able to fit in the game, player, or game board objects

//Build the logic that checks for when the game is over.
//should check for 3 in a row and a tie

//Clean up interface to allow players to put in their name
//include a button to start/restart the game
//add a display element that congratulates the winning player

//Optional --- create an AI so player can play against a computer


//------------------------------------------------------------------------------

//MISUNDERSTOOD - gameboard does not have to be dynamically created
//going to code it into the HTML
//BUT i did learn about using map and fill so not a total loss

 // const R = 3
    // const C = 3;
    // const val = " ";
    // const gameArray = Array(R).fill().map(() => Array(C).fill(val));
    // const gameBoardGrid = document.getElementById("gameBoard");

    // //puts the array on the DOM
    // function _displayArray(){
    //     for(i = 0; i < gameArray.length; i++){
    //         for(j = 0; j < gameArray.length; j++){
    //             const div = document.createElement('div');
    //             div.classList.add('box');
    //             gameBoardGrid.appendChild(div);
    //         }
    //     }
    // }

    // _displayArray();
    // console.log(gameArray);