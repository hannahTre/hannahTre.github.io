// Primitave Paint
// Hannah Tremaine
// 9/21/2023

//GLobal Varibles
let ballSize=20, ballMove, sizeChange = 5;
let overlay; //"extra canvas"
let myName = "Hannah Tremaine"

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
}

function mouseDrawings(){
  //draw a shape at the mouse position 
  if(mouseIsPressed){
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
  //Clear shapes off the canvas
  if(keyIsPressed){
    if (key===" ") overlay.clear();
  }
  overlay.fill(random(255),0,random(255));
  image(overlay,0,0);
}

function followMouse(){
  stroke(100);
  fill(100);
  //shows what shape is to be drawn
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
  background(0);
  drawAndMoveBall();
  followMouse()
  mouseDrawings();
  writeName();
}

function writeName(){
  fill(255)
  textFont("Georgia",20);
  text(myName,width*0.80,height*0.98);
}
function drawAndMoveBall(){
  //update the balls size
  ballSize = ballSize + sizeChange;
  //change the ball
  if (ballSize >= 100 || ballSize <= 10){
    sizeChange = sizeChange * -1;
  }
  //render the ball to the screen
  fill(255);
  circle(width/2,height/2,ballSize);
}