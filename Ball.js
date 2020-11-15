class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            density:1.2,
            isStatic:false,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(MYworld,this.body);
    }

    display(){
        var pos=this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}