// Repositioning Rectangles
// Hannah Tremaine
// 9/27/2023
//Simple GUI creation/ Geometry Practice

//GLobal Varibles
let x,y,rWidth,rHeight;
let rLeft,rRight,rTop,rBottom;
let mouseOver = false; //are we hovering over the rectangle?
let pickedUp = false; // are we currently moving it? 
let xOffset, yOffset; //so we can grab away from centre 
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rWidth= 200; rHeight = 100;
}

function updateEdgePositions(){
  //update left,right,top,bottom properties
  rLeft = x - rWidth/2; rRight = x + rWidth/2;
  rTop = y - rHeight/2; rBottom = y + rHeight/2;
}

function drawRectangle(){
  //render the rect and handle dragging
  updateEdgePositions();

  //check if mouse is over or not
  if (mouseX>rLeft && mouseX<rRight && mouseY>rTop && mouseY < rBottom){
    mouseOver=true
    fill(170,190,50);
  }
  else{
    mouseOver = false;
    fill(35,70,125);
  }

  if (pickedUp){
    x = mouseX + xOffset;
    y = mouseY + yOffset;
  }

  rect(x,y,rWidth,rHeight);
}

function mousePressed(){
  //triggers exactly once per click (on down action)
  if (mouseOver){
    pickedUp = true;
    xOffset = x - mouseX;
    yOffset = y - mouseY;
  }
}

function mouseReleased(){
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}
