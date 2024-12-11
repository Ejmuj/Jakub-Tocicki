

function showPrompt() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('promptBox').style.display = 'block'; // viser boxen hvor du skriver navnet ditt i
} 

function submitPrompt() {
    const userInput = document.getElementById('userInput').value
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('promptBox').style.display = 'none';
    document.getElementById('userInput').value = '';
}

document.getElementById("calculate").addEventListener("click", calculate)

function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("choseMethod").value;
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }


    let result;
    switch (operator) {
        case "+": // Case virker silk at om noe blir valgt kjører operasjonen nedenfor
            result = num1 + num2
            document.getElementById("result").innerText = result
            break;
        
        case "-":
            result = num1 - num2
            document.getElementById("result").innerText = result
        break;
            
        case "*":
            result = num1 * num2
            document.getElementById("result").innerText = result
        break;

        case "/":
            result = num1 / num2
            document.getElementById("result").innerText = result
        break;
        
        default:
            result = "ugyldig operator"
        

    }
    
    
    
}