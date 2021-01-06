const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, stand1;
var ball, slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500,270,250,15);
    stand2 = new Ground(1000,300,250,15)

    box1 = new Box(490,240,50,50);
    
    box2 = new Box(520,240,50,50);

    box3 = new Box(510,200,50,50);
    box4 = new Box(1050,240,50,50);

    box5 = new Box(1000,240,50,50);
    box6 = new Box(1030,160,50,50);

    ball = new Bird(70,100,40,40);

    slingShot = new SlingShot(ball.body,{x:200, y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    stand1.display();
    stand2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    ball.display();
    slingShot.display();    
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body, {x: 70, y: 100});
        slingShot = new SlingShot(ball.body,{x:200, y:100});

    }
}
