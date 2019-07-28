function chkPrime(iNo:number):boolean
{
    var iSum:number = 0;
    
    for(var i:number = 1; i < iNo; i++)
    {
        if(iNo % i == 0)
        {
            iSum += i;
        }
    }

    if(iSum == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var bRet:boolean = chkPrime(11);

if(true == bRet)
{
    console.log("It is a prime Number");
}
else
{
    console.log("It is not prime Number");
}