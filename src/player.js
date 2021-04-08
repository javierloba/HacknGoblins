class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.lives = 1; // Player lives
        this.size = 100; // Para un cuadrado,luego se cambia
        this.x = 50; // Empieza a 50px del borde
        this.y = this.canvas.height * 0.80 - this.size; // Pone al jugador en el "suelo"
        this.y0 = this.canvas.height * 0.80 - this.size ;

        this.directionX = 0; // 1, 0 o -1, arriba o abajo
        this.directionY = 0;
        this.speed = 5;

        this.vy = 1;
        this.gravity = 0.4;
    }

    setDirection(direction){
        switch (direction) {
            case "up":
                this.directionY = -1;
                break;
            case "down":
                this.directionY = 1;
                break;
            case "left":
                this.directionX = -1;
                break;
            case "right":
                this.directionX = 1;
                break;
            case "stand":
                this.directionX = 0;
                this.directionY = 0;
                break;
        }
    }

    updatePosition(){
        this.x += this.directionX * this.speed;
        this.draw()
    }

    move() {
        if(this.y <= this.y0){
            this.y += this.vy;
            this.vy += this.gravity;
        } else {
            this.vy = 1;
            this.y = this.y0;
        }
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

        if(playerLeft <= screenLeft) {
            this.setDirection("right");
        } else if (playerRight >= screenRight){
            // if (cambiodepantalla)
            this.setDirection("right"); // NO ESTOY SEGURO, HA DE PASAR DE PANTALLA
        }

    }

    removeLife(){
        this.lives -= 1;
    }

    draw(){
        this.ctx.fillStyle = "#66D3FA";
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    didCollide(enemy) {
        const playerLeft = this.x;
        const playerRight = this.x + this.size;
        const playerTop = this.y;
        const playerBottom = this.y + this.size;

        const enemyLeft = enemy.x;
        const enemyRight = enemy.x + enemy.width;
        const enemyTop = enemy.y;
        const enemyBottom = enemy.y + enemy.height;

        // Comprobamos si el enemigo está "dentro" del player
        const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
        const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;
        const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
        const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

        // Y comprobamos porque si no miraría toda la horizontal o toda la vertical
        if ((crossLeft || crossRight) && (crossTop || crossBottom)){
            return true;
        } else {
            return false
        }
    }
}