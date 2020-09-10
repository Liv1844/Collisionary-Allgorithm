var fixedRec,movingRec;


function setup() {
  createCanvas(800,400);
  fixedRec=createSprite(200, 200, 50, 80);
  movingRec=createSprite(400, 200, 80, 30);
  fixedRec.shapeColor="Red";
  movingRec.shapeColor="Red";
  fixedRec.debug=true;
  movingRec.debug=true;
}

function draw() {
  background(0,0,0);
  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;  
  if(movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width/2  
    && fixedRec.x-movingRec.x < fixedRec.width/2 + movingRec.width/2
    && movingRec.y - fixedRec.y < fixedRec.height/2 + movingRec.height/2  
    && fixedRec.y-movingRec.y < fixedRec.height/2 + movingRec.height/2)

    {
      fixedRec.shapeColor="lavender";
  movingRec.shapeColor="lavender";
  }
  else{ 
    fixedRec.shapeColor="Red";
  movingRec.shapeColor="Red";
  }
  drawSprites();
}