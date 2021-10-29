


//Create namespace for Engine
const World = Matter.World
//Create namespace for World
const Engine = Matter.Engine
//Create namespace for Bodies
const Bodies = Matter.Bodies
//Create namespace for Body

var engine, world
var ball, ground;


function setup() {
  createCanvas(400,400);
//create the engine
engine = Engine.create()
//Add world to the engine
world = engine.world
  

  
   var ball_options = {
    restitution: 0.95    
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground = Bodies.rectangle(100,380,400,20,ground_options);
World.add(world,ground)
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("green");
  Engine.update(engine);
  
  
  fill("red")
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  fill("blue")
  rect(ground.position.x,ground.position.y,400,20)

}

