// State Varibles and Fading
// Hannah Tremaine
// 9/23/2023
//

//Global Varibles
let mouseSide; //0>left 1>right "left"/"right"
let fillValue= 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}

function updateMouseState(){
  //looks at the mouse pos. and updates our mouseSide
  if (mouseX > width/2){
    mouseSide = "right";
  }
  else mouseSide= "left";
  print(mouseSide);
}

function renderSquares(){
    // draw our 2 rectangles on the screen
  if (mouseSide==="left")fill(0);
  else fill(255);
  rect(0,0,width/2,height); //left rect

  
  if(mouseSide==="right"){
    fillValue =0;
  }
  else{
    fillValue+=10;
  }
  fillValue = constrain(fillValue, 0, 255); //if number is between range, returns fillvalue, if lower 0 etc
  fill(fillValue);
  rect(width/2,0,width/2,height); //right rect

}