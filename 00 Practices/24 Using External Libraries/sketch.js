// Using External Libraries
// Hannah Tremaine
// 12/1/2023

let scribble;
let rw = 150;
let rh = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
}

function draw() {
  background(220);
  if(collideRectCircle(width/2,height/2,rw,rh,mouseX,mouseY,120)){
    fill(200,60,100)
  }
  else fill(255);
  rect(width/2,height/2,rw,rh);
  scribble.scribbleEllipse(mouseX,mouseY,120,120);
}
