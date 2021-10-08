const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImage,Explorer,obstacle1,slab1,lava1;


function preload(){
backgroundImage=loadImage("sprites/jungle.png")


}
function setup(){
    var canvas = createCanvas(4000,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,7000,50);
  Explorer=new explorer(60,680,100,100);
obstacle1=new Obstacle(290,680,90,90);
slab1=new Slab(300,600,150,20);
lava1=new Lava(400,690,80,30);

   

}

function draw(){
    background(backgroundImage);

    Engine.update(engine);
  
    ground.display();
    Explorer.display();
    obstacle1.display();
    slab1.display();
    lava1.display();

   


}


