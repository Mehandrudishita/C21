var fixedRect, movingRect;
var r1 , r2 , r3 , r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(900,600,100,100);
  r2 = createSprite(200,600,150,100);
  r3 = createSprite(1000,500,50,100);
  r4 = createSprite(500,200,100,100);
  r1.shapeColor = "green";
  r2.shapeColor = "green";
  r3.shapeColor = "green";
  r4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  r1.velocityX = -3;
  r2.velocityX = 3;

  Bounce(r1 , r2);

  if(isTouching(movingRect , r4)){
    movingRect.shapeColor = "red";
    r4.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    r4.shapeColor = "green";
  }
  
  drawSprites();
}

function isTouching(ob1 , ob2){
  if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2
    && ob2.x - ob1.x < ob1.width/2 + ob2.width/2
    && ob1.y - ob2.y < ob1.height/2 + ob2.height/2
    && ob2.y - ob1.y < ob1.height/2 + ob2.height/2) {
      return true;
}
else {
  return false;
}
}

function Bounce(ob1 , ob2){
if(ob1.x - ob2.x < ob1.width/2 + ob2.width/2 &&
  ob2.x - ob1.x < ob1.width/2 + ob2.width/2){
    ob1.velocityX = (ob1.velocityX)*(-1);
    ob2.velocityX = (ob2.velocityX)*(-1);
  }
  if(ob1.y - ob2.y < ob1.height/2 + ob2.height/2 &&
    ob2.y - ob1.y < ob1.height/2 + ob2.height/2){
      ob1.velocityY = (ob1.velocityY)*(-1);
      ob2.velocityY = (ob2.velocityY)*(-1);
    }
}