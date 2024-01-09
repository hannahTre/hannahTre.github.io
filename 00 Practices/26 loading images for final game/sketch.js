// Loading screen/setting up assets
// hannah tremaine
// 12/26/2023

let fishImages = [];
let decorImages = [];
let plantImages = [];
let buttonImages = [];
let backgroundImages = [];
let programStarted = false;
let totalCounter = 0;

function finishedLoading(){
  totalCounter++;
  print(totalCounter);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i =0; i<18;i++){ //fish images
    fishImages.push(loadImage("assets/shopItems/fish/fish"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<51;i++){ //fish images
    buttonImages.push(loadImage("assets/buttons/button"+(i)+".jpg",finishedLoading))
  }
}

function draw() {
  if(!programStarted){
    if(totalCounter<69){
      fill(255,0,0);
      rect(0,0,width,height);
    }
    else{
      programStarted = true;
    }  
  }
  else{
    clear();
    fill(0,255,0);
    rect(0,0,width,height);
  }
}
