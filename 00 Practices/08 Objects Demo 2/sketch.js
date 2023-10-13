// Objects Demo 2
// Hannah Tremaine
// 10/13/2023
//OOP recap and perlin noise object interactions

//Global Varibles
let points = [];
let reach = 150; //max line length

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  for(let p of points){
    //?? what is the index - good for if u only wanna see each thing once
    p.move();
    p.display();
    p.connectPoints(points);
  }
}

function mouseClicked(){
  //trigger on a full press/release mouse interaction
  points.push(new MovingPoint(mouseX,mouseY));
}

class MovingPoint{
  //constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 20; //size
    this.c = color(random(255),random(255),random(255));
    this.xTime = random(10); //x time
    this.yTime = random(10); // y time
    this.timeShift = 0.01;
    this.maxSpeed = 5;
  }

  //class functions
  display(){
    fill(this.c);
    noStroke();
    let d = dist(mouseX,mouseY,this.x,this.y)
    if (d<reach){
      this.s = map(d,0,reach,60,20);
    }
    else{
      this.s =20;
    }
    circle(this.x,this.y,this.s);
  }

  connectPoints(pointArray){
    //check if otherp oints are nearby, if so connect w line
    //this.x this.y, p.x,p.y
    stroke(this.c);
    for(let p of pointArray){
      if(p!==this){ //make sure p is not myself 
        let d = dist(this.x,this.y,p.getX(),p.getY());
        if(d<reach){
          line(this.x,this.y,p.getX(),p.getY());
        }
      }
    }
  }

  getX(){return this.x}
  getY(){return this.y}

  move(){
    let xSpeed = noise(this.xTime); //0-1
    xSpeed = map(xSpeed,0,1,-this.maxSpeed,this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;

    //wrap around code
    if(this.x<0){
      this.x+=width;
    }
    if (this.x>width){
      this.x -= width;
    }
  }

}