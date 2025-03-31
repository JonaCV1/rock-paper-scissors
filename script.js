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
    return "Scissor";
  }
}

let numberOfRounds = 5;
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound(humanChoice, computerChoice) {
  let round = document.querySelector("p.round");
  let score = document.querySelector("p.score");
  let result = document.querySelector("p.result");

  if (humanChoice == computerChoice) {
    roundCount++;
    round.textContent = `Round ${roundCount}: Draw! Both chose ${humanChoice}`;
    score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  } else if (
    (humanChoice == "Rock" && computerChoice == "Scissor") ||
    (humanChoice == "Scissor" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Rock")
  ) {
    roundCount++;
    humanScore++;
    round.textContent = `Round ${roundCount}: You win! ${humanChoice} beats ${computerChoice}`;
    score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  } else {
    roundCount++;
    computerScore++;
    round.textContent = `Round ${roundCount}: You lose! ${humanChoice} doesn't beat ${computerChoice}
    `;
    score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  }

  if (roundCount == numberOfRounds) {
    if (humanScore > computerScore) {
      result.textContent = "Congratulation, you win!";
    } else if (humanScore < computerScore) {
      result.textContent = "Bad luck, you lost";
    } else {
      result.textContent = "Draw! Try again";
    }
  } else if (roundCount == numberOfRounds + 1) {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    round.textContent = " ";
    score.textContent = " ";
    result.textContent = "Lets Play!";
  } else {
    result.textContent = " ";
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanChoice = button.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
