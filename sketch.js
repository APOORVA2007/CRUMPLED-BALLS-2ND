
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paperObj,ground,dustbinObj;

 function setup() {
	 createCanvas(1400, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

   dustbinObj = new Dustbin(1200,560,200,200);
   paperObj = new Paper(200, 660, 60);
   ground = new Ground(width/2, 670, width, 20);


     Engine.run(engine);
  
}


function draw() {

  background(255);

  Engine.update(engine);

  ground.display();
  dustbinObj.display();
  paperObj.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paperObj.body, paperObj.body.position, 
		   {x:130, y: -130})
	}

  }




