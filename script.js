const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playAround() {
}

function getComputerChoice() {
  let choices = ["rock", "paper", 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

console.log(computerSelection);