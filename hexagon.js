class Hexagon{
    constructor(x,y,scalar,thecolor,initangle=0,special=false,animated=true,redacted=false){
        this.x=x;
        this.y=y;
        this.scalar=scalar;
        this.counter = 0;
        this.angle = initangle;
        this.mycolor = thecolor;
        this.myinc = 60;
        this.animated = animated;
        this.special=special;
        this.redacted=redacted;

    }
    show(){
        angleMode(DEGREES);
        fill(255);
        beginShape();
        if (this.special)
        {
            this.myinc = map(sin(this.counter%360),-1,1,60,140);

        }

        for (let i=0;i<360;i+=this.myinc)
        {

            var xadj = sin(i+this.angle) * this.scalar;
            var yadj = cos(i+this.angle) * this.scalar;

            var colornumber = map(sin(i+this.angle),-1,1,0,255)
            var secondarycolor = color(255,colornumber,255,50);
            
            fill(this.mycolor);
            stroke(secondarycolor);
            
            strokeWeight(1);
            vertex(this.x+xadj,this.y+yadj);

        }
       
        endShape(CLOSE);
        this.counter++;
    }

    move(){
        if(this.animated)
        {
            this.angle++;
        }
        if(this.redacted)
        {
            this.angle += map(noise(this.counter*.01),0,1,-1,4);
        }
    }

}