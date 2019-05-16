import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from "./home.component";
import {Status404Component} from "./status.404.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, Status404Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
