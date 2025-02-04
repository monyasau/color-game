const colorArray = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown",
    "black", "white", "gray", "violet", "indigo", "cyan", "magenta", "lime", "teal",
    "turquoise", "gold", "silver", "aqua", "navy", "maroon", "beige", "chartreuse",
     "firebrick", "ivory", "lavender", "hotpink", "crimson", "khaki", "orchid"];

let computedArray=[]
let targetColor;
let score = 0;
let gameActive = true;


const targetColorElement = document.querySelector('div[data-testid="colorBox"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreBoard = document.querySelector('[data-testid="score"]');
const buttonContainer = document.querySelector('.button-container');
const newGameButton = document.getElementById("newGame");

const generateNewColors=()=>{
    newGameButton.disabled = true;
    targetColor=""
    computedArray=[]
    gameActive = true;
    while (computedArray.length < 6) {
        const color = colorArray[Math.floor(Math.random() * colorArray.length)];
        if (!computedArray.includes(color)) {
            computedArray.push(color);
        }
    }
    targetColor=computedArray[Math.floor(Math.random()*computedArray.length)];
    gameStatus.textContent="Your move"
    gameStatus.style.color = "#333333";
    newGameButton.disabled = false;
}
const renderOptionButtons=()=>{
    buttonContainer.innerHTML=""
    targetColorElement.style.backgroundColor = targetColor;
    computedArray.forEach((color)=>{
        let optionButton = document.createElement("button")
        optionButton.style.backgroundColor = "#333333";
        optionButton.className = "colorOptionButton"
        optionButton.setAttribute("data-testid","colorOption")
        optionButton.addEventListener("click",()=>checkAnswer(color))
        buttonContainer.appendChild(optionButton)
    })
}
const checkAnswer = (selectedColor) => {
    if (!gameActive) return; // to prevent multiple clicks during an active round
    gameActive = false;
    document.querySelectorAll('button[data-testid="colorOption"').forEach((button, index) => {
        button.style.backgroundColor = computedArray[index];
    });

    if (selectedColor === targetColor) {
        gameStatus.textContent="Correct! 🎉";
        gameStatus.style.color = "green";
        score++;
        scoreBoard.style.color = "green";
        scoreBoard.textContent = `Score: ${score}`;
    } else {
        gameStatus.style.color = "red";
        scoreBoard.style.color = "red";
        gameStatus.textContent="Wrong, try again! ❌";
    }
    setTimeout(startGame,2500)
};
const newGame=()=>{
    score=0
    gameActive=true;
    generateNewColors()
    renderOptionButtons()
}
const startGame=()=>{
    scoreBoard.style.color = "#333333";
    generateNewColors()
    renderOptionButtons()
}
newGame()
newGameButton.addEventListener("click",newGame)