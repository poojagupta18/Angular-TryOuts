function Maximum(arr:number[]):number
{
    var i:number = 0;
    var large:number = arr[0];

    for(i = 1; i<arr.length; i++)
    {
        if( arr[i] > large )
        {
            large = arr[i];
        }
    }
    return large;
}

var brr:number[] = new Array(23, 89, 6, 29, 56, 45, 77, 32);

var iRet:number = Maximum(brr);

console.log("Maximum Number is", iRet)