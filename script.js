//---------FACTORIES--------

//PLAYER FACTORY
const Player = (name, symbol)=>{
    name;
    symbol;
    getName = () => console.log(`Player's name is ${name}`);
    getSymbol = () => console.log(`Player's symbol is ${symbol}`);
    setName = (newName) => name = newName; 
    return {
        getName,
        getSymbol,
        setName,
    }
}

const playerOne = Player('one', 'X');
const playerTwo = Player('two','O');


//-------MODULES--------

//GAME BOARD MODULE
const GameBoard = (function() { 

   //store a game board inside of an array inside of a game board object
   const board = new Array(9);
    //const gridDiv = document.querySelectorAll('.box');
   const turns = 0; 
   //all the winning combinations
   const winCombos = [[board[0], board[1], board[2]], //horizontal
                      [board[3], board[4], board[5]], //horizontal
                      [board[6], board[7], board[8]], //horizontal
                      [board[0], board[1], board[2]], //vertical
                      [board[3], board[4], board[5]], //vertical
                      [board[6], board[7], board[8]], //vertical
                      [board[0], board[4], board[8]], //diagonal
                      [board[2], board[4], board[6]], //diagonal
                    ]

    //connects the array to the html div based on matching ID and index
    function createArray(){
        for(let i = 0; i < board.length; i++){
            let div = document.getElementById(`${i}`);
            board[i] = div;
        }
    };

    createArray();

    // gridDiv.forEach(function(box){
    //     box.addEventListener('click', changeValue);
    // })

    // function changeValue(){
    //     this.textContent = "X";
    //     console.log(this.id)
    // }


    // function checkForWin(){
    //     for(let i = 0; i <winCombos.length, i++){
    //         for(let j = 0; j < 3; j++){
    //             if 
    //         }
    //     }
    // };

    function checkForDraw(){

    };

    function reset(){

    }

   //check for win, check for draw ability to reset the boardetc.

    console.log(board);

})();

//DISPLAY CONTROLLER MODULE

const DisplayController = (() => {
    const gridDiv = document.querySelectorAll('.box');
    let turns = 0;

    gridDiv.forEach(function(box){
        box.addEventListener('click', changeValue);
    });
    

    function changeValue(){
        if(turns % 2 == 0){
            this.textContent = "X";
            this.setAttribute('data-value','X');
        }
        else{
            this.textContent = "O"
            this.setAttribute('data-value','O');
        }
        turns++
        console.log(turns);
    }


    //keeps the array of gameboard pieces and the Dom updates
    //wire in event listeners, tell gameplay what got clicked, tellto update bc gameboard had a succesfuly play
})();

// GAMEPLAY MODULE
const GamePlay = ((state, view, player) => {
    console.log('gameflow play');
    //game logic uses player data to update gameboard
    //checks for win conditions
})(GameBoard, DisplayController, Player);



//basically, there are three outside modules. these cannot communicate with each other on their own
//when they are passed into the gameplay module then that module can in fact communicate them
//otherwise they do all theyre sepearte thing and allow for no gloabl code



//notify mye if someone clicks a div and where they clicked
//then hey can you play the current player there
//does the current player have a win

//player(instance od player factory)
//gameboard(module purely state data)
//displaycontolrrer(module, purely view)




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