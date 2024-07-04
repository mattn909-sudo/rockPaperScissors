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

function getHumanChoice(){
    let input = prompt("Choose ROCK,PAPER, or SCISSORs:");
    if(input.toUpperCase() == 'ROCK' || input.toUpperCase() == 'PAPER' || input.toUpperCase() == 'SCISSORS'){
        return input.toUpperCase();
    }
    else{
        console.log('Please choose either ROCK, PAPER or SCISSORS');
        return getHumanChoice();
    }
}



function playRound(computerChoice, humanChoice){
    console.log("Computer chose " + computerChoice);
    if(computerChoice == 'ROCK' && humanChoice == 'SCISSORS'){
        console.log("ROCK beats SCISSORS, Computer wins");
        computerScore++;
    }
    else if(computerChoice == 'PAPER' && humanChoice == 'ROCK'){
        console.log("PAPER beats ROCK, Computer wins");
        computerScore++;
    }
    else if(computerChoice == 'SCISSORS' && humanChoice == 'PAPER'){
        console.log("SCISSORS beats PAPER, Computer wins");
        computerScore++;
    }
    if(humanChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        console.log("ROCK beats SCISSORS, Player wins");
        humanScore++;
    }
    else if(humanChoice == 'PAPER' && computerChoice == 'ROCK'){
        console.log("PAPER beats ROCK, Player wins");
        humanScore++;
    }
    else if(humanChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        console.log("SCISSORS beats PAPER, Player wins");
        humanScore++;
    }
    else{
        console.log("Both players chose " + computerChoice);
    }

    console.log('Score');
    console.log('Computer: ' + computerScore + '| Player: ' + humanScore);
}

function playGame(){
    for(let i = 0; i< 5; i++){
        playRound(getComputerChoice(), getHumanChoice());
    }
}

playGame();

