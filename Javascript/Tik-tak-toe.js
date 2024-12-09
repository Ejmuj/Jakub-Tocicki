const board = document.getElementById("board");
const winnerText = document.getElementById("winner");
//Id-en som linker til html


let currentPlayer = "X"; //gjør spilleren til X eller O
let gameActive = true;   //slår på spillet
let gameState = Array(9).fill(null); //lager en array med 9 plasser og filler dem med null

// Hva man må gjøre for å vinne.
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//funksjon for å lage brett
function createBoard() {
  board.innerHTML = ""; 
  gameState = Array(9).fill(null); // fortsatt lager enn arry med 9 nuller
  gameActive = true;
  winnerText.textContent = "";
  currentPlayer = "X";
  
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i; 
    cell.addEventListener("click", handleCellClick); // lager en knapp/felt du kan trykke på
    board.appendChild(cell);
  }
}


function handleCellClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;


  if (gameState[index] || !gameActive) return;


  cell.textContent = currentPlayer;
  cell.classList.add("taken");
  gameState[index] = currentPlayer;


  if (checkWinner()) {
    winnerText.textContent = `${currentPlayer} Wins!`;
    gameActive = false;
    return;
  }

  if (gameState.every(cell => cell)) {
    winnerText.textContent = "It's a Draw!";
    gameActive = false;
    return;
  }

  // bytter spilleren
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}


function checkWinner() {
  return winningConditions.some(condition => {
    const [a, b, c] = condition;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}


function resetGame() {
  createBoard();
}


createBoard();