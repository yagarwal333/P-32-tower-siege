class Slingshot{
  constructor(bodyA, pointB){
    var options = {
      bodyA : bodyA,
      pointB : pointB,
      stiffness : 0.01,
      length : 3
    }
    this.pointB = pointB;
    this.slingshot = Constraint.create(options);
    World.add(world, this.slingshot);
  }
  fly(){
    this.slingshot.bodyA = null;
  }
  attach(){
    this.slingshot.bodyA = polygon;
  }
  display(){
    if(this.slingshot.bodyA){
    var posA = this.slingshot.bodyA.position;
    var posB = this.pointB;
    strokeWeight(2);
    line(posA.x, posA.y, posB.x, posB.y);
  }
}
}
