// Intern logics

class Game {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.enemies = [];
        this.player = null;
        this.gameIsOver = false;
        this.gameIsWin = false;
        this.gameScreen = null;
        this.score = 0;
        this.scoreElement = undefined;

        this.framesCounter = 0;
        this.gameImage = new Image();
        this.gameImage.src = "images/fondo-game.png";

        this.playerKeys = {
            SPACE: 32
        }
    }

    // Create ctx, player and start canvas loop
    start(){
        // Save references to the score
        this.scoreElement = this.gameScreen.querySelector(".score .value");

        // Create canvas & ctx
        this.canvas = this.gameScreen.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.ctx.drawImage(this.gameImage, 0, 0, this.canvas.width, this.canvas.height);

        // Set the canvas dimensions
        this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
        this.containerWidth = this.canvasContainer.clientWidth;
        this.containerHeight = this.canvasContainer.clientHeight;
        this.canvas.setAttribute("width", this.containerWidth);
        this.canvas.setAttribute("height", this.containerHeight);

        this.player = new Player(this.canvas, "../images/minotaur.png", this.playerKeys);

        function handleKeyDown(event) {
            if (event.key === "ArrowUp") {
                if(this.player.y >= this.player.y0) {
                    this.player.y -= this.player.vy;
                    this.player.vy -= 12;
                  }
            } else if (event.key === "ArrowDown") {
                this.player.setDirection("down")
            } else if (event.key === "ArrowLeft") {
                this.player.setDirection("left")
            } else if (event.key === "ArrowRight") {
                this.player.setDirection("right")
            }
        };

        const boundHandleKeyDown = handleKeyDown.bind(this);

        document.body.addEventListener("keydown", boundHandleKeyDown)
        this.startLoop()
    }

    startLoop(){
        const loop = () => {
            this.framesCounter++;

            if (this.enemies.length < 20) {
                if(Math.random() > 0.95) { // Con esto podremos hacer un selector de dificultad (level)
                    const newEnemy = new Enemy(this.canvas, 8, "../images/goblinRun.png")
                    this.enemies.push(newEnemy)
                }
            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            // Comprobar si el jugador ha chocado con enemigos
            this.checkCollisions();
            // Actualiza posición y ve que esté dentro de la pantalla
            this.player.updatePosition();
            this.player.move();
            this.player.handleScreenCollision()
            //
            this.enemies = this.enemies.filter((enemy) => {
                enemy.updatePosition();
                return enemy.isInsideScreen()
            })
            // Limpiar canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // Dibujar de nuevo
            this.ctx.drawImage(this.gameImage, 0, 0, this.canvas.width, this.canvas.height);
            this.player.draw(this.framesCounter);
            this.enemies.forEach((enemy) => {
                enemy.draw(this.framesCounter);
            });
            // romper el loop game over
            if(!this.gameIsOver){
                window.requestAnimationFrame(loop);
            }
            this.updateGameStats();
        }
        window.requestAnimationFrame(loop);
    }

    checkCollisions(){
        this.enemies.forEach((enemy ,enemyIndex) => {
            if (this.player.didCollide(enemy)) {
                this.player.removeLife();

                //mover el enemigo fuera de la pantalla
                enemy.x = 0 - enemy.width;

                if (this.player.lives === 0) {
                this.gameOver();
                }
            }
            this.player.bullets.forEach((bullet, bulletIndex) => {
                if(enemy.didCollide(bullet)) {
                    this.enemies.splice(enemyIndex, 1)
                    this.player.bullets.splice(bulletIndex, 1)
                }
            })
        });
    }
    gameOver(){
        this.gameIsOver = true;
        endGame(this.score);
    }
    updateGameStats(){
        this.score += 10;
        this.scoreElement.innerHTML = this.score;
    }
}