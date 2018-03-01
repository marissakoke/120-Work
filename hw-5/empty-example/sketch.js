// Spinning triangle

function setup() {
  createCanvas( 600, 800);
}

let triangleRotationRate = 0;


function draw() {
  background('rgb(190, 84, 250)');
// turn cursor off
  noCursor();

triangleRotationRate = (mouseX * 0.2) -20

  push();
  translate( mouseX, mouseY);

// Make triangle
push();
strokeWeight(4);
fill('rgb(30,197,207)');
triangle(-35, 75, 60, 30, 180, -90);



pop();








}
