// Planets and moons
// Hannah Tremaine
// 10/17/2023
// Storing objects IN objects, overwritting objects

//global varibles
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2,height/2)
}

function draw() {
  background(50);
  myPlanet.display();
}
function mouseClicked(){
  if(keyIsPressed&&keyCode === SHIFT){
    myPlanet = new Planet(mouseX,mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

class Planet{
constructor(x,y){
  this.x = x;
  this.y = y;
  this.s = 100; //size
  this.moons = [];
} 
createMoon(){ // push a new moon object into array
  this.moons.push(new Moon(this.x,this.y));
}
display(){ //draw moon on screen
  noStroke();
  fill(255,0,0);
  circle(this.x,this.y,this.s);
  //now "process" the moons (move,display)
  for(let m of this.moons){
    m.update();
  }
  }

}

class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.steps = 10;
    this.speed = 5;
  }
  update(){ // movement and display
    this.x += this.speed;
    this.steps --;
    if (this.steps ===0){
      this.speed *= -1;
      this.steps = 20;
    }
    fill(250);
    circle(this.x,this.y,25);
  }
}