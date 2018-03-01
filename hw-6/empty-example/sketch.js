// Global Variables
let bgColor
// circle (no fill)
let x = 90;
let y = 150;
let diameter = 95;
//circle (pink)
let pos_x = 30;
let pos_y = 700;
//circle (yellow)
let pos_x2 = 400;
let pos_y2 = 450;
let diameter2 = 70;
// circle (orange)
let pos_x3 = 400
let pos_y3 = 450
let diameter3 = 70
// moving circle
let max_circ_mvt = 5
// circle (teal)
var myObj = {
  x: 300,
  y : 400,
  diameter : 40 };


// set up background
push();
function setup() {
bgColor = color(20, 105, 255);
createCanvas(windowWidth, 700);
background(bgColor);
}


push();
function draw() {
// empty circle
frameRate(2);
noFill();
ellipse(pos_x, y, diameter);
pos_x = pos_x + round(10.3);
pos_x = pos_x % width;

push();
// pink circle
frameRate(5);
fill('rgb(180, 90,140)');
ellipse(x, pos_y, diameter);
pos_y = pos_y - floor(15.87);
pos = pos_y % height;


push();
//yellow circle
fill('rgb(220,205,20)');
ellipse(pos_x2/2, pos_y2/2, diameter2/2);

push();
// orange moving circle
fill('rgb(263,109, 39)');
ellipse(pos_x3, pos_y3, diameter3);

pos_x3 += random(-max_circ_mvt, max_circ_mvt);
pos_y3 += random(-max_circ_mvt, max_circ_mvt);

push();
//violet circle
var circ = map(mouseX, 0, windowWidth, 495, 305);
fill('rgb(60, 40 , 90 )');
ellipse(circ, 1210 * 0.5 , 50 * 0.5, 130 * 0.5);

push();
fill('rgb(28,215,205)');
ellipse(myObj.x, myObj.y, myObj.diameter);
myObj.y = myObj.y + abs(20);
myObj.y = myObj.y % height;

pop();

}
