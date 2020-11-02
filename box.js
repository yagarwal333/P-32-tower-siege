class Box{
  constructor(posx, posy){
    this.body = Bodies.rectangle(posx, posy, 40, 50);
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    if(this.body.speed > 4){
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    } else if(this.body.speed<4){
    rectMode(CENTER);
    fill(255, 0, 255);
    rect(pos.x, pos.y, 40, 50);
  }
}
  Score(){
    if(this.visibility < 0 && this.visibility > -100){
      score++;
    }
  }
}
