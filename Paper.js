class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.1,
        'friction':0.3,
        'density':0.8
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius
      this.image = loadImage("paper.png");
        
      World.add(world, this.body);
      }
      display(){
      imageMode(CENTER);
      //circle(this.body.position.x, this.body.position.y, this.radius);
      image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
    }