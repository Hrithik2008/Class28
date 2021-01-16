class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.pointB=pointB;
        this.constraint = Matter.Constraint.create(options);
        World.add(world,this.constraint);
    }
    display(){
      if(this.constraint.bodyA){
        var posA=this.constraint.bodyA.position;
        var posB=this.pointB;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
      }
    }
    fly(){
        this.constraint.bodyA = null;
    }
}