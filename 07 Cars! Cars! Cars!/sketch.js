// Cars! Cars! Cars!
// Hannah Tremaine
// 10/17/2023
//Global Varibles
let testCar;


function setup() {
  createCanvas(windowWidth, windowHeight);
  testCar = new Vehicle(width/2,height/2)
}

function draw() {
  background(220);
  drawRoad();
  testCar.action();
}

function drawRoad(){
  background(0);
  rectMode(CORNERS);
  stroke(200);
  fill(200);
  rect(0,height*0.1,width,0);
  rect(0,height,width,height*0.9);
  stroke(255, 251, 125);
  for(let i = 0;i<width;i=i+35){
    line(i,height/2,i+20,height/2);
  }
}

class Vehicle{
  constructor(x,y){
    this.type=0; //o = car, 1 = truck
    this.c = color(random(0,255),random(0,255),random(0,255));
    this.x = x;
    this.y = y;
    this.direction = "left";
    this.xSpeed = 0;
  }
  display(){
    rectMode(CENTER);
    stroke(0);
    if(this.type === 0){
      fill(255);
      rect(this.x-12,this.y,10,35);
      rect(this.x+12,this.y,10,35);
      fill(this.c);
      rect(this.x,this.y,50,25);
    }
    if(this.type === 1){
      fill(this.c);
      rect(this.x,this.y,55,35);
      rect(this.x+30,this.y,10,35)

    }
  }
  move(){
    this.x+=this.xSpeed;
  }
  speedUp(){
    if(this.xSpeed>-15&&this.xSpeed<15){
      this.xSpeed+=1;
    }
  }
  speedDown(){
    if(this.xSpeed>-15&&this.xSpeed<15){
      this.xSpeed-=1;
    }
  }
  changeColor(){
    this.c = color(random(0,255),random(0,255),random(0,255));
  }
  action(){
    this.move();
    if(random(0,100)<1){
      this.speedDown();
    }
    if(random(0,100)<1){
      this.speedDown();
    }
    if(random(0,100)<1){
      this.changeColor();
    }
    this.display();
  }
}