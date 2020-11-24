const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var world,engine,object,ball,ball1,ball2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
    world=engine.world;
    var opt={
      isStatic:true
    }
    object=Bodies.rectangle(400,390,800,20,opt);
World.add(world,object);
var ballOpt={
  restitution:0.8
}
ball=Bodies.circle(400,160,5,ballOpt)
World.add(world,ball);
ball1=Bodies.circle(250,160,5,ballOpt)
World.add(world,ball1);
ball2=Bodies.circle(350,160,6,ballOpt)
World.add(world,ball2);
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,20);
  ellipse(ball.position.x,ball.position.y,40,20);
  ellipse(ball1.position.x,ball1.position.y,40,20);
  ellipse(ball2.position.x,ball2.position.y,40,20);
}