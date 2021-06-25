var dog, dogImage, happyDogImage, happyDog, database, FoodS, foodStock

function preload()
{
	dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800,500);
   
       database = firebase.database()

  dog = createSprite(440,300,40,40);
  dog.addImage(dogImage);
  dog.scale = 0.2

  foodStock = database.ref("Food").on("value",readStock)
  
}


function draw() {  
  background("green")
   
  
   stroke("grey")
   fill("grey")
   textSize("10")
   text("Note: Press UP_ARROW Key To Feed The Dog",310,20)

    if(keyDown(UP_ARROW)){
      writeStock(FoodS)
      dog.changeImage(happyDogImage)
    }

  drawSprites();
  
}

function readStock(data){
   FoodS = data.val()
}

function writeStock(x){
  if(x <= 0){
    x = 0
  } else{
    x = x-1
  }
   database.ref("/").update({
     food : x
   })
}

