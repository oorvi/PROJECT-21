var wall,bullet,speed,weight,thickness,bulletRight,wallLeft,lbullet,lwall,damage;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor=color(255,255,255);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  thickness=random(22,83);
  bullet.depth=wall.depth+1;
}

function draw() {
  background("black");
  
  
  if(hasCollided(bullet,wall)){
   
   var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
   if(damage<100000000){
     wall.shapeColor=color(0,255,0);
   }
   if(damage>100000000){
     wall.shapeColor=color(255,0,0);
   }
  }
  if(bullet.x===1470){
    bullet.velocityX=0;
  }
  console.log(damage);
  drawSprites();
}

function hasCollided(){

bulletRight=bullet.x+bullet.width;
wallLeft=wall.x;
if(bulletRight>=wallLeft){
  return true
}
return false;


}




