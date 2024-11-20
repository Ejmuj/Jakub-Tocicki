function showPrompt() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('promptBox').style.display = 'block'; // viser boxen hvor du skriver navnet ditt i
} 


function submitPrompt() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('result').innerText = `Hei, ${userInput}!`;
    

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('promptBox').style.display = 'none';
    

    document.getElementById('userInput').value = '';
}