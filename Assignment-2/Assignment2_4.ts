

function power(base:number, pow:number):number
{
    var iMult:number = 1;

    console.log("base" + base);
    console.log("power is " + pow);
    for(var i:number = 0; i < pow; i++ )
    {
        if(i < pow)
        {
            iMult = iMult * base;
            //console.log("multi "+ i+":" + base +" "+ iMult)
        }
        else
            break;
      
    }
   
    return iMult;
}

function chkArmstrong(iNo:number):boolean
{
    var temp:number = iNo;
    var count:number = 0;
    var iDigit:number = 0;
    var sum:number = 0;
    var pow:number = 0;

    while(iNo != 0)
    {
        count++;
        iNo = Math.floor(iNo / 10);
    }
    console.log(count);
    iNo = temp;

   
     while(iNo != 0)
    {
        iDigit = Math.floor(iNo % 10);
        
       // console.log(iDigit);
        console.log("count = " + iDigit);
        pow = power(iDigit, count);
        sum = sum + pow ;
        //console.log("sum is ", sum);
        iNo =Math.floor(iNo / 10) ;
       //console.log("iNo "+ iNo)
        
    }

    if(sum == temp)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var c="153";

var b:boolean = chkArmstrong(parseInt(c));

console.log(b)

if(b)
{
    console.log("It is armstrong.");
}

