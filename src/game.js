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
        this.canvasContainer = this.gameScreen.querySelector(".canvas-container")
        this.containerWidth = this.canvasContainer.clientWidth;
        this.clientHeight = this.canvasContainer.clientHeight;
        this.canvas.setAttribute("width", this.containerWidth);
        this.canvas.setAttribute("height", this.containerHeight);

        console.log(this.containerWidth)
        //this.player = new Player();
    }
    startLoop(){}
    checkCollisions(){}
    gameOver(){}
    updateGameStats(){}
}