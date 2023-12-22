// This demo will show a way to load image assets BEFORE
// attaching them to a p5play sprite. This may be useful
// if you have lots to load and want to be able to create 
// a loading screen of some sort.

// Note: it looks like p5play may gracefully handle not
// having assets loaded, which is why their examples rarely
// use preload. So you may also be able to just skip preload
// for most assets...

let pinSprite;
let pinImages = [];
let loadingCounter = 0;
let programStarted = false;

function finishedLoading() {
  loadingCounter++;
  print(loadingCounter);
}
function preload() {
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + (i + 1) + ".png", finishedLoading));
  }
}

function setup() {
  createCanvas(500, 560); ellipseMode(CORNER);
  //cloudAni = loadAni('assets/pin-01.png', 9);

}

function createSprites() {
  //once all the assets have been loaded, create the sprites that will need them
  pinSprite = new Sprite(width / 2, height / 2, 50, 50);
  pinSprite.addAni("idle",
    pinImages[0],
    pinImages[1],
    pinImages[2],
    pinImages[3],
    pinImages[4],
    pinImages[5],
    pinImages[6],
    pinImages[7],
    pinImages[8]);
}

function draw() {
  if (!programStarted) {
    if (loadingCounter < 9) { //still loading...could add a progress bar if needed
      fill(255); circle(0, 0, height);
      fill(200, 150, 100);
      circle(0, 0, map(loadingCounter, 0, 9, 0, height));
    }
    else {
      createSprites();
      programStarted = true;
    }
  }
  else {
    clear();
    if (kb.pressing('space')) {  //space
      pinSprite.visible = false;
    }
    else pinSprite.visible = true;
  }


}