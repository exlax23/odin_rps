const rpsOptions = ['rock', 'paper', 'scissors'];

let playing = false;
let userPoints = 0;
let pcPoints = 0;
let tiePoints = 0;
let botWins;
let playerWins;
let tieGames;
let roundsPlayed;

window.addEventListener("load", (event) => {
    botWins = document.getElementById("botWins");
    playerWins = document.getElementById("playerWins");
    tieGames = document.getElementById("tieGames");
    roundsPlayed = document.getElementById("roundsPlayed");
});

// startGame()
function updateNum(element, num_wins) {
    let newString = element.innerText.slice(0, -1);
    element.innerText = `${newString} ${num_wins}`;
    console.log("LAST STRING:", newString);
}

function updateNotif(play) {
    
}

function playRound(playerSelection) {
    let computerSelection = rpsOptions[Math.floor(Math.random() * rpsOptions.length)];

    if (playerSelection === computerSelection) {
        tiePoints++;
        updateNum(tieGames, tiePoints);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        userPoints++;
        updateNum(playerWins, userPoints);
    } else {
        pcPoints++;
        updateNum(botWins, pcPoints);
    }
}

//if one player gets to 3 points, they win
//if the game gets to 5 rounds, its a tie game, new button to start over
