// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noFill();
  circle(width/2,height/2,500);
  push();
  translate(width/2,height/2);
  for(i=0;i<360;i+=40){
    line(0,0,500,height/2)
    rotate(radians(40))
  }
}
