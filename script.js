const options = ["rock", "paper", 'scissors'];

function game() {
  let playerCount = 0;
  let computerCount = 0;
  for (let i = 0; i < 5; i++) {
    const player = getPlayerSelection();
    const computer = getComputerChoice();
    const play = playRound(player, computer);
    console.log(play);

    const winner = checkWinner(player, computer);
    if (winner == "player") playerCount++;
    else if (winner == "computer") computerCount++;
  }
  if (playerCount < computerCount) console.log("You Lose!");
  else if (playerCount > computerCount) console.log("You Win!");
  else console.log("it's a tie!");
}

function getPlayerSelection() {
  let run = true;
  while (run) {
    const inChoise = prompt("Rock Paper Scissors");
    const choiseLower = inChoise.toLocaleLowerCase();
    if (choiseLower == null) continue;
    if (options.includes(choiseLower)) {
      run = false;
      return choiseLower;
    }
  
  }
}

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(player, computer) {
  if (player == computer) return "tie";
  else if (player == "rock" && computer == "scissors" ||
          player == "scissors" && computer == "paper" ||
          player == "paper" && computer == "rock")
          return "player";
  else return "computer";

}

function playRound(player, computer) {
  let result = checkWinner(player, computer);
  if (result == "tie") {
    return "it's a tie";
  }
  else if (result == "player") {
    return `You Win! ${player} beats ${computer}`;
  }
  else return `You Lose! ${computer} beats ${player}`;
}

game();
