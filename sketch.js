var door,closedimg,opendoorimg
var human
var box1,box2,box3,boximg,box4,box5
var groundimg, ground
var key, keyimg
var doorknob
var sem=randomNumber(1,5)
var r=box+sem.x
var t=box+sem.y

function preload(){
  closedimg=loadImage("photos/closeddoor.png")
  boximg= loadImage("photos/bluesquare.png")
  groundimg= loadImage("photos/wooden-floor.jpg")
  keyimg= loadImage("photos/key(1).png")
  opendoorimg=loadImage("photos/opendoor.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  door= createSprite(400, 200, 50, 150);
  human= createSprite(200,200,20,20);
  door.addImage("dor",closedimg) ;
  door.scale=0.4

  box1= createSprite(190,220,20,20)
  box1.addImage("som",boximg)
  box1.scale=0.2;

  ground= createSprite(200,200,displayWidth,displayHeight)
  ground.addImage("sem",groundimg);
  
  box2=createSprite(600,280,20,20);
  box2.addImage("rem",boximg);
  box2.scale=0.2

  box3=createSprite(300,400,20,20);
  box3.addImage("mer",boximg);
  box3.scale=0.2

  box4=createSprite(400,400,20,20);
  box4.addImage("er",boximg);
  box4.scale=0.2

  box5=createSprite(320,100,20,20);
  box5.addImage("er",boximg);
  box5.scale=0.2

  key=createSprite(r,t,20,20);
  key.addImage("rm",keyimg)
  key.scale=0.1

  doorknob=createSprite(door.x+35,door.y-8,10,10)

  
}

function draw() {
  background(255,255,255); 
  //image(closed, door.x, door.y);
  human.x=mouseX
  human.y=mouseY
  human.depth=box1.depth+3
  door.depth=ground.depth+1
  box1.depth=ground.depth+3
  box2.depth=ground.depth+3
  box5.depth=box1.depth
  key.depth=ground.depth+2
  doorknob.depth=door.depth+2

  if(mousePressedOver(box1)){
    box1.x=mouseX
    box1.y=mouseY
  }
  else if(function mouseReleased(){}){
   app(0.00000001,0);
  }


  if(mousePressedOver(box2)){
    box2.x=mouseX
    box2.y=mouseY
  }
  else if(function mouseReleased(){}){
    app1(0.00000001,0);
   }

  if(mousePressedOver(box3)){
    box3.x=mouseX
    box3.y=mouseY
  }
  else if(function mouseReleased(){}){
    app2(0.00000001,0);
   }

  if(mousePressedOver(box4)){
    box4.x=mouseX
    box4.y=mouseY
  }
  else if(function mouseReleased(){}){
    app3(0.00000001,0);
   }

  if(mousePressedOver(box5)){
    box5.x=mouseX
    box5.y=mouseY
  }
  else if(function mouseReleased(){}){
    app4(0.00000001,0);
   }
  
   if(mousePressedOver(key)){
    key.x=mouseX
    key.y=mouseY
  }
  else if(function mouseReleased(){}){
    movekey(0.0000000001,0);
   }
   

  openingdoor();
  drawSprites();
}

function app(x,y){
box1.x=box1.x-x
box1.y=box1.y-y

}
function app1(x,y){
  box2.x=box2.x-x
  box2.y=box2.y-y
  
  }
  function app2(x,y){
    box3.x=box3.x-x
    box3.y=box3.y-y
    
    }
    function app3(x,y){
      box4.x=box4.x-x
      box4.y=box4.y-y
      
      }
      function app4(x,y){
        box5.x=box5.x-x
        box5.y=box5.y-y
        
        }

        function movekey(x,y){
key.x=key.x-x
key.y=key.y-y
        }

        function openingdoor(){
          if(key.x===doorknob.x &&
            key.y===doorknob.y){
        var opendoor=createSprite(400,200,20,20);
        opendoor.addImage("srm",opendoorimg);
        opendoor.scale=0.5
       door.lifetime=10;
       doorknob.lifetime=10;

        }
        
      }