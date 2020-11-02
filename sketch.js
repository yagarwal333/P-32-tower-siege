const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;
var base;
var polygon, polygonImg;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var slingshot;

var score = 0;

var backgroundColor = 0;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1050,700);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(width/2, height, width, 20);
  ground1 = new Ground(590, 550, 350, 10);
  ground2 = new Ground(800, 250, 300, 10);

  //fist pyramid.
  //fifth row.
  box1 = new Box(480, 500);
  box2 = new Box(535, 500);
  box3 = new Box(590, 500);
  box4 = new Box(645, 500);
  box5 = new Box(700, 500);

  //fourth row.
  box6 = new Box(510, 450);
  box7 = new Box(565, 450);
  box8 = new Box(620, 450);
  box9 = new Box(675, 450);

  //third row
  box10 = new Box(540, 400);
  box11 = new Box(595, 400);
  box12 = new Box(650, 400);

  //second row
  box13 = new Box(570, 350);
  box14 = new Box(625, 350);

  //first row
  box15 = new Box(600, 300);

  //second pyramid
  //fourth row
  box16 = new Box(710, 200);
  box17 = new Box(765, 200);
  box18 = new Box(820, 200);
  box19 = new Box(875, 200);

  //third row
  box20 = new Box(740, 150);
  box21 = new Box(795, 150);
  box22 = new Box(850, 150);

  //second row
  box23 = new Box(770, 100);
  box24 = new Box(825, 100);

  //first row
  box25 = new Box(800, 50);

  polygon = Bodies.circle(150, 400, 20);
  World.add(world, polygon);

  slingshot = new Slingshot(polygon, {x:170, y:420});

  Engine.run(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}


function draw() {

  getBackgroundColor();

  if(backgroundColor){
  background(backgroundColor);
}

  box1.Score();
  box2.Score();
  box3.Score();
  box4.Score();
  box5.Score();
  box6.Score();
  box7.Score();
  box8.Score();
  box9.Score();
  box10.Score();
  box11.Score();
  box12.Score();
  box13.Score();
  box14.Score();
  //box15.Score();
  box16.Score();
  box17.Score();
  box18.Score();
  box19.Score();
  box20.Score();
  box21.Score();
  box22.Score();
  box23.Score();
  box24.Score();
  box25.Score();

  textSize(20);
  fill(255);
  text("Score : " + score, 20, 100);

  Engine.update(engine);

  base.display();
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
 // box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  slingshot.display();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 60, 60);

  textSize(20);
  fill(255);
  text("Press space to get another chance", 20, 50);
}

async function getBackgroundColor(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJson = await response.json();
   var datetime = responseJson.datetime;
   var hour = datetime.slice(11, 13);
   if(hour > 6 && hour < 18){
     backgroundColor = color("lightblue");
   } else {
     backgroundColor = color(100);
   }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon, {x:150, y:400});
    slingshot.attach();
  }
}
