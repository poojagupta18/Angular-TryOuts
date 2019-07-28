function Summation(arr:number[]):number
{
    var sum:number = 0;
    var i:number = 0;

    for(i = 0; i < arr.length; i++ )
    {
        sum = sum + arr[i];
    }
    return sum;
}

var brr:number[] = new Array(23, 6, 7, 4, 5, 7);
var iRet:number = Summation(brr);

console.log("Addition is", iRet);