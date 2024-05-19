let spin = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getWinner(choice) {
    let rollIndex = Math.floor(Math.random() * 3);
    let winner = spin[rollIndex];

    var text = document.getElementById('winnerWrite');
    text.innerHTML = "Computer chooses: " + winner;

    var whoWin = document.getElementById("whoWon");

    if (choice == winner) {
        whoWin.innerHTML = "It's a tie!";
    } else if (choice == "rock" && winner == "scissors" || 
               choice == "paper" && winner == "rock" || 
               choice == "scissors" && winner == "paper") {
        whoWin.innerHTML = "You win!";
        humanScore++;
    } else {
        whoWin.innerHTML = "You lose!";
        computerScore++;
    }

    document.getElementById("humanScoreCount").innerHTML = humanScore;
    document.getElementById("computerScoreCount").innerHTML = computerScore;
}
