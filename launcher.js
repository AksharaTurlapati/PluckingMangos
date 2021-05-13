class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 2,
            stiffness: 0.01
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA != null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
      this.sling.bodyA = body;
  
    }
}