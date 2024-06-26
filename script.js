let computerPoints = 0,
  playerPoints = 0, 
  round = 0,
  eventMessage,
  resultMessage

const TOOLS = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3)
  return TOOLS[choice]
};

const playGame = (playerSelection) => { 
  const computerSelection = getComputerChoice()
  const {event, result, computer, player} = playRound(playerSelection, computerSelection)

  playerPoints += player
  computerPoints += computer

  eventMessage = event  
  resultMessage = result
  round++

  if(playerPoints === 5 || computerPoints === 5) {
    
    setTimeout(() => {

      if(playerPoints === 5) {
        content.textContent = 'Congratulation You Win this match!' 
      }else{
        content.textContent = 'Sorry You Lose this match!'
      }

      close.textContent = "play again"
    }, 50); 
  }

  modal.style.display = 'block';
  close.textContent = "continue"

  content.innerHTML = computerPoints || playerPoints || resultMessage === 'Tied!' ? `${eventMessage}<br>${resultMessage}` : null
  content.style.textAlign = 'center'

  resultGame()
  
}

const playRound = (playerSelection, computerSelection) => {
  switch (computerSelection) {
    case 'rock':
      if (playerSelection === 'rock') {
        return {
          event: 'You choose Rock, Computer choose Rock',
          result: 'Tied!',
          computer: 0,
          player: 0,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: ' You choose Paper, Computer choose Rock',
          result: 'You Win! Paper beats Rock',
          computer: 0,
          player: 1,
        };
      } else {
        return {
          event: 'You choose Scissors, Computer choose Rock',
          result: 'You Lose! Rock beats Scissors',
          computer: 1,
          player: 0,
        };
      }
    case 'paper':
      if (playerSelection == 'rock') {
        return {
          event: 'You choose Rock, Computer choose Paper',
          result: 'You Lose! Paper beats Rock',
          computer: 1,
          player: 0,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'You choose Paper, Computer Choose Paper',
          result: 'Tied!',
          computer: 0,
          player: 0,
        };
      } else {
        return {
          event: 'You choose Scissors, Computer choose Paper',
          result: 'You Win! Scissors beats Paper',
          computer: 0,
          player: 1,
        };
      }
    default:
      if (playerSelection == 'rock') {
        return {
          event: 'You Choose Rock, Computer choose Scissors',
          result: 'You Win! Rock beats Scissors',
          computer: 0,
          player: 1,
        };
      } else if (playerSelection == 'paper') {
        return {
          event: 'You choose Paper, Computer choose Scissors',
          result: 'You Lose! Scissors beats Paper',
          computer: 1,
          player: 0,
        };
      } else {
        return {
          event: 'You choose Scissors, Computer choose Scissors',
          result: 'Tied!',
          computer: 0,
          player: 0,
        };
      }
  }
}

const resultGame = () => {
  playerScore.textContent =  `Point: ${playerPoints}` 
  computerScore.textContent = `Point: ${computerPoints}`
}

const resetGame = () => { 
  playerPoints = 0
  computerPoints = 0
  round = 0

  resultGame()
}

//Events
const rock = document.querySelector('#button-rock'),
      paper = document.querySelector('#button-paper'),
      scissors = document.querySelector('#button-scissors'),
      playerScore = document.querySelector('#player-score'),
      computerScore = document.querySelector('#computer-score'),
      message = document.querySelector('#message'),
      close = document.querySelector('#close'),
      modal = document.querySelector('.modal'),
      content = document.createElement('div')

message.appendChild(content)

rock.addEventListener('click', () => {
  playGame(TOOLS[0])
})

paper.addEventListener('click', () => {
  playGame(TOOLS[1])
})

scissors.addEventListener('click', () => {
  playGame(TOOLS[2])
})

close.addEventListener('click', () => {
  modal.style.display = 'none';

  if(playerPoints === 5 || computerPoints === 5) {
    resetGame() 
  }
})

resultGame()