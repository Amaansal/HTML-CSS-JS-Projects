

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElem();  

let isAutoPlaying = false;
let intervalId; 

//const autoPlay = () => {}


function autoPlay() {
  if (!isAutoPlaying) {

    intervalId = setInterval( () => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    isAutoPlaying = true;
    
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false; 
  } 
}


document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock')
  });
document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper')
  });
document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors')
  })

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');

  }else if (event.key === 'p') {
    playGame('paper');
    
  }else if (event.key === 's') {
    playGame('scissors');
  } 
});







function scoreTrack(result) {
  if (result === 'Tie') {
    score.ties ++ ;
  } else if (result === 'Win') {
    score.wins++ ;
  } else {
    score.losses++ ;
  }        
};

function pickComputerMove(){
  let randomNum = Math.random();
  let computerMove='';

  if (randomNum >=0 && randomNum <1/3) {
    computerMove = 'rock';

  } else if ((randomNum>=1/3) && (randomNum<2/3)) {
    computerMove = 'paper'; 

  }else {
    computerMove = 'scissors'
  }

  return computerMove;
}


function playGame(userMove) {   
  let computerMove = pickComputerMove();
  let result = '';   
    

  if (computerMove === 'rock') {
    if (userMove === 'rock'){
      
      result='Tie';
      
    } else if (userMove ==='paper') {
      result = 'Win';
      
    } else {
      result = 'Lose';            
    }       
          
  } 
  else if (computerMove === 'paper') {
    
    if (userMove === 'rock'){ 
      result='Lose';
      
    } else if (userMove ==='paper') {
      result = 'Tie';
      
    } else {
      result = 'Win';
      
    }
  
  } 
  else {
    
    if (userMove === 'rock'){ 
      result='Win';
      
    } else if (userMove ==='paper') {
      result = 'Lose';
      
    } else {
      result = 'Tie';
      
    }
  }

  scoreTrack(result);

  //local storage to save offline, only takes in string so use json.stringify()
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElem();      

  document.querySelector('.js-result'). 
  innerHTML = result;

  document.querySelector('.js-moves').
  innerHTML = `
  you 
  <img src="../images/${userMove}-emoji.png" class="move-icon">
  <img src="../images/${computerMove}-emoji.png" class = "move-icon">
  computer`;

  
}      


function updateScoreElem() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;
}
