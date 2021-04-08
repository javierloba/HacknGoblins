class Player {
    constructor(canvas, playerImgSrc, keys){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.lives = 1; // Player lives

        this.width = 150;
        this.height = 150;

        this.x = 50; // Empieza a 50px del borde
        this.y = this.canvas.height * 0.80 - this.height; // Pone al jugador en el "suelo"
        this.y0 = this.canvas.height * 0.80 - this.height ;

        this.directionX = 0; // 1, 0 o -1, arriba o abajo
        this.directionY = 0;
        this.speed = 5;

        this.vy = 1;
        this.gravity = 0.4;

        this.image = new Image();
        this.image.src = playerImgSrc;
        this.frames = 5;
        this.framesIndex = 0;

        this.keys = keys;
        this.bullets = [];
        this.shoot();
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
        this.bullets.forEach(bullet => bullet.move())
    }

    handleScreenCollision(){
        const screenTop = 0; // La línea de arriba del canvas
        const screenBottom = this.canvas.height; // ESTA TENDRE QUE MODIFICARLA!!!! SUELO!!

        const playerTop = this.y;
        const playerBottom = this.y + this.height;

        const screenLeft = 0;
        const screenRight = this.canvas.width; // OJO ESTA QUE HA DE PASAR PANTALLA

        const playerLeft = this.x;
        const playerRight = this.x + this.width;

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

    draw(framesCounter){
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
        this.clearBullets()
        this.bullets.forEach(bullet => bullet.draw())
        this.animate(framesCounter)
    }

    animate(framesCounter) {
        if(framesCounter % 8 === 0) {
            this.framesIndex++;

            if(this.framesIndex > this.frames - 1) this.framesIndex = 0;
        }
    }



    didCollide(enemy) {
        const playerLeft = this.x + 50;
        const playerRight = this.x + this.width - 50;
        const playerTop = this.y;
        const playerBottom = this.y + this.height - 50;

        const enemyLeft = enemy.x + 30;
        const enemyRight = enemy.x + enemy.width - 30;
        const enemyTop = enemy.y + 30;
        const enemyBottom = enemy.y + enemy.height - 30;

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

    shoot() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === this.keys.SPACE) {
                this.bullets.push(new Bullet(this.ctx, 10, this.x, this.y, this.width, this.height, this.y0))
            }
        })
    }

    clearBullets() {
       this.bullets = this.bullets.filter(bullet => bullet.x <= this.canvas.width)
    }
}