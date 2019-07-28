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

var obj1 = new Circle(2);
console.log("Area of circle with radius " + obj1.radius + " is " + obj1.Area());

var obj2 = new Circle(3);
console.log("Area of circle with radius " + obj2.radius + " is " + obj2.Area());