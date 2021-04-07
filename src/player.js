class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.lives = 1; // Player lives
        this.size = 100; // Para un cuadrado,luego se cambia
        this.x = 50; // Empieza a 50px del borde
        this.y = this.canvas.height/2 - this.size / 2; // Pone al jugador en medio de la pantalla

        this.direction.x = 0; // 1, 0 o -1, arriba o abajo, ojo que este quiero que salte
        this.speed = 5;
    }

    setDirection(direction){
        if (direction === "up") {
            this.direction = -1;
        } else if (direction === "down") {
            this.direction = 1;
        }
    }

    updatePosition(){
        this.y += this.direction * this.speed;
    }

    handleScreenCollision(){
        const screenTop = 0; // La líea de arriba del canvas
        const screenBottom = this.canvas.height;

        const playerTop = this.y;
        const playerBottom = this.y + this.size;
    }

    removeLife(){}

    draw(){}
}