// Cars! Cars! Cars!
// Hannah Tremaine
// 10/17/2023
//Global Varibles
let eastbound = [];
let westbound = [];
let light;


function setup() {
  //create canvas
  createCanvas(windowWidth, windowHeight);
  //populate the eastbound array with vehicles
  //the height is defined within higher half
  for(let i = 0;i<20;i++){
    eastbound.push(new Vehicle(random(0,width),random(height*0.12,height*0.48),Math.floor(random(0,2))));
  }
  //populate the westbound array with vehicles
  //the height is defined within the lower half of the screen
  for(let i = 0;i<20;i++){
    westbound.push(new Vehicle(random(0,width),random(height*0.52,height*0.88),Math.floor(random(0,2))));
  }
  //create a traffic light
  light = new TrafficLight;
}

function draw() {
  background(220);
  //draw the road background
  drawRoad();
  //draw the cars in eastbound array (cars on top)
  for(i of eastbound){
    i.action();
  }
  //draw the cars in westbound array (cars on bottom)
  for(i of westbound){
    i.action();
  }
  //draw the traffic light
  light.draw();
}

function mousePressed(){
  //to add more cars
  //shift click = new car in westbond(on bottom)
  if(keyCode===SHIFT && keyIsPressed){
    westbound.push(new Vehicle(random(0,width),random(height*0.52,height*0.88),Math.floor(random(0,2))));
  }
  //regular click = new car in eastbound(on top)
  else{
    eastbound.push(new Vehicle(random(0,width),random(height*0.12,height*0.48),Math.floor(random(0,2))));
  }
}

function drawRoad(){
  //all the shapes that draw the road
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
  constructor(x,y,type){
    this.type=type; //o = car, 1 = truck
    this.c = color(random(0,255),random(0,255),random(0,255));
    this.x = x;
    this.y = y;
    //this.y decides if on top or bottom so decides direction
    if(this.y>height/2){
      this.direction = 0; //0 = left, 1 = right
    }
    if(this.y<height/2){
      this.direction = 1; //0 = left, 1 = right
    }
    //to make sure none of the cars get stuck at 0
    if(this.direction===0){
      this.xSpeed = -2;
    }
    if(this.direction===1){
      this.xSpeed = 2;
    }
  }
  display(){
    //the shapes that make up the cars/trucks
    rectMode(CENTER);
    stroke(0);
    //car
    if(this.type === 0){
      fill(255);
      rect(this.x-12,this.y,10,35);
      rect(this.x+12,this.y,10,35);
      fill(this.c);
      rect(this.x,this.y,50,25);
    }
    //truck
    if(this.type === 1){
      //trucks on top
      if (this.direction === 1){
        fill(this.c);
        rect(this.x,this.y,55,35);
        rect(this.x+30,this.y,10,35)
      }
      //trucks on bottom
      if(this.direction ===0){
        fill(this.c);
        rect(this.x,this.y,55,35);
        rect(this.x-30,this.y,10,35)
      }
    }
  }
  move(){
    //move the vehicles
    this.x+=this.xSpeed;
    if (this.direction === 0){
    //creates "loop" look, if vehicle goes off road, redraw it at start
      if (this.x<=0){
        this.x=width;
      }
    }
    if(this.direction === 1){
      if(this.x>width){
        this.x=0;
      }
    }
  }
  speedUp(){
    //add or subtract to speed depending on which direction its moving
    if(this.direction === 0){
      if (this.xSpeed>-15&&this.xSpeed<=0){
        this.xSpeed-=1;
      }
    }
    if(this.direction===1){
      if (this.xSpeed>=0&&this.xSpeed<15){
        this.xSpeed+=1;
      }
    }
  }
  speedDown(){
    //add or subract to speed depending on direction
    if(this.direction === 0){
      if (this.xSpeed>-15&&this.xSpeed<0){
        this.xSpeed+=1;
      }
    }
    if(this.direction===1){
      if (this.xSpeed>0&&this.xSpeed<15){
        this.xSpeed-=1;
      }
    }
  }
    
  changeColor(){
    //change colour
    this.c = color(random(0,255),random(0,255),random(0,255));
  }
  action(){
    if(light.type === 0){
      this.move();
      if(random(0,100)<1){
        this.speedUp();
      }
      if(random(0,100)<1){
        this.speedDown();
      }
      if(random(0,100)<1){
        this.changeColor();
      }
    }
    this.display();
  }
}

class TrafficLight{
  constructor(){
    this.type = 0; //0 = green 1 = red
    this.frame = 0;
  }
  draw(){
    if (this.type === 0){
      fill("green");
      circle(width*0.9,height*0.05,20)
    }
    if (this.type === 1){
      fill("red");
      circle(width*0.9,height*0.05,20);
      this.frame +=1;
      if (this.frame === 120){
        this.frame = 0;
        this.type = 0;
      }
    }
  }
  keyPressed(){
    if (key === " "){
      this.type = 1;
    }
  }
}

function keyPressed(){
  light.keyPressed();
}