import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  
  countCapital(str:String):Number
  {
      var i = 0;
      var count = 0;

      for(; i < str.length; i++)
      {
        if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')
        {
            count++;
        }
      }
      return count;
  }
}
