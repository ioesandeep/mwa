import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";
import {UserInterface} from "./user.interface";

@Injectable()
export class UserExistGuard implements CanActivate {
  constructor(private api: ApiService, private router: Router) {

  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const user: UserInterface = this.api.getUserDetails(route.params.id);
    if (!user || !user.login) {
      this.router.navigate(['404']);
      return false;
    }

    return true;
  }
}
