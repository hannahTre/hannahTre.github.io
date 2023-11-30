// Balloon Tree
// Hannah Tremaine
// 11/24/2023

let scale = 15;
let depthLeaf = 6;


function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  randomSeed(100);
  background(255);
  drawTree(width/2, height*.9, 90, 6);
}

function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(depth);
  line(x1, y1, x2, y2);
}

function drawLeaf(x,y,d,depth){
  ellipseMode(CENTER);
  fill(random(255),random(255),random(255));
  if(depth===5||depth===4)d=random(10,20);
  if(depth<4)d=random(20,30);
  circle(x,y,d);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
//for a 2-branch tree:
    let adjust = map(mouseX,0,width,0,30);

    drawTree(x2, y2, angle-adjust, depth-1);
    drawTree(x2, y2, angle+adjust, depth-1);
    drawTree(x2,y2,angle,depth-1);
    if(depth<depthLeaf){
      drawLeaf(x2,y2,10,depth);
    }
    
  }
}

function keyPressed(){
  if(key==="z"){
    if(depthLeaf>0)depthLeaf-=1;
  }
  if(key==="x"){
    if(depthLeaf<=6)depthLeaf+=1;
  }
}
