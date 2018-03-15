
function setup() {
  createCanvas(windowWidth, 500);
}

function draw() {
background(30,30,200);
strokeWeight(1.5);
//sun
fill(255, 210, 0);
ellipse( 160, 90, 120, 120);
//sun rays
for( let x = 110; x < 220; x += 10 ){
  line(x, 138, 1.5*x, 405);
}

//grass
  fill(0,128,0);
    triangle( 350, 500, 250, 500, 300, 450 );
  fill(0,160,0);
    triangle( 400, 500, 250, 500, 350, 450 );
  fill(0,128,0);
    triangle( 350, 500, 250, 500, 200, 450 );
  fill(0,160,0);
    triangle( 400, 500, 250, 500, 100, 450 );
  fill(0,128,0);
    triangle( 250, 500, 190, 500, 240, 450 );
  fill(0,160,0);
    triangle( 204, 500, 134, 500, 150, 450 );
  fill(0,128,0);
    triangle( 150, 500, 120, 500, 220, 450 );
  fill(0,160,0);
    triangle( 185, 500, 217, 500, 176, 450 );
  fill(0,128,0);
    triangle( 310, 515, 260, 511, 270, 435 );

push();
//flower stem
  strokeWeight(2);
    line(250, 450, 250, 500);

  // flower petals
push();
fill(230,100,250);
ellipse(261, 461, 15, 15);

fill(230,100,250);
ellipse(238, 460, 15, 15);

fill(230,100,250);
ellipse(250, 465, 15, 15);

fill(230,100,250);
ellipse(265, 448, 15, 15);

fill(230,100,250);
ellipse(258, 437, 15, 15);

fill(230,100,250);
ellipse(243, 436, 15, 15);

fill(230,100,250);
ellipse(235, 447, 15, 15);

push();
  // flower center
fill(240, 175, 255);
ellipse(250, 450, 30, 30);


pop();
}
