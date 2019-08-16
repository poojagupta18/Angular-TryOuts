import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMul'
})
export class MyMulPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any
  {
    var mul = value * args[0];
    return mul;
  }

}
