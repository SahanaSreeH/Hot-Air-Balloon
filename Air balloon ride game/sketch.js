var balloon;
var database;
var backgroundImg;

function preload(){
backgroundImg = loadImage("3122.jpg");
}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();

  balloon = createSprite(400, 200, 70, 70);
  balloon.shapeColor = "red"
}

function draw() {
  background(backgroundImg);
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }

  var balloonPosition = database.ref('balloon/height');
  

  if(keyDown(UP_ARROW)){
    updateHeight(0, -10);
    balloon.width = balloon.width -3;
    balloon.height = balloon.height -3;
  } 
  if(keyDown(DOWN_ARROW)){
    updateWidth(0, -10);
    balloon.width = balloon.width +3;
    balloon.height = balloon.height +3;
  } 

  drawSprites();
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x' : height.x + x ,
    'y' : height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function shaowError(){
  console.log("Error in writing to the database");
}