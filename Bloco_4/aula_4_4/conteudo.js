function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function bigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function biggerThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

function posNeg(num1) {
  if (num1 > 0) {
    return "positive";
  } else if (num1 < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

function triangle(ang1, ang2, ang3) {
  if (ang1 + ang2 + ang3 === 180) {
    return true;
  } else {
    console.log("Error, invalid angles for a triangle");
    return false;   
  }
}

function chessPiece(piece) {
  switch (piece.toLowerCase()) {
    case "king":
      return "All directions, only 1 vacant square";
    case "queen":
      return "All directions, any number of vacant squares";
    case "bishop":
      return "Diagonals, any number of vacant squares";
    case "rook":
      return "Forward, backward, left or right in a straight line,any number of vacant squares";
    case "knight":
      return "L shaped, 2 squares in one direction and 1 square in a perpendicular direction (can jump over pieces in his path to the vacant square";
    case "pawn":
      return "Forwards, only 1 vacant square (in case of a capture move, it can move diagonally forward 1 square and when in the starting position it may move 2 vacant squares forward";
    default:
     return "Sorry, you didn't input a valid chess piece, try again."
  }
}



console.log(chessPiece("queen"));