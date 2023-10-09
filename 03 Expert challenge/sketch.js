// State Varibles and Fading
// Hannah Tremaine
// 9/23/2023
//

//Global Varibles
let mouseSide; //"topleft"/"topright"bottomleft/"bottomright"
let fillValue1= 0;
let fillValue2 = 0;
let fillValue3 = 0;
let fillValue4= 0;

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
  if (mouseX > width/2&&mouseX>height/2){
    mouseSide = "topright";
  }
  if (mouseX > width/2&&mouseX<height/2){
    mouseSide = "bottomright";
  }
  if (mouseX < width/2 && mouseX>height/2){
    mouseSide = "topleft";
  }
  if (mouseX < width/2 && mouseX<height/2){
    mouseSide = "bottomleft";
  }
}

function renderSquares(){
    // draw our 2 rectangles on the screen
  if (mouseSide==="topleft"){
    fillValue1 = 0;
  }
  else{
    fillValue1+=10;
  }
  fillValue1 = constrain(fillValue1, 0, 255); //if number is between range, returns fillvalue, if lower 0 etc
  fill(fillValue1);
  rect(0,0,width/2,height/2); //left rect

  
  if(mouseSide==="topright"){
    fillValue2 =0;
  }
  else{
    fillValue2+=10;
  }
  fillValue2 = constrain(fillValue2, 0, 255); //if number is between range, returns fillvalue, if lower 0 etc
  fill(fillValue2);
  rect(width/2,0,width/2,height/2); //right rect

  if (mouseSide==="bottomleft"){
    fillValue3 = 0;
  }
  else{
    fillValue3+=10;
  }
  fillValue3 = constrain(fillValue3, 0, 255); //if number is between range, returns fillvalue, if lower 0 etc
  fill(fillValue3);
  rect(0,height/2,width/2,height/2); //left rect

  
  if(mouseSide==="bottomright"){
    fillValue4 =0;
  }
  else{
    fillValue4+=10;
  }
  fillValue4 = constrain(fillValue4, 0, 255); //if number is between range, returns fillvalue, if lower 0 etc
  fill(fillValue4);
  rect(width/2,height/2,width/2,height/2); //right rect

}