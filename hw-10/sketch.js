var words = ["Australia", "Madagascar", "Italy", "Norway", "Kenya", "Russia"];

var index = 0;

// background color
let bg = (30, 210, 145);


function setup() {
  createCanvas(windowWidth, 400);
}

// create background
function draw() {
  background(bg);

// create text
fill(128, 0, 0);
textSize(40);
text(words[index], 300, 200);
}

function mousePressed() {
  index = index + 1 ;

if (index == 6) {
  index = 0 ;
}
}
