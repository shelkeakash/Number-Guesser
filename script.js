let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  const secretNumber = Math.floor(Math.random() * 10);
  return secretNumber;
}

const targ = generateTarget();

function compareGuesses(humanGuess,compGuess,targ){
return getAbsoluteDistance(humanGuess,compGuess,targ)
 
}

function getAbsoluteDistance(humanGuess,compGuess,targ){
   if(humanGuess != compGuess){
  x = Math.abs(humanGuess - targ)
  y = Math.abs(compGuess - targ)
  
  if(x < y)
  return true;

  if(y < x)
  return false;
  }
  else 
  return false;
}


function updateScore(winner){
  if(winner === 'human')
  console.log(humanScore++);
  else
  console.log(computerScore++);
}

function advanceRound(){
  currentRoundNumber++;
}
