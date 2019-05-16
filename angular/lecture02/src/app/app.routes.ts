import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {Status404Component} from "./status.404.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    loadChildren: './user.module#UserModule'
  },
  {
    path: '404',
    component: Status404Component
  }
];
