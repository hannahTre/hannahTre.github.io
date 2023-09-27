// Drawing with single and nested loops
// Hannah Tremaine
// 9/25/2023
// Generating a single image with loops

//Global Variables
let numSegments = 50;
let segmentHeight; //height/numSegments
let spacing = 30; //const means you cant change it, caps bc it wont change

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
  segmentHeight = height/numSegments;
  background(0)
  drawGrid();
}

function drawGrid(){
  //draw some elements within nested loops
  for(let x = 0;x<width;x = x+spacing){
    for(let y = 0;y<height;y= y+spacing){
      noStroke();
      fill(random(0,255),0,random(0,255));
      rect(x,y,spacing);
    }
  }
}

function mousePressed() {
  if (mouseButton===LEFT){
    spacing = spacing + 5;
  }
  if (mouseButton===RIGHT){
    spacing = spacing - 5;
  }
  drawGrid();
}