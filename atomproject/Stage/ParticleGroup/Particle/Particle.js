export class Particle {
    FORCE_DAMPER = .5;
    constructor(x, y, c, w, h) {
        this.x = x;
        this.y = y;

        this.vx = 0;
        this.vy = 0;

        this.fx = 0;
        this.fy = 0;

        this.color = c;

        this.width = w;
        this.height = h;
    }

    get3D_Distance(target) {
        return Math.sqrt(Math.pow(this.get2D_yDistance(target), 2) + Math.pow(this.get2D_xDistance(target), 2));
    }

    get2D_xDistance(target) {
        return -(target.x - this.x);
    }

    get2D_yDistance(target) {
        return -(target.y - this.y);
    }

    updatePosition(max_x, max_y) {
        this.x += this.vx;
        this.y += this.vy;

        //check boundaries

        //x
        if (this.x <= 0) {this.x = 0}
        if (this.x >= max_x - this.width) {this.x = max_x - this.width}

        //y
        if (this.y <= 0) {this.y = 0}
        if (this.y >= max_y - this.height) {this.y = max_y - this.height}
    }

    updateVelocity(max_x, max_y) {
        this.vx = (this.fx + this.vx) * this.FORCE_DAMPER;
        this.vy = (this.fy + this.vy) * this.FORCE_DAMPER;

        // check boundaries

        if (this.x <= 0 || this.x >= max_x - this.width) {this.vx *= -1}

        if(this.y <= 0 || this.y >= max_y - this.height){this.vy *= -1}
    }

    resetForce() {
        this.fx = 0;
        this.fy = 0;
    }
}