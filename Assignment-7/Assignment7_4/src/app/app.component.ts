import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "";

  public showMessage1():void
  {
      this.title = "Marvellous Infosystems".toUpperCase();
  }

  public showMessage2():void
  {
      this.title =  "Marvellous Infosystems".toLowerCase();
  }
}
