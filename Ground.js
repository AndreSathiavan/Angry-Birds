class Ground {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true

      }
      this.body = Bodies.rectangle(600, 790, 1200, 20, options);
      this.width = 1200;
     this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill('brown');
      rect(pos.x, pos.y, this.width, this.height);
      //pop();
    }
  };
  