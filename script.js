function randomInt(maxNumber) {
  let choice = Math.floor(Math.random() * maxNumber);
  return choice;
}

function getComputerChoice() {
  if (randomInt(3) == 0) {
    return "Rock";
  } else if (randomInt(3) == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt(
    "Select one option to play: \n- Rock \n- Paper \n- Scissor"
  );
  let lowerChoice = choice.toLowerCase();
  return lowerChoice[0].toUpperCase() + lowerChoice.slice(1);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(`Draw! Both chose ${humanChoice}`);
  } else if (
    (humanChoice == "Rock" && computerChoice == "Scissor") ||
    (humanChoice == "Scissor" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${humanChoice} doesn't beat ${computerChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
