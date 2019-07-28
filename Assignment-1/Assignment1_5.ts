function Fibonacci(iNo:number):void
{
    var next: number = 0;
    var first:number = 0;
    var second:number = 1;
    
    console.log(1);

     while(next != iNo)
     {
       next = first + second;
       console.log(next);
       first = second;
       second = next;

     }
}

Fibonacci(21);