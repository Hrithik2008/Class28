class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.constraint = Matter.Constraint.create(options);
        World.add(world,this.constraint);
    }
    display(){
        var posA=this.constraint.bodyA.position;
        var posB=this.constraint.bodyB.position;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}