// Art Recreation
// Hannah Tremaine
// 10/26/2023
//Recreation of Vertical-Horizontal No.3
let a;
let b;
let c;
let d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = width/2;
  b = height/2;
  recreation();
}

function recreation(){
  let start1 = width/2;
  let start2 = height/2;
  for (let i =0;i<100;i++){
    c = random(100,width-100);
    d = random(100,height-100);
      if(i% 2 === 0){
        line(a,b,a,d);
        b=d;
      }
      else{
        line(a,b,c,b);
        a=c;
      }
  }
  line(start1,start2,a,start2)
  line(a,b,a,start2)
}