var bg,background;
var character;
var snowball;
var lp;

function preload() {
  bg =loadImage("snow2.jpg");
  lp =loadImage("men.png")
}

function setup() {
  createCanvas(1535,744);
  character = createSprite(1230,630);
  character.addImage(lp);
  character.scale = 0.12;

}

function draw() {
  background(bg);
  character.addImage(lp);

  if(keyDown("UP_ARROW")){
    character.y = character.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    character.x = character.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    character.x = character.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
    character.y = character.y +2;
  }


  drawSprites();
}
