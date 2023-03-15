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

function updateNum(id, num) {
    const element = document.querySelector(`#${id} span`);
    element.textContent = num;
}

function updateNotif(play) {
    // todo
}
function startGame() {
    // todo
}
function checkGameOver() {
    if (playerWins === 3 || botWins === 3) {
        // todo
    }
}

function playRound(playerSelection) {
    let computerSelection = rpsOptions[Math.floor(Math.random() * rpsOptions.length)];

    if (playerSelection === computerSelection) {
        tiePoints++;
        updateNum("tieGames", tiePoints);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        userPoints++;
        updateNum("playerWins", userPoints);
    } else {
        pcPoints++;
        updateNum("botWins", pcPoints);
    }
}

//add game start function
    //onpageload, check playing status. if false, add show start game button.
    //start game button makes buttons clickable
//add game end function
    //make buttons unclickable
    //show you lose/win message
    //update playing status to false