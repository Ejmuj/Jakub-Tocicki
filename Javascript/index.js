function showPrompt() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('promptBox').style.display = 'block'; // viser boksen hvor du skriver navnet ditt i
} 


function submitPrompt() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('result').innerText = `Hei, ${userInput}!`; // Skrivr ut en melding basert på hva imput leverte
    document.getElementById('overlay').style.display = 'none'; 
    document.getElementById('promptBox').style.display = 'none'; // Dette er Knappen du kan trykke på for å levere svaret
    document.getElementById('userInput').value = '';
}