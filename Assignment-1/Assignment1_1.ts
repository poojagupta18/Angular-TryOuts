function Maximun(iNo1:number, iNo2:number, iNo3:number):number
{
    var large:number = 0;
	
    if((iNo1 > iNo2) && (iNo1 > iNo3))
    {
        large = iNo1;
    }
    else if((iNo2>iNo1) && (iNo2>iNo3))
    {
        large = iNo2;
    } 
    else
    {
        large = iNo3;
    }

    return large;
}

var iRet = Maximun(100, 1300, 500);

console.log( "Maximum number is " + iRet);