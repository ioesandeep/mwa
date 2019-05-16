import {Routes} from "@angular/router";
import {UsersComponent} from "./users.component";
import {UserDetailsComponent} from "./user.details.component";

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: ':id',
    component: UserDetailsComponent
  }
];
