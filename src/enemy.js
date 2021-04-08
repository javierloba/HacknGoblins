class Enemy {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.size = 80;
        this.x = this.canvas.width + 20;
        this.y = this.canvas.height/2 - this.size / 2; // Los de a pie salen a la misma altura del player

        this.speed = 5 // Se puede aleatorizar
    }

    draw() {
        this.fillStyle = "#ff6f27";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    updatePosition() {
        // Los enemigos vienen desde la derecha hacia la izquierda
        this.x -= this.speed;
        console.log(`this.x`, this.x)
    }

    isInsideScreen() {
        //"Está el margen derecho del enemigo más hacia dentro de la pantalla que el margen izquierdo de la pantalla?"
        return this.x + this.size > 0;
    }
}