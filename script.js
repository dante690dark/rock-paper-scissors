let computerPoints = 0,
  myPoints = 0;

const TOOLS = ['rock', 'paper', 'scissors']

const playRound = (playerSelection, computerSelection) => {
  switch (computerSelection) {
    case 'rock':
      if (playerSelection == 'rock') {
        return {
          event: 'Computer choose Rock, You choose Rock',
          result: 'Tied!',
          computer: 0,
          player: 0,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'Computer choose Rock, You choose Paper',
          result: 'you Win! Paper beats Rock',
          computer: 0,
          player: 1,
        };
      } else {
        return {
          event: 'Computer choose Rock, You choose Scissors',
          result: 'You Lose! Rock beats Scissors',
          computer: 1,
          player: 0,
        };
      }
    case 'paper':
      if (playerSelection == 'rock') {
        return {
          event: 'Computer choose Paper, You choose Rock',
          result: 'You Lose! Paper beats Rock',
          computer: 1,
          player: 0,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'Computer Choose Paper, You choose Paper',
          result: 'Tied!',
          computer: 0,
          player: 0,
        };
      } else {
        return {
          event: 'Computer choose Paper, You choose Scissors',
          result: 'You Win! Scissors beats Paper',
          computer: 0,
          player: 1,
        };
      }
    case 'scissors':
      if (playerSelection == 'rock') {
        return {
          event: 'Computer choose Scissors, You Choose Rock',
          result: 'You Win! Rock beats Scissors',
          computer: 0,
          player: 1,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'Computer choose Scissors, You choose Paper',
          result: 'You Lose! Scissors beats Paper',
          computer: 1,
          player: 0,
        };
      } else {
        return {
          event: 'Computer choose Scissors, You choose Scissors',
          result: 'Tied!',
          computer: 0,
          player: 0,
        };
      }

    default:
      return {
        event: "You didn't do anything",
        result: 'You Lose!',
        computer: 0,
        player: 1,
      };
  }
}


const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3)
  return TOOLS[choice]
};

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let result = document.querySelector('#result')

const playGame = (playerSelection) => { 
  const computerSelection = getComputerChoice()
  const {computer, player, event} = playRound(playerSelection, computerSelection)
  console.log('my point', player)
  console.log('the computer',computer)
  console.log('event',event)
  myPoints += player
  computerPoints += computer
  prueba()
}


rock.addEventListener('click', () => {
  playGame(TOOLS[0])
  })

paper.addEventListener('click', () => {
  playGame(TOOLS[1])
})

scissors.addEventListener('click', () => {
  playGame(TOOLS[2])
})


const prueba = () => {
  console.log(myPoints)
  console.log(computerPoints)
}