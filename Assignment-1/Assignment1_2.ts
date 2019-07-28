function Area(radius:number, PI:number = 3.14):number
{
    var area:number = 0;

    area = PI * radius * radius;

    return area;
}

var iRet:number = Area(3, 7.2);
console.log( "Area = " + iRet );

iRet = Area(3);
console.log( "Area = " + iRet );