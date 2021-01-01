var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
fixedrect = createSprite(200,100,50,80);
fixedrect.velocityX=3
fixedrect.shapeColor="green";
movingrect = createSprite(800,100,50,80);
movingrect.velocityX=-3
movingrect.shapeColor="green";

}

function draw() {
background(0);
bounceOff(movingrect,fixedrect);
drawSprites();
}