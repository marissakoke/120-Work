
let person = [];
let person_img;
let bg = 'rgb(0,30,212)'


function preload() {
  person_img = loadImage("./images/dance.png");
}

function setup() {
  createCanvas( windowWidth, windowHeight);
  background(bg);
  person[1] = new Person(300, 100, person_img, 1);

}

function draw() {
  background(bg);
  for (let i = 0; i < person.length; i++) {
    person[i].frame();
  }
}


///Person Class///

class Person {
  constructor(init_x, init_y, img, orientation){
    this.pos = {
      x: init_x,
      y: init_y
    };

    this.orientation = orientation;
    this.image = img;
    this.speed = 3;
    this.size = {
      w: 329,
      h: 352
    };

    this.sprite_num = 0;

    this.subRect = [
      [0,0],
      [347,370],
      [357,0],
      [696,0],
      [347,371],
      [1053,0]
    ];
  }

frame(){
  this.display();
  this.animate();
}

display(){
  push();

  translate(this.pos.x, this.pos.y);

  if (this.orientation === 0) {
    scale(1,1);
  } else if (this.orientation === 1) {
    scale(-1,1);
  }

  image(
    this.image,

    0,0,

    this.size.w, this.size.h,

    this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],

    this.size.w, this.size.h
  );
  pop();
}

animate(){
  if (frameCount % this.speed === 0) {
    this.sprite_num++;
    this.sprite_num %= 4;
  }
}
}
