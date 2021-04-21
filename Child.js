class Child{
    constructor(x,y){
        var options={
            'density':0.8,
            'friction':1,
            'restitution':1.2
        }
        this.body = Bodies.rectangle(x,y,options);
        this.image = loadImage("child.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}