
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball = Bodies.circle(100,200,30, ball_options);
World.add(world,ball);
groundObj = new Ground(width/2,670,width,20);
leftSide = new Ground(1100,600,20,120);
rightSide = new Ground(800,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x,ball.position.y,30,30);
  groundObj.show();
  leftSide.show();
  rightSide.show();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,{x:100,y:100},{x:15,y:30});
	}
}

