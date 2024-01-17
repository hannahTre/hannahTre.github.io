// Final Challeng Practice

let gorillaIdle = [];
let gorillaSwipe = [];
let gorillaX, gorillaY;
let idleIndex = 0;
let swipeIndex = 0;

let spiralImages = [];
let spirals = []; //hold "spiral" objects

function preload(){
  for(let i = 1;i<7; i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
  }

  for(let i = 0; i<16; i++){
    if(i<10){
      spiralImages.push(loadImage("assets/Circle/Circle Animation0"+i+".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/Circle Animation"+i+".png"));
    }
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gorillaX = width/2;
  gorillaY = height/2;
}

function draw() {
  background(220);
  if(keyIsPressed&&key===" "){
    image(gorillaSwipe[swipeIndex],gorillaX,gorillaY);
    if(frameCount%5===0){
      swipeIndex++;
      if(swipeIndex>5){
        swipeIndex=0;
      }
    }
  }
  else{
    image(gorillaIdle[idleIndex],gorillaX,gorillaY);
    if(frameCount%10===0){
      idleIndex++;
      if(idleIndex>5){
        idleIndex=0;
      }
    }
  }
  for(let i =0;i<spirals.length;i++){
    i.display();
    if(i.active===false){
      spirals.splice(i,1);
    }
  }
}

function mousePressed(){
  spirals.push(new Spiral(mouseX,mouseY))
}

class Spiral{
  constuctor(x,y){
    this.pos = createVector(x,y);
    this.frame = 0;
    this.active = true;
  }
  display(){
    if(this.frame>15){
      this.active = false;
    }
    else{
      image(spiralImages[this.frame],this.pos.x,this.pos.y);
      if(frameCount%3===0){
        this.frame++;
      }
    }
  }
}
