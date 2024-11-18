let humanScore = 0
let computerScore = 0

document.getElementById("play").addEventListener("click", play)
 
function play() {
    let value = document.getElementById("choices").value
    const choices = ["stein", "papir", "saks"]
    let robot = choices[Math.floor(Math.random() * 3)]
    if (!choices.includes(value)) {
        console.log("Not valid choice")
    }
    if (value === robot) {
        document.getElementById("result").innerText = "It's a tie";
    } else if ((value === "stein" && robot === "saks") ||
               (value === "papir" && robot === "stein") ||
               (value === "saks" && robot === "papir")) {
        document.getElementById("result").innerText = "Player won";
        humanScore++; 
    } else {
        document.getElementById("result").innerText = "Robot won";
        computerScore++;
    }
    document.getElementById("score").innerText = "your score" + humanScore
    document.getElementById("bot-score").innerText = "bot score" + computerScore

    document.getElementById("rock-paper-scizors").innerText = robot



}

