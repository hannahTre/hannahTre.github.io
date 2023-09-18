// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//GLobal Varibles
let ballX, ballSize=20, xSpeed=5, ballMove;
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
  if(keyIsPressed){
    if (key==="1") overlay.fill(colourA);
    if (key==="2") overlay.fill(colourB);
    if (key==="a") {
      overlay.rect(mouseX,mouseY,50,25);
    }
    if (key==="s"){
      overlay.ellipse(mouseX,mouseY,50,25);
    }
    if (key==="d"){
      overlay.triangle(mouseX+30,mouseY+75,mouseX+58,mouseY+20,mouseX+86,mouseY+75);
    }
  }
  image(overlay,0,0);
}

function draw() {
  background(210, 247, 250);
  drawAndMoveBall();
  mouseDrawings();
  writeName();
}

function writeName(){
  textFont("Georgia",20);
  text(myName,width*0.80,height*0.98)
}
function drawAndMoveBall(){
  //update balls position
  ballX = ballX + xSpeed;
  //decide if we need to change directions
  if (ballX+ballSize/2>=width){
    xSpeed = -5;
  }
  if (ballX-ballSize/2<=0){
    xSpeed = 5;
  }
  //render the ball on the screen
  fill(235, 106, 159);
  stroke(235, 106, 159);
  circle(ballX,height/2,ballSize);
}