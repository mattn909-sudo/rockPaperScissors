//create function getComputerChoice that randomly returns rock, paper, or scissors
//get a number between 1-100 from math random
//IF less than 33.33 then rock
//ELSEIF greater than 66.66 then scissors
//ELSE paper
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let random = Math.random() * 100;
    if(random < 33.33){
        return "ROCK";
    }
    else if(random > 66.66){
        return "SCISSORS";
    }
    else{
        return "PAPER";
    }
}

const weaponMenu = document.querySelector('.weapons');

weaponMenu.addEventListener('click', (event) => {
  
    let target = event.target;
    switch(target.id){
        case 'rock':
            playRound(getComputerChoice(), "ROCK");
            break;
        case 'paper':
            playRound(getComputerChoice(), "PAPER");
            break;
        case 'scissors':
            playRound(getComputerChoice(), "SCISSORS");
            break;
    }
});

function getHumanChoice(){
    if(input.toUpperCase() == 'ROCK' || input.toUpperCase() == 'PAPER' || input.toUpperCase() == 'SCISSORS'){
        return input.toUpperCase();
    }
    else{
        console.log('Please choose either ROCK, PAPER or SCISSORS');
        return getHumanChoice();
    }
}

const body = document.querySelector('body');
const roundResults = document.createElement('div');
const currentRound = document.createElement('p');
const gameResults = document.createElement('p');
const computersChoice = document.createElement('p');
roundResults.appendChild(computersChoice);
roundResults.appendChild(currentRound);
roundResults.appendChild(gameResults);
body.appendChild(roundResults);

function playRound(computerChoice, humanChoice){

    computersChoice.textContent = ("Computer chose " + computerChoice);
    if(computerChoice == 'ROCK' && humanChoice == 'SCISSORS'){
        currentRound.textContent = ("ROCK beats SCISSORS, Computer wins");
        computerScore++;
    }
    else if(computerChoice == 'PAPER' && humanChoice == 'ROCK'){
        currentRound.textContent= ("PAPER beats ROCK, Computer wins");
        computerScore++;
    }
    else if(computerChoice == 'SCISSORS' && humanChoice == 'PAPER'){
        currentRound.textContent = ("SCISSORS beats PAPER, Computer wins");
        computerScore++;
    }
    if(humanChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        currentRound.textContent = ("ROCK beats SCISSORS, Player wins");
        humanScore++;
    }
    else if(humanChoice == 'PAPER' && computerChoice == 'ROCK'){
        currentRound.textContent = ("PAPER beats ROCK, Player wins");
        humanScore++;
    }
    else if(humanChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        currentRound.textContent = ("SCISSORS beats PAPER, Player wins");
        humanScore++;
    }
    else{
        currentRound.textContent = ("Both players chose " + computerChoice);
    }

    if(computerScore == 5){
        gameResults.textContent = ('The Computer reached 5 points!! We have a winnner!!');
        computerScore = 0;
        humanScore = 0;
    }
    else if(humanScore == 5){
        gameResults.textContent = ('The Player reached 5 points!! We have a winnner!!');
        computerScore = 0;
        humanScore = 0;
    }
    else{
        gameResults.textContent = ('Computer: ' + computerScore + '| Player: ' + humanScore);
    }
    
    
}


