const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, sand1, sand2, sand3, sand4, sand5;
var box1, box2;
var log1;

function setup() {
  createCanvas(850,400);
  engine = Engine.create();
  world = engine.world;
 
  var ground_options = {
    isStatic : true 

  }
  ground = Bodies.rectangle(400,400,1200,20, ground_options);
  World.add(world, ground);
  
  var ball_options = {
    restitution : 0.5
  }
  ball = Bodies.circle(400,200,20, ball_options);
  World.add(world, ball);
  var sand1_options = {
    restitution : 0.3
  }
  sand1 = Bodies.circle(300,20,10, sand1_options);
  World.add(world, sand1);

  var sand2_options = {
    restitution : 0.3
  }
  sand2 = Bodies.circle(300,20,10, sand2_options);
  World.add(world, sand2);
  var sand5_options = {
    restitution : 0.3
  }
  sand5= Bodies.circle(300,20,10, sand5_options);
  World.add(world, sand5);
  var sand3_options = {
    restitution : 0.3
  }
  sand3 = Bodies.circle(300,20,10, sand3_options);
  World.add(world, sand3);
  var sand4_options = {
    restitution : 0.3
  }
  sand4 = Bodies.circle(300,20,10, sand4_options);
  World.add(world, sand1);

 

  box1 = new Box(500,300,80,80);
box2 = new Box(200,200,60,30)
log1 = new log(505,350,10,PI/2);
}

function draw() {
  background("green");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 900, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y , 20,20);
  ellipseMode(RADIUS);
  ellipse(sand1.position.x, sand1.position.y , 5,5);
  ellipseMode(RADIUS);
  ellipse(sand2.position.x, sand2.position.y , 5,5);
  ellipseMode(RADIUS);
  ellipse(sand3.position.x, sand3.position.y , 5,5);
  ellipseMode(RADIUS);
  ellipse(sand4.position.x, sand4.position.y , 5,5);
  ellipseMode(RADIUS);
  ellipse(sand5.position.x, sand5.position.y , 5,5);

  box1.display();
log1.display();
box2.display();
  //drawSprites();
}