// Drawing with single and nested loops
// Hannah Tremaine
// 9/25/2023
// Generating a single image with loops

//Global Variables
let numSegments = 50;
let segmentHeight; //height/numSegments
const GRID_SPACING = 20; //const means you cant change it, caps bc it wont change

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function drawGrid(){
  //draw some elements within nested loops
  for(let x = 0;x<width;x = x+GRID_SPACING){
    for(let y = 0;y<height;y= y+GRID_SPACING){
      //test 2
      if(dist(x,y,mouseX,mouseY)<50){
        fill(255);
      }
      else{
        fill(0);
      }
      
      circle(x,y,10);

      //test 1
      //noCursor();
      //line(mouseX,mouseY,x,y);
    }
  }
}

function draw() {
  gradient();
  drawGrid();
}


function gradient(){
  //a loop to create a gradient background
  noStroke();
  for(let i = 0;i<numSegments;i++){
    let y = i*segmentHeight;
    let fillValue = map(y,0,height,0,255); // varible, og min,og max, new min, new max
    fill(fillValue,0,255-fillValue);
    rect(0,y,width,segmentHeight);
  }
  stroke(0);

}
