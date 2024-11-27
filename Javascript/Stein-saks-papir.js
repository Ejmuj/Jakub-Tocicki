let humanScore = 0 //Poeng
let computerScore = 0 //Poeng

document.getElementById("play").addEventListener("click", play) //Her får jeg til at min knapp er trykkelig
 
function play() {
    let value = document.getElementById("choices").value //gir stein saks eller papir en verdi slik att alle tre har en annerledes verdi.
    const choices = ["stein", "papir", "saks"] //her er stein saks papir elementene
    let robot = choices[Math.floor(Math.random() * 3)] //får roboten til å velge stein saks eller papir tillfeldig
    if (!choices.includes(value)) {
        console.log("Not valid choice") // fielmelding om man ikke ha valgt noe akseptabelt
    }
    if (value === robot) {
        document.getElementById("result").innerText = "It's a tie";
    } else if ((value === "stein" && robot === "saks") ||
               (value === "papir" && robot === "stein") || // denne koden skriver ut hva som skjer om en av disse 3 scenarioene skjer
               (value === "saks" && robot === "papir")) {  
        document.getElementById("result").innerText = "Player won";
        humanScore++; // øker humanScore slik at jeg kan skrive ut senere hvor mye poeng player har
    } else {
        document.getElementById("result").innerText = "Robot won";
        computerScore++; // øker computerScore slik at jeg kan skrive ut senere hvor mye poeng bot-en har
    }
    document.getElementById("score").innerText = "Dine Poeng: " + humanScore 
    document.getElementById("bot-score").innerText = "Bot-en sine poeng: " + computerScore //den og den over printer ut hvor mye poeng hver spiller har
    document.getElementById("rock-paper-scizors").innerText = robot //skriver ut hva bot-en valgdte mellom stein saks og papir



}

