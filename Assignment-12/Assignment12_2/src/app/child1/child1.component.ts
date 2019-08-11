import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  result;
  iNo1 = 7;

  constructor(private obj1 : NumberService)
   { }

  ngOnInit()
  {
    var fRet = this.obj1.chkPrime(this.iNo1);
    console.log(fRet);
    if(fRet == true)
    {
        this.result = "Prime";
    }
    else
    {
      this.result = "Not Prime";
    }
   
  } 
  

}
