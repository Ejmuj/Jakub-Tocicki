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
  board.innerHTML = ""; // sletter/clearer allt inni boardet
  gameState = Array(9).fill(null); // fortsatt lager enn arry med 9 nuller som kan bli tatt over av X eller O
  gameActive = true; // gjør at spillet er på
  winnerText.textContent = ""; // fjerner all tekst
  currentPlayer = "X"; // setter spillern til X
  
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div"); //lager felt
    cell.classList.add("cell"); //Gir navn til feltet slik at jeg kan endre på det senere i css
    cell.dataset.index = i; //lar meg lage nye data atributter til en html element
    cell.addEventListener("click", handleCellClick); // lager en knapp/felt du kan trykke på
    board.appendChild(cell); // her leegger det cell elementen til board elementet 
  }
}


function handleCellClick(e) {
  const cell = e.target; // får html delen som var trykket til å reperesentere et felt på boardet
  const index = cell.dataset.index; // dette henter data-index atributten av feltet som var trykket


  if (gameState[index] || !gameActive) return; // Denne koden sjekker om spillet enten ikke er aktivt eller om cellen du trykket på er allerede fylt, som forhider klikk på allerede fylte celler eller å gjøre noe etter spillet er over.


  cell.textContent = currentPlayer; // fyller feltet med symbolet til spilleren
  cell.classList.add("taken"); // lager en ny classe som kan indikere at et felt er tatt
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

  // bytter spilleren fra x til O
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