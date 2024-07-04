//create function getComputerChoice that randomly returns rock, paper, or scissors
//get a number between 1-100 from math random
//IF less than 33.33 then rock
//ELSEIF greater than 66.66 then scissors
//ELSE paper

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

function getHumanChoice{

}

console.log(getComputerChoice());
