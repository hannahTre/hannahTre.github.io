// Round Racers
// Hannah Tremaine
// 10/2/2023

//Global Varibles 
let racer1;
let racer2;
let racer3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new RoundRacer(height*0.33,"green"); //1/3 of the screen
  racer2 = new RoundRacer(height/2,"blue"); //1/2 of the screen
  racer3 = new RoundRacer(height*0.67,"purple"); //2/3 of the screen
}

function draw() {
  background(220);
  //draw the first circle
  racer1.move();
  racer1.display();
  //draw the second racer
  racer2.move();
  racer2.display();
  // draw the third racer
  racer3.move();
  racer3.display();
}

class RoundRacer{
  //constructor
  constructor(yPosition,color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3,15)
    this.color = color
  }
    //class methods
    move(){
      this.xPosition = this.xPosition + this.xSpeed;
      if (this.xPosition >= width) this.xPosition=0;
    }
    display(){
      fill(this.color)
      ellipse(this.xPosition,this.yPosition,50);
    }
  }