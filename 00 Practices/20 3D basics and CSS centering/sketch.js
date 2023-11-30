// 3D Basics and CSS Centering
// Hannah Tremaine
// 11/23/2023

let angle = 5;

function setup() {
  createCanvas(400,400,WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  //rotateY(frameCount);
  //box(150);
  rotateY(frameCount);
  angle=map(mouseX,0,width,-120,120);
  for(let i =0; i<360;i+=45){
    push();
    rotateY(i);
    boxes(30);
    pop();
  }
}

function boxes(size){
  if(size>3){
    rotateZ(angle);
    translate(size*1.5,0);
    box(size);
    boxes(size*0.8);
  }
}