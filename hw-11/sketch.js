
let circle = [];
let num_circle = 35 ;
let bg_color ;

function setup() {

createCanvas( windowWidth, windowHeight);
bg_color = color( 0,0,0 );

for (let i = 0; i < num_circle; i++) {
  circle.push( new BouncingCircle() );
}
}

function draw() {
  background(bg_color);

  for( var i = 0; 1 < num_circle; i++) {
    circle[i].frame()
   }
}


/// Bouncing Circle ///

class BouncingCircle {

  constructor(){
  this.size_w = random (20,80);
  this.size_h = random (20,80);
  this.size_w = this.size_h;
  this.loc_x = random (width);
  this.loc_y = random (height);
  this.move_x= random(-2,2);
  this.move_y= random(-2,2);
  this.circle_color = color(random(255), random(255), random(255));

}


frame(){
  this.display();
  this.move();
}

display(){

  push();

  translate(this.loc_x,this.loc_y);
  fill(this.circle_color);
  ellipse(0,0, this.size_w,this.size_h);


push();
rotate(PI);
translate(0,0);
scale(1, -1);
arc(0,0,0,0, -PI, CHORD);
pop();

pop();
}


move(){
  this.loc_x += this.move_x;
  this.loc_y += this.move_y;

  if( this.loc_x >= width) {
    this.move_x *= -1;
    this.loc_x = width - abs(this.move_x);
  } else if (this.loc_x <= 0) {
    this.move_x *= -1;
    this.loc_x = abs(this.move_x);
  } else if (this.loc_y >= height){
    this.move_y *= -1;
    this.loc_y = height - abs(this.move_y);
  }else if (this.loc_y <= 0);{
    this.move_y *= -1;
    this.loc_y = abs(this.move_y);
  }

}
}
