let computerPoints = 0,
  myPoints = 0;

const TOOLS = ['rock', 'paper', 'scissors'];

const playRound = (playerSelection, computerSelection) => {
  switch (computerSelection) {
    case 'rock':
      if (playerSelection == 'rock') {
        return {
          event: 'Computer choose Rock, You choose Rock',
          result: 'Tied!',
          computer: 0,
          me: 0,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'Computer choose Rock, You choose Paper',
          result: 'you Win! Paper beats Rock',
          computer: 0,
          me: 1,
        };
      } else {
        return {
          event: 'Computer choose Rock, You choose Scissors',
          result: 'You Lose! Rock beats Scissors',
          computer: 1,
          me: 0,
        };
      }
    case 'paper':
      if (playerSelection == 'rock') {
        return {
          event: 'Computer choose Paper, You choose Rock',
          result: 'You Lose! Paper beats Rock',
          computer: 1,
          me: 0,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'Computer Choose Paper, You choose Paper',
          result: 'Tied!',
          computer: 0,
          me: 0,
        };
      } else {
        return {
          event: 'Computer choose Paper, You choose Scissors',
          result: 'You Win! Scissors beats Paper',
          computer: 0,
          me: 1,
        };
      }
    case 'scissors':
      if (playerSelection == 'rock') {
        return {
          event: 'Computer choose Scissors, You Choose Rock',
          result: 'You Win! Rock beats Scissors',
          computer: 0,
          me: 1,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'Computer choose Scissors, You choose Paper',
          result: 'You Lose! Scissors beats Paper',
          computer: 1,
          me: 0,
        };
      } else {
        return {
          event: 'Computer choose Scissors, You choose Scissors',
          result: 'Tied!',
          computer: 0,
          me: 0,
        };
      }

    default:
      return {
        event: "You didn't do anything",
        result: 'You Lose!',
        computer: 0,
        me: 1,
      };
  }
}

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return TOOLS[choice];
};

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


rock.addEventListener('click', () => {

  const computerSelection = getComputerChoice();
  return playRound(TOOLS[0], computerSelection)
})

paper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  return playRound(TOOLS[1], computerSelection)
  
})

scissors.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  return playRound(TOOLS[2], computerSelection)
  
})