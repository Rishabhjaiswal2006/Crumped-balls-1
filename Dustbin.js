class Dustbin{
    constructor(x,y,width,height){
        var rest={
               
                isStatic:true
            }
    
            this.body = Bodies.rectangle(x,y,width,height,rest);
            this.width = width;
            this.height = height;
            World.add(MYworld,this.body);
    }   
    
        display(){
            var pos = this.body.position ;
            push();
            rectMode(CENTER);
            stroke(0);
            fill("white");
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
    }