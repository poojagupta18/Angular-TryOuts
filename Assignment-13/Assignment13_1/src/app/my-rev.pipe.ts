import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any
   {
   // console.log("Inside transform");
    var str:String[] = value.split('') ;
   
   // console.log(str);
    
    var j = str.length-1;
    var temp = "";
   
    while(j >= 0)
    {
      temp = temp + value[j];
      j--;
    }

    //console.log("Reverse string " + temp);

    return temp;
  }

}
