
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
        
        // console.log (`You Lose! ${computerChoice} beats ${humanChoice}`);
        const rndResult = document.createElement("div");
        rndResult.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        container.appendChild(rndResult);

        computerScore++;

    }
    else if (computerChoice === 'paper' && humanChoice ==='scissors' || computerChoice === 'scissors' && humanChoice === 'rock' || computerChoice === 'rock' && humanChoice === 'paper') {
        
        // console.log (`You Win! ${humanChoice} beats ${computerChoice}`);
        const rndResult = document.createElement("div");
        rndResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        container.appendChild(rndResult);

        humanScore++;

    } else {
        // console.log (`Draw! ${humanChoice} and ${computerChoice} are the same!`);
        const rndResult = document.createElement("div");
        rndResult.textContent = `Draw! ${humanChoice} and ${computerChoice} are the same!`; 
        container.appendChild(rndResult);

    }
}
   
// plays the game for 5 rounds then ouput the overall winner
// function playGame(){

//     for(let i=0; i<5; i ++ ){

//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         console.log(`Computer Chose: ${computerSelection}`);
//         console.log(`You Chose: ${humanSelection}`);
//         playRound(humanSelection,computerSelection);
        
//     }
    

//     if(humanScore > computerScore){
//         console.log("You are the winner!");
//     }else{
//         console.log("You lost!");
//     }
// }

const container = document.querySelector("#container");

const btnRock = document.createElement("button");
btnRock.id = "rock";
btnRock.textContent = "Rock";
btnRock.setAttribute("style", "margin:10px;");

const btnPaper = document.createElement("button");
btnPaper.id = "paper";
btnPaper.textContent = "Paper";
btnPaper.setAttribute("style", "margin:10px;");
 

const btnScissors = document.createElement("button");
btnScissors.id = "scissors";
btnScissors.textContent = "Scissors";
btnScissors.setAttribute("style", "margin:10px;");

const divScore = document.createElement("div");

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
container.appendChild(divScore);

const buttons = document.querySelectorAll("button");

//to loop through each button and add an event for each  button click
buttons.forEach((button) => {

    button.addEventListener("click", () => {
        
        if (button.id === 'rock') {
            let humanSelection = 'rock';
            let computerSelection = getComputerChoice();

            playRound(humanSelection,computerSelection);
            overallWinner();
            divScore.textContent = `Your Score: ${humanScore} | Machine Score: ${computerScore}`;


        }else if (button.id === 'paper') {
            let humanSelection = 'paper';
            let computerSelection = getComputerChoice();

            playRound(humanSelection,computerSelection);
            overallWinner();
            divScore.textContent = `Your Score: ${humanScore} | Machine Score: ${computerScore}`;


        }else if (button.id === 'scissors'){
            let humanSelection = 'scissors';
            let computerSelection = getComputerChoice();

            playRound(humanSelection,computerSelection);
            overallWinner();

            console.log(humanScore);
            console.log(computerScore);
            divScore.textContent = `Your Score: ${humanScore} | Machine Score: ${computerScore}`;
        }
    });
});

//to show the overall winner when score reaches 5
function overallWinner() {

    if(humanScore === 5) {

        const divResult = document.createElement("div");
        divResult.textContent = "You are the winner!";
        container.appendChild(divResult);


    } else if (computerScore === 5){

        const divResult = document.createElement("div");
        divResult.textContent = "You lost!";
        container.appendChild(divResult);

    }
}






