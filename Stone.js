class Stone{
    constructor(x,y,r){
        var options={
            'friction':1,
            'restitution':1.5,
            'density':1.2
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }
}