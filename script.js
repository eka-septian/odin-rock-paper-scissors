const options = ["rock", "paper", 'scissors'];

const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playAround(user, computer) {
  if (user == computer) {
    console.log(computer);
    return "it's a tie";
  }
  
  else if (user == "rock" && computer == "scissors" ||
          user == "scissors" && computer == "paper" ||
          user == "paper" && computer == "rock")
          return `You Win! ${user} beats ${computer}`;
  
  else return `You Lose! ${computer} beats ${user}`;

}

function getComputerChoice() {
  const choices = options[Math.floor(Math.random() * options.length)];
  return choices;
}
console.log(playAround(playerSelection, computerSelection));
