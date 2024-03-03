let computerPoints = 0,
  myPoints = 0, 
  round = 0;

const TOOLS = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3)
  return TOOLS[choice]
};

const playGame = (playerSelection) => { 
  const computerSelection = getComputerChoice()
  const {computer, player} = playRound(playerSelection, computerSelection)

  myPoints += player
  computerPoints += computer
  round++

  console.log('my points', myPoints)
  console.log('computer points', computerPoints)
  console.log('round',round)

  if(myPoints === 5 || computerPoints === 5) {
    resultGame()
    myPoints = 0
    computerPoints = 0
    round = 0
  }  
}

const playRound = (playerSelection, computerSelection) => {
  switch (computerSelection) {
    case 'rock':
      if (playerSelection === 'rock') {
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
    default:
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
  }
}

const resultGame = () => {
  console.log(myPoints)
  console.log(computerPoints)
}

//Events
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let result = document.querySelector('#result')

rock.addEventListener('click', () => {
  playGame(TOOLS[0])
  })

paper.addEventListener('click', () => {
  playGame(TOOLS[1])
})

scissors.addEventListener('click', () => {
  playGame(TOOLS[2])
})

