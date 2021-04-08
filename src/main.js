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
    splashScreen = buildDom(
        `<main>
        <canvas id="main-canvas" width="1200" height="700"></canvas>
        <h1>Hack'n Goblins</h1>
        <button class="start-button">START</button>
        </main>`
    );

    document.body.appendChild(splashScreen); // Append htmlString to splashScreen

    // Start button functionality
    const startButton = splashScreen.querySelector(".start-button");
    startButton.addEventListener("click", startGame);

    // Create image
    const myImage = new Image();
    myImage.src = "../images/start.png";

    myImage.addEventListener('load', () => {
        //Canvas settings
        const canvas = document.getElementById('main-canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 1200;
        canvas.height = 700;

        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

        // Particles
        let particlesArray = [];
        const numberOfParticles = 5000;

        class Particle {
            constructor(){
                this.x = Math.random()*canvas.width;
                this.y = Math.random()*canvas.width;
                this.speed = 0;
                this.velocity = Math.random() * 3.5;
                this.size = Math.random() * 1.5 + 1;
            }
            update(){
                this.y += this.velocity;
                if (this.y >= canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
            }
            draw(){
                ctx.beginPath();
                ctx.fillStyle = 'white';
                ctx.arc(this.x, this.y, this.size, 10, Math.PI * 2);
                ctx.fill();
            }
        }

        function init(){
            for (let i = 0; i < numberOfParticles; i++){
                particlesArray.push(new Particle)
            }
        }

        init();
        function animate(){
            ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 0.05;
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for(let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        animate();
    });
}
createSplashScreen()

function removeSplashScreen() {
    // Removes splashScreen node, the value remains
    splashScreen.remove();
};

// ==== Game screen ====

function createGameScreen() {
    gameScreen = buildDom(
        `<main class="game container">
            <div class="objects">
                <img id="armor" src="" alt="">
                <img id="key" src="" alt="">
            </div>
            <div class="score">
            <span class="label">Score:</span>
            <span class="value"></span>
            </div>
            <button class="back-button">To title</button>
            <div class="canvas-container">
                <canvas></canvas>
            </div>
        </main>`
        );

    document.body.appendChild(gameScreen); // Append htmlString to gameScreen
    
    return gameScreen; //
};
function removeGameScreen() {
    gameScreen.remove()
};









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
function startGame() {
    removeSplashScreen();
    createGameScreen();

    game = new Game();
    game.gameScreen = gameScreen;
    game.start();
};
function endGame() {}