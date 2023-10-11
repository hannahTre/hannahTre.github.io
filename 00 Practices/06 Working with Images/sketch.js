// Working with Images
// Hannah Tremaine
// 10/10/2023
//working with images in varibles and arrays

//Globla Varibles
let lionL, lionR; //store Image object in each
let facingLeft = true;
let pinImages = []; //to hold all our pinwheel images
let pinIndex = 0;

function preload(){
  //happens before setup, waits for loading to finish
  lionL = loadImage("assests/lion-left.png");
  lionR = loadImage("assests/lion-right.png");
  for (let i = 0; i<9;i++){
    pinImages.push(loadImage("assests/pin-0"+i+".png"))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //do not load images within setup
  imageMode(CENTER);
}

function draw() {
  background(220);
  drawLion();
  drawPin();
}

function drawPin(){
  image(pinImages[pinIndex],width/2,height/2);
  if(frameCount % 2 === 0){ //every 2nd frame (if changed to %4 itd be every 4th frame)
    pinIndex++;
  }
  if (pinIndex > 8){
    pinIndex = 0;
  }

}

function drawLion(){
  //draw the lion in direction the mouse moves
  if (movedX<0){
    image(lionL,mouseX,mouseY);
    facingLeft = true
  }
  else if (movedX>0){
    image(lionR,mouseX,mouseY);
    facingLeft = false
  }
  if (facingLeft){
    image(lionL,mouseX,mouseY,lionL.width*0.6,lionL.height*0.6);
  }
  else{
    image(lionR,mouseX,mouseY);
  }
}

