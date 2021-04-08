class Bullet {
    constructor(ctx, radius, playerX, playerY, playerWidth, playerHeight, floor) {
        this.ctx = ctx;
        this.radius = radius;

        this.x = playerX + playerWidth;
        this.y = playerY + playerHeight/2;
        this.playerHeight= playerHeight;
        this.floor = floor;

        this.vx = 10;
        this.vy = 1;
        this.gravity = 0.9;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white'
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath();
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;

      //Accelerate > 1 &&  Decelerate < 1
      if(this.y >= this.floor + this.playerHeight) this.vy *= -1
    }

}