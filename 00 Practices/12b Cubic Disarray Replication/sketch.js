// Cubic Disarray Replication
// Hannah Tremaine
// 10/24/2023

let squareSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  rectMode(CENTER);
  noFill();
  noLoop();
}

function drawRectangles(){
  for(let x = squareSize/2;x<width-squareSize/2;x+=squareSize){
    for (let y = squareSize/2;y<height-squareSize/2;y+=squareSize){
      push(); //new coord system
      translate(x,y);
      let rAmount = map(y,0,height,1,45);
      rotate(radians(random(-rAmount,rAmount)));
      let offset = map(y,0,height,0,15);
      square(random(-offset,offset),random(-offset,offset),squareSize);
      pop(); //revert coord system
    }
  }
}

function draw() {
  background(220);
  drawRectangles();
}
