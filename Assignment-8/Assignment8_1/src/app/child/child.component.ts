import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public name = "";
   
  constructor() { }

  @Output() obj = new EventEmitter();
  
  ngOnInit() {
  }

  sendMessage(value):void
  {
     this.obj.emit(value);
  }

}
