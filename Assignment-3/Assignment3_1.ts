class Arithmetic
{
    Number1:number;
    Number2:number;
    Ans:number;

    constructor(Number1:number, Number2:number)
    {
        this.Number1 = Number1;
        this.Number2 = Number2;
    }

    Addition():number
    {
        this.Ans = this.Number1 + this.Number2;
        return this.Ans;
    }

    Substraction():number
    {
        this.Ans = this.Number1 - this.Number2;
        return this.Ans;
    }

    Multiplication():number
    {
        this.Ans = this.Number1 * this.Number2;
        return this.Ans;
    }

    Division():number
    {
        this.Ans = this.Number1 / this.Number2;
        return this.Ans;
    }
}

var obj1 = new Arithmetic(10, 20);

console.log("Addition of " + obj1.Number1 + " and " +obj1.Number2 + " is " + obj1.Addition());
console.log("Substraction of " + obj1.Number1 + " and " +obj1.Number2 + " is " + obj1.Substraction());
console.log("Multiplication of " + obj1.Number1 + " and " +obj1.Number2 + " is " + obj1.Multiplication());
console.log("Division of " + obj1.Number1 + " and " +obj1.Number2 + " is " + obj1.Division());

var obj2 = new Arithmetic(10, 5);

console.log("");
console.log("Addition of " + obj2.Number1 + " and " +obj2.Number2 + " is " + obj2.Addition());
console.log("Substraction of " + obj2.Number1 + " and " +obj2.Number2 + " is " + obj2.Substraction());
console.log("Multiplication of " + obj2.Number1 + " and " +obj2.Number2 + " is " + obj2.Multiplication());
console.log("Division of " + obj2.Number1 + " and " +obj2.Number2 + " is " + obj2.Division());