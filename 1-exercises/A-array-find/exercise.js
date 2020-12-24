/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
function findLongNameThatStartsWithA(nam){
  return (nam[0] ==="A") && (nam.length>7);
}
function longNameThatStartsWithA(){
  return names.find(findLongNameThatStartsWithA);
}


console.log(longNameThatStartsWithA());

/* EXPECTED OUTPUT */
// "Alexandra"
