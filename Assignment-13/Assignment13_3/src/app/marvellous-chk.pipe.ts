import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform 
{
   transform(value:number, param:string): string
    {
      console.log("inside transorm");
      if(param == "Prime")
      {
          var sum = 0;

          for(var i = 1; i <= (value/2); i++)
          {
            if(value % i == 0)
            {
              sum = sum + i;
              if(sum > 1)
              {
                break;
              }
            }
          }
          if(sum == 1)
          {
            return "It is Prime number";
          }
          else
          {
            return "It is not Prime number";
          }
      }
      else if(param == "Perfect")
      {  
        var sum = 0;

        for(var i = 1; i <= (value/2); i++)
        {
          if(value % i == 0)
          {
            sum = sum + i;
            if(sum > value)
            {
              break;
            }
          }
        }
        if(sum == value)
        {
          return "It is Perfect number";
        }
        else
        {
          return "It is not Perfect number";
        }
      }
      else if(param == "Odd")
      {
        if(value % 2 != 0)
        {
          return "It is odd number";
        }
        else
        {
          return "It is not odd number";
        }
      }
      else if(param == "Even")
      {
        if(value % 2 == 0)
        {
          return "It is even number";
        }
        else
        {
          return "It is not even number";
        }
      }
    }
}
