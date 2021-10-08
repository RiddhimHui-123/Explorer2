class Slab{

    constructor(x,y,width,height){

        var options={
         
                'friction':0.1,
                isStatic:true    
        }
        this.image=loadImage("sprites/salb.png");
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    
    }
    
      
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      } 




}