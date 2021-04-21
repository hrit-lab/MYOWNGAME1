const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var PLAY = 1;
 var END = 0;
 var gameState = "PLAY";
var bg1,bg2;
var whiteHat, whiteHatImg, blueHat,blueHatImg,brownHat,brownHatImg,greenHat,greenHatImg,orangeHat,orangeHatImg,purpleHat,purpleHatImg,redHat,redHatImg,yellowHat,yellowHatImg;
var child;
var stone;
var world,engine;

function preload(){
 bg1 = loadImage("bg1.jpg");
 //bg2 = loadImage("bg2.jpg");
 blueHatImg = loadImage("blue hat.png")
 brownHatImg = loadImage("brown hat.png");
orangeHatImg = loadImage("orange hat.png");
purpleHatImg = loadImage("purple hat.png");
redHatImg = loadImage("red hat.png");
  yellowHatImg = loadImage("yellow hat.png");
  whiteHatImg = loadImage("white hat.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,500);

  child = new Child(50,400);
  stone = new Stone(1000,400,20);
  blueHat = createSprite(1000,400);
  blueHat.addImage(blueHatImg);
  brownHat = createSprite(1000,400);
  brownHat.addImage(brownHatImg);
  greenHat = createSprite(1000,400);
  greenHat.addImage(greenHatImg);
  redHat = createSprite(1000,400);
  redHat.addImage(redHatImg);
  yellowHat = createSprite(1000,400);
  yellowHat.addImage(yellowHatImg);
  whiteHat = createSprite(1000,400);
  whiteHat.addImage(whiteHatImg);
  purpleHat = createSprite(1000,400);
  purpleHat.addImage(purpleHatImg);
}

function draw() {
  background(bg1);
  Engine.update(engine);
 // gameCamera.x = gameCamera.x +1;
  child.display();
  stone.display();
  drawSprites();
}