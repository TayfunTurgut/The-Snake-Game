var snake;
var scl;
var tick;
var food;
var p;
var s;
var tickSpeed = 150;
var keyTimer = 10;

function setup() {
  createCanvas(windowWidth/2, windowWidth*9/16/2);
  scl = gcd(width, height);
  snake = new Snake();
  spawnFood();
  Tick(tickSpeed);
  p = document.getElementById("score");
  s = document.getElementById("highScore");
  if (localStorage.highScore == null) {
    localStorage._highScore = "0";
  }
}

function draw() {
  background(51);
  snake.constrain();
  snake.render();
  snake.death();

  if (keyTimer > 0) {
    keyTimer--;
  }

  if (snake.eat(food)) {
    spawnFood();
    speedUp();
  }

  fill(255, 0, 100)
  rect(food.x, food.y, scl, scl);

  p.innerHTML = "Your score is: " + snake.total.toString();
  s.innerHTML = "Your high score is: " + localStorage._highScore + "!";
}

function keyPressed() {
  if (keyCode === UP_ARROW && keyTimer == 0 && snake.ySpeed != 1) {
    snake.dir(0, -1);
    keyTimer = 6;
  } else if (keyCode === DOWN_ARROW && keyTimer == 0 && snake.ySpeed != -1) {
    snake.dir(0, 1);
    keyTimer = 6;
  } else if (keyCode === RIGHT_ARROW && keyTimer == 0 && snake.xSpeed != -1) {
    snake.dir(1, 0);
    keyTimer = 6;
  } else if (keyCode === LEFT_ARROW && keyTimer == 0 && snake.xSpeed != 1) {
    snake.dir(-1, 0);
    keyTimer = 6;
  }
}

function Tick(t) {
  tick = setInterval(function () {
    snake.move()
  }, t);
}

function spawnFood() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function speedUp() {
  clearInterval(tick);
  tickSpeed -= 5;
  Tick(tickSpeed);
}

function gcd(a,b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}