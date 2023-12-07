// Fishing Friends
// Hannah Tremaine
// Start - November 30th, 2023

let tinyFishO, tinyFishPi, tinyFishPu, tinyFishR;
let smallFishB, smallFishG, small
let test;

function preload(){
  //tiny Fish
  tinyFishO = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Orange.png', { frameSize: [16, 16], frames: 32 });
  tinyFishPi = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Pink.png', { frameSize: [16, 16], frames: 32 });
  tinyFishPu = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Purple.png', { frameSize: [16, 16], frames: 32 });
  tinyFishR = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Red.png', { frameSize: [16, 16], frames: 32 });
  //small fish

  //medium fish

}

function setup() {
  createCanvas(800,400);
  test = new Fish(0,200,tinyFishR);
}

function draw() {
  clear();
  background(100);
  //scale(2);
  test.move();
  test.draw();
	animation(tinyFishPu, 200, 100);
}

class Fish{
  constructor(x,y,fish){
    this.x = x;
    this.y = y;
    this.fish = fish;
    this.speed = 3;
  }

  draw(){
    animation(this.fish, this.x, this.y);
  }
  move(){
    if(this.x > width || this.x<0){
      this.fish.scale.x *=-1;
      this.speed*=-1;
    }
    this.x += this.speed;
  }

}
