class Enemy {
    constructor(canvas, speed, enemyImgSrc){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.width = 120;
        this.height = 100;
        this.x = this.canvas.width + 20;
        this.y = this.canvas.height * 0.82 - this.height; // Los de a pie salen a la misma altura del player

        this.speed = speed // Se puede aleatorizar

        this.image = new Image();
        this.image.src = enemyImgSrc;
        this.frames = 6;
        this.framesIndex = 0;
    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.image,
            this.framesIndex * Math.floor(this.image.width / this.frames),
            0,
            Math.floor(this.image.width / this.frames),
            this.image.height,
            this.x,
            this.y,
            this.width,
            this.height
        )
        this.animate(framesCounter)
    }

    didCollide(bullet) {
        const enemyLeft = this.x + 50;
        const enemyRight = this.x + this.width - 50;
        const enemyTop = this.y;
        const enemyBottom = this.y + this.height - 50;

        const bulletLeft = bullet.x + 30;
        const bulletRight = bullet.x + bullet.width - 30;
        const bulletTop = bullet.y + 30;
        const bulletBottom = bullet.y + bullet.height - 30;

        // Comprobamos si el enemigo está "dentro" del enemy
        const crossLeft = bulletLeft <= enemyRight && bulletLeft >= enemyLeft;
        const crossRight = bulletRight >= enemyLeft && bulletRight <= enemyRight;
        const crossBottom = bulletBottom >= enemyTop && bulletBottom <= enemyBottom;
        const crossTop = bulletTop <= enemyBottom && bulletTop >= enemyTop;

        // Y comprobamos porque si no miraría toda la horizontal o toda la vertical
        if ((crossLeft || crossRight) && (crossTop || crossBottom)){
            return true;
        } else {
            return false
        }
    }

    animate(framesCounter) {
        if(framesCounter % 8 === 0) {
            this.framesIndex++;

            if(this.framesIndex > this.frames - 1) this.framesIndex = 0;
        }
    }

    updatePosition() {
        // Los enemigos vienen desde la derecha hacia la izquierda
        this.x -= this.speed;
        this.draw()
    }

    isInsideScreen() {
        //"Está el margen derecho del enemigo más hacia dentro de la pantalla que el margen izquierdo de la pantalla?"
        return this.x + this.width > 0; // DUDA
    }
}