// Repositioning Rectangles
// Hannah Tremaine
// 9/27/2023
//Simple GUI creation/ Geometry Practice

//GLobal Varibles
let x,y,rWidth,rHeight;
let rLeft,rRight,rTop,rBottom;
let mouseOver = false; //are we hovering over the rectangle?

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rWidth= 200; rHeight = 100;
}

function draw() {
  background(220);
}
