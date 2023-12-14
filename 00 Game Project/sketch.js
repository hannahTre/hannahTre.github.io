// Fishing Friends
// Hannah Tremaine
// Start - November 30th, 2023

let tinyFishO, tinyFishPi, tinyFishPu, tinyFishR;
let smallFishB, smallFishG, small
let test;
let openMenuButton;
let shopMenu1;
let shopMenu2;
let menuOn = 0; //0 off, 1 shopMenu1

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
  shopMenu1 = new ShopMenu1();
  shopMenu2 = new ShopMenu2();
  openMenuButton = new Button(width*0.02,height*0.02,20,20,"magenta")
}

function draw() {
  clear();
  background(100);
  //scale(2);
  openMenuButton.update();
  openMenuButton.draw();
  if(openMenuButton.state === true){
    menuOn=1;
  }
  if(menuOn===1){
    shopMenu1.update();
    shopMenu1.draw();
  }
  if(menuOn===2){
    shopMenu2.update();
    shopMenu2.draw();
  }
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
  constructor(x,y,w,h,color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;

    this.state = false;
  }

  draw(){
    if(this.state===false){
      fill(this.color);
      rect(this.x,this.y,this.w,this.h);
    }
    else{
      fill("green");
      rect(this.x,this.y,this.w,this.h);
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
    this.buttons = [];
  }

  draw(){
    fill(200);
    rect(0,height*0.8,width,height*0.2);
    for(let i = 0;i<this.buttons.length;i++){
      this.buttons[i].update();
      this.buttons[i].draw();
    }
  }

}

class ShopMenu1 extends Menu{
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"))
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"red",1));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"blue",2));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"purple",3));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"yellow",4));
  }

  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 2;
    }
  }

}

class ShopMenu2 extends Menu{
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"orange",1));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"green",2));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"pink",3));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"teal",4));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 1;
    }
  }
}
