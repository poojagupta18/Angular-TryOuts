import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMulPipe } from './my-mul.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMulPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
