let input = "King";
let chessPiece = input.toLowerCase();

switch (chessPiece) {
  case "king":
    console.log("All directions, only 1 vacant square");
    break;
  case "queen":
    console.log("All directions, any number of vacant squares");
    break;
  case "bishop":
    console.log("Diagonals, any number of vacant squares");
    break;
  case "rook":
    console.log("Forward, backward, left or right in a straight line,any number of vacant squares");
    break;
  case "knight":
    console.log("L shaped, 2 squares in one direction and 1 square in a perpendicular direction (can jump over pieces in his path to the vacant square");
    break;
  case "pawn":
    console.log("Forwards, only 1 vacant square (in case of a capture move, it can move diagonally forward 1 square and when in the starting position it may move 2 vacant squares forward");
    break;
  default:
    console.log("Sorry, you didn't input a valid chess piece, try again.")
}