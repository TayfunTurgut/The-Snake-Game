function Snake() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.render = function () {
        fill(255);
        rect(this.x, this.y, scl, scl);

        if (this.tail.length >= 1) {
            for (var i = 0; i < this.tail.length; i++) {
                rect(this.tail[i].x, this.tail[i].y, scl, scl);
            }
        }
    }

    this.constrain = function () {
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.move = function () {
        if (this.total >= 2) {
            for (var i = this.total - 1; i > 0; i--) {
                this.tail[i] = this.tail[i - 1]
            }
        }
        if (this.total >= 1) {
            this.tail[0] = createVector(this.x, this.y);
        }

        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;
    }

    this.dir = function (x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                if (parseInt(localStorage._highScore) < this.total) {
                    localStorage._highScore = this.total.toString();
                }
                this.reset();
            }
        }
    }

    this.reset = function () {
        this.total = 0;
        this.tail = [];
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = 0;
        this.ySpeed = 0;
        spawnFood();
    }
}