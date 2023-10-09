// Drawing with single and nested loops
// Hannah Tremaine
// 9/25/2023
// Generating a single image with loops

//Global Variables
let numSegments = 50;
let segmentHeight; //height/numSegments
let spacing = 30; //updates when mouse is clicked
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
  segmentHeight = height/numSegments;
  background(0);
  drawGrid();
}

function drawGrid(){
  //draw some elements within nested loops
  for(let x = 0;x<width;x = x+spacing){
    for(let y = 0;y<height;y= y+spacing){
      noStroke();
      //randomly selects colour
      fill(random(0,255),0,random(0,255));
      //makes sure the squares don't go off the screen
      if (x+spacing>=width){
        noStroke()
        noFill()
      }
      if (y+spacing>=height){
        noStroke()
        noFill()
      }
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
  background(0);
  drawGrid();
}

function keyPressed(){
  fill(random(0,255),0,random(0,255));
  background(0);
  drawGrid();
}