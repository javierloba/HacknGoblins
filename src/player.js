class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.lives = 1; // Player lives
        this.size = 100; // Para un cuadrado,luego se cambia
        this.x = 50; // Empieza a 50px del borde
        this.y = this.canvas.height/2 - this.size / 2; // Pone al jugador en medio de la pantalla

        this.direction.x = 0; // 1, 0 o -1, arriba o abajo, ojo que este quiero que salte
        this.direction.y = 0;
        this.speed = 5;
    }

    setDirection(direction){
        // No me da la cabeza para hacer un switch ahora
        if (direction === "up") {
            this.direction.y = -1;
        } else if (direction === "down") {
            this.direction.y = 1; // Está en el suelo, no? agacharse?
        } else if (direction === "left") {
            this.direction.x = -1;
        } else if (direction === "right") {
            this.direction.x = 1
        } else if (direction === "stand") {
            this.direction.x = 0;
            this.direction.y = 0; // Esto no se si está bien, linea 50!!!!
        }
    }

    updatePosition(){
        this.y += this.direction.y * this.speed;
        this.x += this.direction.x * this.speed;
    }

    handleScreenCollision(){
        const screenTop = 0; // La línea de arriba del canvas
        const screenBottom = this.canvas.height; // ESTA TENDRE QUE MODIFICARLA!!!! SUELO!!

        const playerTop = this.y;
        const playerBottom = this.y + this.size;

        const screenLeft = 0;
        const screenRight = this.canvas.width; // OJO ESTA QUE HA DE PASAR PANTALLA

        const playerLeft = this.x;
        const playerRight = this.x + this.size;

        if(playerBottom >= screenBottom) {
            this.setDirection("stand"); // PDTE MODIFICAR - SUELO!
        } else if(playerTop <= screenTop) {
            this.setDirection("down")
        } else if (playerLeft <= screenLeft) {
            this.setDirection("right");
        } else if (playerRight >= screenRight){
            this.setDirection("right"); // NO ESTOY SEGURO, HA DE PASAR DE PANTALLA
        } else if (playerTop >= playerTop*2) { // SALTO??
            this.setDirection("down");
        } // else if (playerLeft >= playerLeft*2) QUIERO PARAR EL MOVIMIENTO CUANDO SE DESPULSE LA TECLA

    }

    removeLife(){
        this.lives -= 1;
    }

    draw(){
        this.ctx.fillStyle = "#66D3FA";
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    didCollide(enemy) {}
}