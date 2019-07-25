import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MarvellousProject';

  public fun():string
  {
      return "Marvellous InfoSystems";
  }
}
