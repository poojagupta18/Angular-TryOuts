class Circle
{
    radius:number;
    pi:number = 3.14;

    constructor(radius:number)
    {
        this.radius = radius;
    }

    Area():number
    {
        return this.pi * this.radius * this.radius;  
    }
}

class CircleX extends Circle
{
    constructor(radius:number)
    {
        super(radius);
    }

    circumference():number
    {   
        return 2 * this.pi * this.radius;
    }
} 

var obj1 = new CircleX(2);
console.log("Area of circle with radius " + obj1.radius + " is " +obj1.Area());
console.log("Circumference of circle with radius " + obj1.radius + " is " +obj1.circumference());

console.log();

var obj2 = new CircleX(3);
console.log("Area of circle with radius " + obj2.radius + " is " +obj2.Area());
console.log("Circumference of circle with radius " + obj2.radius + " is " +obj2.circumference());
