import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarvellousProject';
  str = "";
  
  sendMessage(value)
  {
    this.str = value;
  }
}
