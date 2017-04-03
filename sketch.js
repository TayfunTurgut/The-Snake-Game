var snake;
var scl = 20;
var tick;

function setup() {
    createCanvas(windowWidth, windowHeight);
    snake = new Snake();
    Tick(snake.Move, 500);
}

function draw() {
    background(51);
    snake.Update();
    snake.Render();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.Dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.Dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.Dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.Dir(-1, 0);
  }
}

function Tick(func, t) {
	tick = setInterval(func, t);
}