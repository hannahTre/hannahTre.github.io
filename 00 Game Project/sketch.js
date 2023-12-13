// Fishing Friends
// Hannah Tremaine
// Start - November 30th, 2023

let tinyFishO, tinyFishPi, tinyFishPu, tinyFishR;
let smallFishB, smallFishG, small
let test;
let testMenu;

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
  textAlign(CENTER);
  test = new Fish(0,200,tinyFishR);
  testMenu = new Menu();
}

function draw() {
  clear();
  background(100);
  //scale(2);
  testMenu.draw();
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

class Button{
  constructor(x,y,w,h,color,text){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.text = text;

    this.state = false;
  }

  draw(){
    if(this.state===false){
      fill(this.color);
      rect(this.x,this.y,this.w,this.h);
      fill("black");
      text(this.text,this.x+this.w/2,this.y+this.h/2);
    }
    else{
      fill("green");
      rect(this.x,this.y,this.w,this.h);
      fill("black");
      text("clicked",this.x+this.w/2,this.y+this.h/2);
    }
  }

  update(){
    if(mouseX>this.x && mouseX<(this.x+this.w)&&mouseY>this.y&&mouseY<this.y+this.h&&mouseIsPressed){
      this.state = true;
    }
    else{
      this.state = false;
    }
  }

}

class Menu{
  constructor(){
    this.button1 = new Button(width*0.2,height*0.85,40,40,"red",1);
    this.button2 = new Button(width*0.4,height*0.85,40,40,"blue",1);
    this.button3 = new Button(width*0.6,height*0.85,40,40,"purple",1);
    this.button4 = new Button(width*0.8,height*0.85,40,40,"yellow",1);
  }

  draw(){
    rect(0,height*0.8,width,height*0.2);
    this.button1.update();
    this.button1.draw();
    this.button2.update();
    this.button2.draw();
    this.button3.update();
    this.button3.draw();
    this.button4.update();
    this.button4.draw();
  }

}
