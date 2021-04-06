// ==== Main management of game states ====

// ==== Game instance ====
let game;

// ==== Diferent game screens ====
let splashScreen;
let gameScreen;
let bossScreen;
let gameOverScreen;
let winScreen;

// ==== DOM creation from string representation - buildDom ====

function buildDom(htmlString) {
    const tempDiv = document.createElement("div"); // Creates empty div
    tempDiv.innerHTML = htmlString; // Adds a string to the empty div
    return tempDiv.children[0] // Returns first children - HTML element (htmlString)
};

// ==== Splash screen ====

function createSplashScreen() {
    // HTML string for buildDom
    splashScreen = buildDom( // OJO! Aquí tendré que meter una img para el bucle de renderizado
        `<main>
        <canvas></canvas>
        <img id="intro-castle" src="" alt="">
        <h1>Hack'n Goblins</h1>
        <button class="startButton">Start</button>
        <button class="diffButton">Difficulty</button>
        </main>`
    );

    document.body.appendChild(splashScreen); // Append htmlString to splashScreen

    // Start button functionality
    const startButton = splashScreen.querySelector(".startButton");
    startButton.addEventListener("click", function(){
        console.log("Start game")
        removeSplashScreen()
        createGameScreen()
    })
    startButton.addEventListener("click", startGame)

    // Difficulty button functionality
    const diffButton = splashScreen.querySelector(".diffButton");
    diffButton.addEventListener("click", function(){
        console.log("Under construction");
        removeSplashScreen()
    })
};

function removeSplashScreen() {
    // Removes splashScreen node, the value remains
    splashScreen.remove();
};

// ==== Game screen ====

function createGameScreen() {
    gameScreen = buildDom(
        `<main class="game-container">
            <div class="objects">
                <img id="armor" src="" alt="">
                <img id="key" src="" alt="">
            </div>
            <button>Back to title</button>
            <div class="score">
                <span class="label">Score:</span>
                <span class="value"></span>
            </div>
            <div class="canvas-container">
                <canvas></canvas>
            </div>
        </main>`)

    document.body.appendChild(gameScreen); // Append htmlString to gameScreen
    return gameScreen; // luego se verá
};
function removeGameScreen() {};

// ==== Boss screen ====

function createBossScreen() {};
function removeBossScreen() {};

// ==== Game over screen ====

function createGameOverScreen() {};
function removeGameOverScreen() {};

// ==== Win screen ====

function createWinScreen() {};
function removeWinScreen() {};

// ==== Setting the game state - start, game over or win ====
function startGame() {};
function endGame() {}
window.addEventListener("load", createSplashScreen);