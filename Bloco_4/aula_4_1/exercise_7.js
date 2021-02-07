let grade = 67;

if (grade <= 100 && grade >= 90) {
  console.log("You got an A!");
} else if (grade < 90 && grade >= 80) {
  console.log("You got a B!");
} else if (grade < 80 && grade >= 70) {
  console.log("You got a C!");
} else if (grade < 70 && grade >= 60) {
  console.log("You got a D!");
} else if (grade < 60 && grade >= 50) {
  console.log("You got an E!");
} else if (grade < 50 && grade >= 0) {
  console.log("you got an F!");
} else {
  console.log("Error, the grade is outside the accepted range (it must be a number between 0 and 100")
}