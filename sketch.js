const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground1;
var pig1, pig2;
var log1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,780,75,75);
    box2 = new Box(950,780,75,75);
    pig1 = new Pig(850,780);
    ground1 = new Ground();
log1 = new Log(850,600 ,275, 20);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground1.display();
}