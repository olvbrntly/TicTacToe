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
    //connects the array to the html div based on matching ID and index
    function createArray(){
        for(let i = 0; i < board.length; i++){
            let div = document.getElementById(`${i}`);
            board[i] = div;
        }
    };

    createArray();

    console.log(board);

})();

// GAMEPLAY MODULE

const GamePlay =(() => {
    console.log("GamePlay setup");
})();


//DISPLAY CONTROLLER MODULE

const DisplayController = (() => {
    console.log('displayController setup');
})();

const GameFlow = (() => {
    console.log('gameflow setup');
})();




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