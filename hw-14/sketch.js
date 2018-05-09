
let person = [];
let person_img;
let bg = 'rgb(83,90,212)'


function preload() {
  person_img = loadImage("./images/dance1.png");
}

function setup() {
  createCanvas( windowWidth, windowHeight);
  background(bg);
  person.push( new Person(300, 100, person_img, 1) );

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
    this.speed = 10;
    this.size = {
      w: 440,
      h: 540
    };

    this.sprite_num = 0;

    this.subRect = [
      [150,0],
      [740,0],
      [150,540],
      [740,540]
    ];
  }

  frame(){
    this.display();
    this.animate();
  }

  display(){
    push();

    translate(this.pos.x, this.pos.y);

    // if (this.orientation === 0) {
    //   scale(1,1);
    // } else if (this.orientation === 1) {
    //   scale(-1,1);
    // }

    image(
      this.image,

      0,0,

      this.size.w, this.size.h,
      // width, height,

      this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],

      this.size.w+200, this.size.h
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
