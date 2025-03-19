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

function getHumanChoice() {
  let choice = prompt(
    "Select one option to play: \n- Rock \n- Paper \n- Scissor"
  );
  let lowerChoice = choice.toLowerCase();
  return lowerChoice[0].toUpperCase() + lowerChoice.slice(1);
}

function playGame() {
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
      humanScore++;
    } else {
      console.log(`You lose! ${humanChoice} doesn't beat ${computerChoice}`);
      computerScore++;
    }
  }

  let numberOfRounds = 5;
  for (let i = 1; i <= numberOfRounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Player: ${humanScore} - Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulation, you win!");
  } else if (humanScore < computerScore) {
    console.log("Bad luck, you lost");
  } else {
    console.log("Draw! Try again");
  }
}

playGame();
