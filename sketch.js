
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0,survivalTime=0;
var groundImage,backDrop; 

function preload(){
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
                                        "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png",
                                           "sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage=loadImage("jungle.jpg")
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,520,20,20);
  monkey.addAnimation("monkey",monkeyRunning);
  monkey.scale=0.1;
  
  ground=createSprite(300,580,600,10);
  //ground.addImage(groundImage);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  foodGroup= new Group();
  obstacleGroup= new Group();
  
  backDrop=createSprite(300,300)
  backDrop.addImage(groundImage)
  backDrop.velocityX=-4;
  backDrop.x=ground.width/2;
}


function draw() {
background("white");
  if(ground.x<0){
 ground.x=ground.width/2
 }
  if(backDrop.x<0){
 backDrop.x=backDrop.width/2
 }
    if(keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -7;
       
    }
 monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  spawnbannas();
  spawnobstacles();
  drawSprites();
  
  stroke("black");
  textSize(20);
  text("Score:"+ score,500,150)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time:"+survivalTime,100,150)
}


function spawnbannas() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(300,400));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
                     
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth =monkey.depth + 1;
    
    foodGroup.add(banana);
  }
}

function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(550,550));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}









