import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public ans1 = 0;
  public iNo1 = 10;
  public iNo2 = 20;
  public ans2 = 0;

  constructor(private obj : ArithmeticService)
   { 

   }

  ngOnInit()
  {
    this.ans1 = this.obj.Add(this.iNo1, this.iNo2)
    this.ans2 = this.obj.Sub(this.iNo1, this.iNo2);
  }

}
