function Snake() {
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.Render = function() {
        fill(255);
        rect(this.x, this.y, scl, scl);
    }

    this.Update = function() {
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.Move = function() {
        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;
    }

    this.Dir = function(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}