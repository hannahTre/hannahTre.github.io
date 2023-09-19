// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//GLobal Varibles
let ballX, ballSize=20, xSpeed=5, ballMove, sizeChange = 5;
let overlay; //"extra canvas"
let colourA,colourB;
let myName = "Hannah Tremaine"

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  ballX = width/2;
  colourA = color(157, 118, 207);
  colourB = color(242, 245, 169);
}

function mouseDrawings(){
  //draw a mouse at the mouse position 
  if(mouseIsPressed){
    if (key==="1") overlay.fill(colourA),overlay.stroke(colourA);
    if (key==="2") overlay.fill(colourB),overlay.stroke(colourB);
    if (key==="a") {
      overlay.rect(mouseX,mouseY,50,25);
    }
    if (key==="s"){
      overlay.ellipse(mouseX,mouseY,50,25);
    }
    if (key==="d"){
      overlay.triangle(mouseX,mouseY,mouseX+50,mouseY+50,mouseX-50,mouseY+50);
    }
  }
  if(keyIsPressed){
    if (key===" ") overlay.clear();
  }
  image(overlay,0,0);
}

function followMouse(){
  stroke(100);
  fill(100);
  if (key === "a"){
    rect(mouseX,mouseY,50,25);
  }
  if (key === "s"){
    ellipse(mouseX,mouseY,50,25);
  }
  if (key === "d"){
    triangle(mouseX,mouseY,mouseX+50,mouseY+50,mouseX-50,mouseY+50);;
  }
}

function draw() {
  background(210, 247, 250);
  drawAndMoveBall();
  followMouse()
  mouseDrawings();
  writeName();
}

function writeName(){
  fill(235, 106, 159)
  textFont("Georgia",20);
  text(myName,width*0.80,height*0.98);
}
function drawAndMoveBall(){
  ballSize = ballSize + sizeChange;
  if (ballSize >= 100 || ballSize <= 10){
    sizeChange = sizeChange * -1;
  }
  fill(235, 106, 159);
  stroke(235, 106, 159);
  circle(ballX,height/2,ballSize);
}