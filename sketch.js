var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1900,600);

  speed=random(5,10);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  

 if(bullet.isTouching(wall)){
   bullet.velocityX=0;
   wall.velocityX=0;
   if(wall.x-bullet.x<=(bullet.width+wall.width)/2){
    car.velocityX=0;
damage= 0.5*bullet.weight*bullet.speed*bullet.speed/(wall.thickness*wall.thickness*wall.thickness);
   if(damage<=3.68){
    bullet.shapeColor="green";
  }
  if(damage>=12.43){
    bullet.shapeColor="red";
  }
    }
 }
 hasCollided();
  drawSprites();
}
function hasCollided(){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}