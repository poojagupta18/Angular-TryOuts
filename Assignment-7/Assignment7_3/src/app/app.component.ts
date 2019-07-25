import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Marvellous InfoSystem';

  public showMessage():void
  {
      this.title = "Educating for Better Tomorrow";
  }
}
