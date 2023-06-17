let computerPoints = 0,
  myPoints = 0;

const tools = ["rock", "paper", "scissors"];

function playRound(playerSelection, computerSelection) {
  switch (computerSelection) {
    case "rock":
      if (playerSelection == "rock") {
        return {
          event: "Computer choose Rock, You choose Rock",
          result: "Tied!",
          computer: 0,
          me: 0,
        };
      } else if (playerSelection == "paper") {
        return {
          event: "Computer choose Rock, You choose Paper",
          result: "you Win! Paper beats Rock",
          computer: 0,
          me: 1,
        };
      } else {
        return {
          event: "Computer choose Rock, You choose Scissors",
          result: "You Lose! Rock beats Scissors",
          computer: 1,
          me: 0,
        };
      }
    case "paper":
      if (playerSelection == "rock") {
        return {
          event: "Computer choose Paper, You choose Rock",
          result: "You Lose! Paper beats Rock",
          computer: 1,
          me: 0,
        };
      } else if (playerSelection == "paper") {
        return {
          event: "Computer Choose Paper, You choose Paper",
          result: "Tied!",
          computer: 0,
          me: 0,
        };
      } else {
        return {
          event: "Computer choose Paper, You choose Scissors",
          result: "You Win! Scissors beats Paper",
          computer: 0,
          me: 1,
        };
      }
    case "scissors":
      if (playerSelection == "rock") {
        return {
          event: "Computer choose Scissors, You Choose Rock",
          result: "You Win! Rock beats Scissors",
          computer: 0,
          me: 1,
        };
      } else if (playerSelection == "paper") {
        return {
          event: "Computer choose Scissors, You choose Paper",
          result: "You Lose! Scissors beats Paper",
          computer: 1,
          me: 0,
        };
      } else {
        return {
          event: "Computer choose Scissors, You choose Scissors",
          result: "Tied!",
          computer: 0,
          me: 0,
        };
      }

    default:
      return {
        event: "You didn't do anything",
        result: "You Lose!",
        computer: 0,
        me: 1,
      };
  }
}

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return tools[choice];
};

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please select").toLocaleLowerCase();
    const computerSelection = getComputerChoice();
    const { event, result, computer, me } = playRound(
      playerSelection,
      computerSelection
    );
    computerPoints += computer;
    myPoints += me;
    console.log(event);
    console.log(result);
    console.log(computerPoints, "computer points");
    console.log(myPoints, "my points");
    console.log(`round ${i + 1}`);
    if (computerPoints == 3 || myPoints == 3) return;
  }
}

game();
