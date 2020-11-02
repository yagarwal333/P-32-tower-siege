class Ground{
  constructor(posx, posy, width, height){
    var options = {
      'isStatic':true
    }
    this.body = Bodies.rectangle(posx, posy, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER);
    fill(100);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
}
