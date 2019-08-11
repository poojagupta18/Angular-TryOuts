import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArithmeticService } from './arithmetic.service'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmeticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
