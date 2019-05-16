import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./users.component";
import {UserDetailsComponent} from "./user.details.component";
import {RouterModule} from "@angular/router";
import {routes} from "./user.routes";
import {UserExistGuard} from "./user.exist.guard";

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  providers: [UserExistGuard],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class UserModule {

}
