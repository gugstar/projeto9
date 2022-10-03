//variaveis globais
var box

function setup (){
    createCanvas(600,600)
box = createSprite(200,180,20,20);
}


function draw (){
    background("cyan");
if (keyDown("left")){
  box.x=box.x-5 
  background("red") 
}
if (keyDown("right")){
    box.x=box.x+5 
    background("blue") 
  }
  if (keyDown("down")){
    box.y=box.y+5 
    background("green") 
  }
  if (keyDown("up")){
    box.y=box.y-5
    background("yellow")  
  }
   
drawSprites()    
}