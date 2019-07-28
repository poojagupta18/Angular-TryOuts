function DisplayFactors(iNo:number): void
{
    for(var i:number = 0; i <= ( iNo / 2 ); i++ )
    {
        if( iNo % i == 0 )
        {
            console.log(i);
        }
    }
}

DisplayFactors(20);
