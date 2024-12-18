let humanScore = 0; // Spillerens poeng
let computerScore = 0; // Robotens poeng

document.getElementById("play").addEventListener("click", play); //Her får jeg til at min knapp er trykkelig

function play() {
    const value = document.getElementById("choices").value.toLowerCase(); //gir stein saks eller papir en verdi slik att alle tre har en annerledes verdi
    const choices = ["stein", "saks", "papir"]; //her er stein saks papir elementene
    const robot = choices[Math.floor(Math.random() * choices.length)]; //får roboten til å velge stein saks eller papir tillfeldig
    
    // Resultatmelding
    let resultMessage;

    if (value === robot) {
        resultMessage = "Det er uavgjordt!"; //om resultatet er lik roboten sin kommer denne medlingen opp
    } 
    
    else if (
        (value === "stein" && robot === "saks") || // else if statement som sier om en av disse kondisjonene blir fullført vil det nedefor i koden skje helt til du lukker kurly brackets
        (value === "papir" && robot === "stein") ||
        (value === "saks" && robot === "papir")
    ) {
        resultMessage = "Du vant!";
        humanScore++; // Spillerens poeng
    } 
    
    else {
        resultMessage = "Roboten vant!";
        computerScore++; // Robotens poeng
    }

    // Oppdater HTML
    document.getElementById("result").innerText = resultMessage; // denne og de tre andre nedenfor får teksten i html til å endre
    document.getElementById("rock-paper-scizors").innerText = "Roboten valgte: " + robot;
    document.getElementById("score").innerText = "Dine Poeng: " + humanScore;
    document.getElementById("bot-score").innerText = "Roboten sine poeng: " + computerScore;
}