var square, movingSquare
function setup() {
    createCanvas(1200,800);
    square= createSprite(300, 200, 50, 80);
    movingSquare=createSprite(400,200,80,50)
    square.shapeColor="blue"
    movingSquare.shapeColor="yellow"
}

function draw() {
  background(0);
  movingSquare.x=World.mouseX
  movingSquare.y=World.mouseY  

  console.log(movingSquare.x-square.x)

  collision();

  drawSprites();
  
}

function collision() {

  if (movingSquare.x-square.x<(movingSquare.width/2+square.width/2) && 
  square.x-movingSquare.x<(movingSquare.width/2+square.width/2 )&&
  movingSquare.y-square.y<(movingSquare.height/2+square.height/2) && 
  square.y-movingSquare.y<(movingSquare.height/2+square.height/2)) {
    square.shapeColor="red"
    movingSquare.shapeColor="red"

  }
  else{
    square.shapeColor="blue"
    movingSquare.shapeColor="yellow"

  }
  
}