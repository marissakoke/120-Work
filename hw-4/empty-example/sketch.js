// setup function
function setup() {
// create a canvas
  createCanvas(600, 800);
}
function draw() {
  // create background
  background('rgb(82, 146, 238)');

push();

//set the grid center (x:0 y:0) to canvas center
translate(300, 400);

// left arm
push();
strokeWeight(10);
stroke('rgb(231, 215, 223)')
line(-140, 0, -200,-100);
push();

// right arm
push();
line(140,0, 200, 100);
pop();

// Body
push();
noStroke();
fill('rgb(210, 119, 233)');
rect(-150, -100, 300, 350,70);
push();

//head
push();
fill('rgb(237, 160, 40)');
ellipse(0, -200, 250, 250);
push();

//left eye
push();
fill('rgb(255)')
ellipse(-50,-240,50,50);
push();

//left eye color
push();
fill('rgb(53, 44, 176)');
ellipse(-50, -240, 35, 35);
push();

//left pupil
push();
fill('rgb(15, 13, 15)');
ellipse(-50,-240, 15, 15);
push();

//right eye
push();
fill('rgb(255)');
ellipse(50,-240,50,50);
push();

//right eye color
push();
fill('rgb(53, 44, 176)');
ellipse(50,-240, 35, 35);
push();

//right pupil
push();
fill('rgb(15,13,15)');
ellipse(50,-240, 15,15);
push();

//nose
push();
triangle(0,-170, 20,-200,-20,-200);
push();

//mouth
push();
arc(0,-140,120,40, radians(350), radians(190), PI);
pop();

//left leg
push();
fill('rgb(231, 215, 223)');
rect(40,249,40,90,10);
push();

//right leg
push();
fill('rgb(231, 215, 223)');
rect(-80,249,40,90,10);
push();

// end of body
pop()
}
