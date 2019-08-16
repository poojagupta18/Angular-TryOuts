import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any
 {
   var sum = value + args[0];

   console.log(args[0]);
    return sum;
  }

}
