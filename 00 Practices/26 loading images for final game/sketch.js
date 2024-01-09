// Loading screen/setting up assets
// hannah tremaine
// 12/26/2023

let fishImages = [];
let decorImages = [];
let plantImages = [];
let buttonImages = [];
let uiImages = [];
let backgroundImages = [];
let programStarted = false;
let totalCounter = 0;

let tinyFishO, tinyFishPi, tinyFishPu, tinyFishR;

function finishedLoading(){
  totalCounter++;
  print(totalCounter);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i =0; i<18;i++){ //fish images
    fishImages.push(loadImage("assets/shopItems/fish/fish"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<4;i++){ //decor images
    decorImages.push(loadImage("assets/shopItems/decor/decor"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<6;i++){ //plant images
    plantImages.push(loadImage("assets/shopItems/plants/plant"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<51;i++){ //button images
    buttonImages.push(loadImage("assets/buttons/button"+(i)+".jpg",finishedLoading))
  }
  for(let i =0; i<12;i++){ //ui images
    uiImages.push(loadImage("assets/ui/ui buttons/b"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<5;i++){ //plant images
    backgroundImages.push(loadImage("assets/backgrounds/water"+(i)+".png",finishedLoading))
  }
}

function createSprites(){
  tinyFishO = loadAnimation(fishImages[0], { frameSize: [16, 16], frames: 32 });
  tinyFishPi = loadAnimation(fishImages[1], { frameSize: [16, 16], frames: 32 });
  tinyFishPu = loadAnimation(fishImages[2], { frameSize: [16, 16], frames: 32 });
  tinyFishR = loadAnimation(fishImages[3], { frameSize: [16, 16], frames: 32 });
}

function draw() {
  if(!programStarted){
    if(totalCounter<96){
      fill(255,0,0);
      rect(0,0,width,height);
    }
    else{
      createSprites();
      programStarted = true;
    }  
  }
  else{
    clear();
    fill(0,255,0);
    rect(0,0,width,height);
    animation(tinyFishPu, 200, 100);
  }
}
