//Create variables here
var dog, happyDog, database,foodS,foodStock;
function preload()
{
	dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}


function setup() {
	createCanvas(500, 500);
  

  dog = createSprite(width/2,height/2, 30,30);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
fill ("white");
textSize(20);
if (foodS!==undefined){text("Stock: " + foodS,width/2-55,100)}

if (foodS>19){
fill("yellow");
noStroke()
text("press up arrow to feed your pet", width/2-150,50)}

}


function readStock(data) {
  foodS = data.val();

}

function writeStock(x) {
  if (x<=0){
    x=0;
  }
  else{
    x-=1;
  }
  database.ref('/').update({
      Food: x
    })
}