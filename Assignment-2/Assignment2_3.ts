function Maximum(arr:number[]):number
{
    var largest:number = 0;
    var secondLargest:number = 0;

    for(var i:number = 0; i < arr.length; i++)
    {
        if(arr[i] > largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }

        if(arr[i] > secondLargest && arr[i]!= largest)
        {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

var brr:number[] = new Array(23, 89, 6, 29, 56, 45, 77, 32);
var iRet:number = Maximum(brr);

console.log("Second Maximum number is", iRet);