class Bird {
    posX;
    posZ;
    isFlying = true;
    flyingPower = 80;
    gravity = 2;
    skyLimit = 50;
    floorLimit = 200;
    size = 50;

    constructor(posX, posZ) {
        this.posX = posX;
        this.posZ = posZ;
    }

    paint() {
        noStroke();
        fill(255);
        ellipse(this.posX, this.posZ, this.size, this.size);
    }

    applyGravity() {
        if (!this.isFlying) {
            this.posZ = windowHeight - this.floorLimit;
        } else {
            this.posZ += this.gravity;
            if (this.posZ >= windowHeight - this.floorLimit) {
                this.isFlying = false;
            }
        }
    }

    flyUpward() {
        if (this.posZ >= this.skyLimit) {
            this.posZ -= this.flyingPower;
            this.isFlying = true;
        }
    }

}