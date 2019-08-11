import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  iNo1 = 17;
  result;

  str = "MarveLLous";
  count;

  constructor(private obj1 : NumberService, private obj2 : StringService)
  {

  }

  ngOnInit()
  {
    var fRet = this.obj1.chkPrime(this.iNo1);

    if(fRet == true)
    {
      this.result = "Prime";
    }
    else
    {
      this.result = "Not Prime";
    }
    this.count = this.obj2.countCapital(this.str);
  }

}
