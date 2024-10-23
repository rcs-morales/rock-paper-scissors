
// gets a random number: 1,2,3 then assign to rock,paper and scissors respectively

function getComputerChoice() {
    let randomGuess = Math.ceil(Math.random()*3);
    let computerChoice = '';

    if (randomGuess === 1 ){
        computerChoice = 'rock';
    } else if (randomGuess === 2) {
        computerChoice = 'paper';
    } 
    else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

// gets a human choice prompt that is not case sensitive(converts it to lower case always)

function getHumanChoice() {

    let humanChoice = '';

    humanChoice = prompt('rock, paper or scissors?').toLowerCase();

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
let countRound = 1;


// plays the round logic by comparing human and computer choices, declares a winner, adds score to winner and adds round counter
function playRound(humanChoice, computerChoice) {
   


    if (humanChoice === 'paper' && computerChoice ==='scissors' || humanChoice === 'scissors' && computerChoice === 'rock' || humanChoice === 'rock' && computerChoice === 'paper'){
        
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else if (computerChoice === 'paper' && humanChoice ==='scissors' || computerChoice === 'scissors' && humanChoice === 'rock' || computerChoice === 'rock' && humanChoice === 'paper') {
        
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        
        humanScore += 1;
    } else {
        
        console.log(`Draw! ${humanChoice} and ${computerChoice} are the same!`);
    }

    countRound++;

    return countRound;
}
   
// plays the game for 5 rounds then ouput the overall winner
function playGame(){

    for(let i=0; i<5; i ++ ){

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`Computer Chose: ${computerSelection}`);
        console.log(`You Chose: ${humanSelection}`);
        playRound(humanSelection,computerSelection);
        
    }
    

    if(humanScore > computerScore){
        console.log("You are the winner!");
    }else{
        console.log("You lost!");
    }
}
