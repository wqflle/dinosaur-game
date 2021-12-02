
var trex ,trex_running;
function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage = loadAnimation("ground2.png")
}

function setup(){
  createCanvas(600,400)
  
  edges = createEdgeSprites();
  //create a trex sprite

ground = createSprite(0,380,600,15)
ground.addAnimation("groundimage",groundimage)

  trex = createSprite(50,350,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale =0.5;
 
}

function draw(){
  background("lightgrey")

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 1; // gravity

  trex.collide(ground);

  
  drawSprites();

}
