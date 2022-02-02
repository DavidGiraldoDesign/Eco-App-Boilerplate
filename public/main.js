let canvas;
let bird;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    bird = new Bird(100, windowHeight / 3);
}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();

    bird.paint();
    bird.applyGravity();
    
}

function mouseClicked(){
    //bird.flyUpward();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}