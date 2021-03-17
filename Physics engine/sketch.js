const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function setup() {
  createCanvas(800,400);
  //Matter's Engine;Engine's Create()
  myEngine=Engine.create();
  //myEngine's world
  myWorld=myEngine.world;

  var options={
    isStatic : true
  }
  ground=Bodies.rectangle(400,390,800,20,options)
  World.add(myWorld,ground)

  box1=Bodies.rectangle(400,200,70,70);
  World.add(myWorld,box1)
  
  var options={
    restitution: 1 
  }
  ball=Bodies.circle(300,200,40,options);
  World.add(myWorld,ball)

  //box1's position's y
  console.log(box1.isStatic);
  
}

function draw() {
  background ("blue");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,70,70)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,40,40)
  
  drawSprites();
}