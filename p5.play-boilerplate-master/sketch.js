var eatImg, sleepImg, bathImg, drinkImg, brushImg, gymImg, moveImg

var BGImg

var edges, astronaut

function preload(){
eatImg = loadAnimation("images/eat1.png", "images/eat2.png")
sleepImg = loadImage("images/sleep.png")
bathImg = loadAnimation("images/bath1.png", "images/bath2.png")
gymImg = loadAnimation("images/gym1.png", "images/gym2.png")
drinkImg = loadAnimation("images/drink1.png", "images/drink2.png")
brushImg = loadImage("images/brush.png")
moveImg = loadImage("images/move1.png")
BGImg = loadImage("images/iss.png")
}

function setup() {
  createCanvas(600,500);

  astronaut = createSprite(300, 230, 50, 50);
  astronaut.addAnimation("sleeping", sleepImg)
  astronaut.scale = 0.1
}

function draw() {
  background(BGImg);  
  drawSprites();
  textSize(20)
  fill("white")
  text("instructions", 20, 25)
  textSize(15)
  text("Up Arrow = brushing", 20, 55)
  text("Down Arrow = gymming", 20, 70)
  text("Left Arrow = Eating", 20, 85)
  text("Right Arrow = bathing", 20, 100)
  text("M Key = moving", 20, 115)
  //text("N Key = sleeping", 20, 120)
  text("B Key = drinking", 20, 130)

  edges = createEdgeSprites()
  astronaut.bounceOff(edges)


  if(keyDown("UP_ARROW")){
  
    astronaut.addAnimation("brushing", brushImg)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("DOWN_ARROW")){
  
    astronaut.addAnimation("gymming", gymImg)
    astronaut.changeAnimation("gymming")
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }
  
  if(keyDown("LEFT_ARROW")){
  
    astronaut.addAnimation("eating", eatImg)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }

  if(keyDown("RIGHT_ARROW")){
  
    astronaut.addAnimation("bathing", bathImg)
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }

  if(keyDown("B")){
  
    astronaut.addAnimation("drinking", drinkImg)
    astronaut.changeAnimation("drinking")
    astronaut.y = 350
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }

  if(keyDown("M")){
  
    astronaut.addAnimation("moving", moveImg)
    astronaut.changeAnimation("moving")
    astronaut.y = 350
    astronaut.velocityX = 1 
    astronaut.velocityY = 1
  }

}