// Noisy Numbers
// Hannah Tremaine
// 10/4/2023
// Some simple animations using random() and noise()
//

//global varibles
let segL = 10;
let ballY = 200;
let ySpeed;

let radiusTime = 40; 
let ySpeedTime = 10;
let greyValueTime = 0;
let noiseShift = 0.05; //the small this number, the more closly related the shifts will be

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(15); //temp to make viewing easier
}

function segmentLine(){
  //draw one line made up of many
  strokeWeight(15);
  let x = 0; //loop varible
  while (x<width){
    //option 1: using random
    let greyValue = random(0,255);
    //option 2: noise
    greyValue = noise(greyValueTime);
    greyValue = map(greyValue,0,1,0,255);
    greyValueTime += noiseShift;

    stroke(greyValue);
    line(x,height/2,x+segL,height/2)
    x+= segL; //segL*2 makes a dotted line
  }

}

function rectangleOnLine(){
  //draw a single *rounded* rect on the line
  //option 1: random
  let radius = random(2,70)
  //option 2:noise
  radius = noise(radiusTime);
  radius = map(radius,0,1,2,70);
  radiusTime += noiseShift;

  rectMode(CORNERS);
  strokeWeight(2);
  stroke(0);

  rect(width*0.1,height/2, width*0.5,height*0.25,radius);
}

function moveBall(){
  //option 1: using random
  ySpeed = random(-20,20)
  //option 2: using noise
  ySpeed = noise(ySpeedTime);
  ySpeed = map(ySpeed, 0,1,-20,20);
  ySpeedTime +=noiseShift;

  ballY += ySpeed;
  circle(width*0.7,ballY,30);
}

function draw() {
  background(220);
  segmentLine();
  rectangleOnLine();
  moveBall();
}
