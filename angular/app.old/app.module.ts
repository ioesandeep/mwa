import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter.component';
import {SmartComponent} from './smart.component';
import {DumbComponent} from './dumb.component';
import {IsVisibleDirective} from './isvisible.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SmartComponent,
    DumbComponent,
    IsVisibleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
