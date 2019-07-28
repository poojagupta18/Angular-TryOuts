import { Component,Input , OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public name = "";
  @Input() public str = "";
  constructor() { }

  @Output() obj = new EventEmitter();
  
  ngOnInit() {
  }

  sendMessage():void
  {
     this.obj.emit("Hello from child");
  }

}
