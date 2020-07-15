let absoluteQueenRank = 4;
let absoluteQueenFile = 4;

let absolutePawnRank = 7;
let absolutePawnFile = 7;

let relativePawnRank = absolutePawnRank - absoluteQueenRank;
let relativePawnFile = absolutePawnFile - absoluteQueenFile;

if (relativePawnRank === 0 || relativePawnFile === 0 || relativePawnRank ** 2 === relativePawnFile ** 2) {
  console.log("The Queen can capture the Pawn");
} else {
  console.log("The Queen can't capture the Pawn")
}
