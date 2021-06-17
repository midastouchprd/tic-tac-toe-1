/* 1) Define required constants
2) Define required variables used to track the state of the game
3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
4) Upon loading the app should:
    4.1) Initialize the state variables
    4.2) Render those values to the page
    4.3) Wait for the user to click a square
5) Handle a player clicking a square
6) Handle a player clicking the replay button */

/* 1) Define required constants:
    1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.



2) Define required variables used to track the state of the game:

    2.1) Use a board array to represent the squares.


        
        The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.

        

    4.2) Render those state variables to the page:
        4.2.1) Render the board:

            4.2.1.1) Loop over each of the 9 elements that represent the squares on the page, and for each iteration:

                4.3.1.1.3) Set the background color of the current element by using the value as a key on the colors lookup object (constant).

        4.2.2) Render a message:
            4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
            4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
            4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
    4.3) Wait for the user to click a square
5) Handle a player clicking a square:
    5.1) Obtain the index of the square that was clicked by either:
        5.1.1) "Extracting" the index from an id assigned to the element in the HTML, or
        5.1.2) Looping through the cached square elements using a for loop and breaking out when the current square element equals the event object's target.
    5.2) If the board has a value at the index, immediately return because that square is already taken.
    5.3) If winner is not null, immediately return because the game is over.
    5.4) Update the board array at the index with the value of turn.
    5.5) Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
    5.6) Set the winner variable if there's a winner:
        5.6.1) Loop through the each of the winning combination arrays defined.
        5.6.2) Total up the three board positions using the three indexes in the current combo.
        5.6.3) Convert the total to an absolute value (convert any negative total to positive).
        5.6.4) If the total equals 3, we have a winner! Set winner to the board's value at the index specified by the first index in the combo array. Exit the loop.
    5.7) If there's no winner, check if there's a tie:
        5.7.1) Set winner to 'T' if there are no more nulls in the board array.
    5.8) All state has been updated, so render the state to the page (step 4.2).

6) Handle a player clicking the replay button:
    6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).*/

/* Constants */

const winCombos = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diags
  [0, 4, 8],
  [2, 4, 6],
];

/* Variables */

let gameState;
let currentTurn;
let winner;

const $gameboard = $("#gameboard"); // jquery element for div surronding the board

const $squares = $(".game-sq"); //jquery array of all the squares

// this is probably work as reset, maybe change to startGame?
function initGame() {
  //null equals empty square
  //1 === 'X'
  //-1 === 'O'
  gameState = [null, null, null, null, null, null, null, null, null];
  currentTurn = 1;
  winner = null;
}

function renderBoard() {
  gameState.forEach((squareMarker, gameStateIndex) => {
    console.log("======GAMESTATE FOR EACH LOOP BEGIN======");
    console.log(squareMarker);
    console.log(gameStateIndex);
    let square = $squares.eq(gameStateIndex);
    console.log("square element being checked: ", square);
    gameMarker(square, squareMarker);
    console.log("======GAMESTATE FOR EACH LOOP END======");
  });
}

initGame();
renderBoard();

function gameMarker(squareElem, value) {
  if (value === 1) {
    squareElem.text("X");
  } else if (value === -1) {
    squareElem.text("O");
  }
}

// function handleClick() {
//   console.log("be i working?");
//   renderBoard();
// }

// if any of the win combos add up to either 3 or -3, then the player who's turn it is has won
// iterate over win combs array. for each nested array, needs to add to 3 or negative 3.

function checkWinner() {
  winCombos.forEach;

  if (points === 3) {
    winner = 1;
  }
  if (points === -3) {
    winner = -1;
  }
}

$gameboard.on("click", ".game-sq", handleClick);

initGame();
