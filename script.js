//store a gameboard inside of an array inside of a gameboard object
//players are going to be stored in objects
//probably going to want an object to control the flow of the game
    //main goal is to have as little as globalcode as possible
    //try to tiuck everything away inside of a module or factory
    //if you only need one thing use a module
    //if you need multiples use facotries

//set up HTML and write JS function that will render the contents of the gameboard array to the webpage
//(for now just manually fill array with x's and o's)

//build the functions that allow players to add marks to a specific spot on the oboard and then tie it to the DOM, letting players click on gameboard to place thei marker 
//include logic that keeps players from playing in spots that are already taken
  
    //think carefully when each bit of logic should reside
    //Each little piece of functionality should be able to fit in the game, player, or gamebaord objects

//Build the logic that checks for when the game is over.
//should check for 3 in a row and a tie

//Clean up interface to allow players to put in their name
//include a button to start/restart the game
//add a display element that congratulates the winning player

//Optional --- create an AI so player can play against a computer