import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3 >
           Marvellous Infosystems
            </h3>
            <input type = text>
            `,
  styles: [`h3{
            color: blue;
           }`]
})
export class AppComponent {
  title = 'MarvellousProject';
}
