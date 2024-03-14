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
    resultGame() 
    
    setTimeout(() => {
      playerPoints === 5 ? alert('You Win!') : alert('You Lose!')
      resetGame()
      getMessage()
    }, 100); 
  }

  modal.style.display = 'block';

  resultGame()
  getMessage()
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

const getMessage = () => {
  content.innerHTML= computerPoints || playerPoints || resultMessage === 'Tied!' ? `${eventMessage}<br>${resultMessage}` : null
  content.style.textAlign = 'center'
}

const resetGame = () => { 
  playerPoints = 0
  computerPoints = 0
  round = 0

  resultGame()
}

//Events
const rock = document.querySelector('#rock'),
      paper = document.querySelector('#paper'),
      scissors = document.querySelector('#scissors'),
      playerScore = document.querySelector('#player-score'),
      computerScore = document.querySelector('#computer-score'),
      message = document.querySelector('#message'),
      modal = document.querySelector('#modal'),
      closeContent = document.querySelector('#close'),
      content = document.createElement('div')

content.classList.add('content')
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

closeContent.addEventListener('click', () => {
  modal.style.display = 'none';
})

resultGame()
getMessage()




