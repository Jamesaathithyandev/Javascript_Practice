const choices = ['rock','paper','scissor'];
const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');
const playerScoreEl = document.getElementById('playerscore');
const computerScoreEl = document.getElementById('computerscore');
let playerScore = 0;
let computerScore = 0;

function playerchoice(playerchoice){

    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice===computerchoice){
        result = "It's A Tie";
    }
    else{
        switch(playerchoice){
            case 'rock':
                result = (computerchoice==='scissor') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'paper':
                result = (computerchoice==='rock') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissor':
                result = (computerchoice==='paper') ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerdisplay.textContent = `Player: ${playerchoice}`;
    computerdisplay.textContent = `Computer: ${computerchoice}`;
    resultdisplay.textContent = `Result: ${result}`;

    resultdisplay.classList.remove("greentext","redtext");


    switch(result){
        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            playerScore++;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            computerScore++;
            break;
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

}