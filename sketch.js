let sky;
let rocket;
var rocket_img;
var sky_img;


var vx = 0;
var g = 0.05;
var vy = 1;

function preload()
{
  rocket_img = loadImage("Rocket.png");
  sky_img = loadImage("sky.jpg");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  rocket = createSprite(100,600,30,30);
  rocket.addImage(rocket_img);
  rocket.scale = 0.2;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(sky_img,0,0);
  //push()
  //fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  //pop();

  //fall down
  
  rocket.position.y-=vy
    rocket.position.x+=vy
  drawSprites();
}


