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
    }

    // Create ctx, player and start canvas loop
    start(){
        // Save references to the score
        this.scoreElement = this.gameScreen.querySelector(".score .value");

        // Create canvas & ctx
        this.canvas = this.gameScreen.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");

        // Set the canvas dimensions
        this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
        this.containerWidth = this.canvasContainer.clientWidth;
        this.containerHeight = this.canvasContainer.clientHeight;
        this.canvas.setAttribute("width", this.containerWidth);
        this.canvas.setAttribute("height", this.containerHeight);
        this.player = new Player(this.canvas);

        function handleKeyDown(event) {
            if (event.key === "ArrowUp") {
                this.player.setDirection("up")
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
    }

    startLoop(){
        if(Math.random() > ) {
            const newEnemy = new Enemy(this.canvas, 5)
            this.enemies.push(newEnemy)
        }
    }
    checkCollisions(){}
    gameOver(){}
    updateGameStats(){}
}