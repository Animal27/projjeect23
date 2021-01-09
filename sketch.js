var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rleg,lleg,bleg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	rleg=createSprite(300,600,20,100);
	rleg.shapeColor="red"

	lleg=createSprite(500,600,20,100);
    lleg.shapeColor="red"

	bleg=createSprite(400,650,200,20);
	bleg.shapeColor="red"

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	var packageOption={
		restitution: 5.0
	  }
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground)
	 box=new Box(400,200,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 box.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite={
		isStatic: true
	  }

    
  }
}



