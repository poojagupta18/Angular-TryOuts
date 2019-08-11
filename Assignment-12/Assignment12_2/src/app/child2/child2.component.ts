import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  str = "MarVelloUs";
  count;

  constructor(private obj:StringService)
  { 

  }

  ngOnInit()
  {
    this.count = this.obj.countCapital(this.str);
  }

}
