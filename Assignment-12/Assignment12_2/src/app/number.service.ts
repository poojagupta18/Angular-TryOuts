import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  chkPrime(iNo1:number) :boolean
  {
    var sum = 0;
   
    for(var i = 1; i <= iNo1/2; i++)
    {
        if(iNo1 % i == 0)
        {
          
            sum = sum + i;
            console.log("sum = " + sum);
            if(sum > 1)
            {
              break;
            }
        }
    }
    if(sum == 1)
    {
      return true;
    }
    else
    {
      return false;
    }     
  }
}
