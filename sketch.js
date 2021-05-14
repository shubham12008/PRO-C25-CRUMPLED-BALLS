
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	right_border = new ground(1590,height/2,50,700);
	left_border = new ground(10,height/2,50,700);
	top_border = new ground(width/2,10/2,width,50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#18181d");
 
  paper.display();
  groundObject.display();
  dustbinObj.display();

  right_border.display(); 
  left_border.display(); 
  top_border.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y: -145});
	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-130,y: 145});
		}
    if (keyCode === 32){
		
		paper=new Paper(200,450,70);

	}
}

