import {Component, OnDestroy, OnInit} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a [routerLink]="['']">Home</a></li>
      <li><a [routerLink]="['users']">Users</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(private api: ApiService) {
    this.subscription = this.api
      .getOnlineData()
      .subscribe((data: { results: Array<any> }) => {
        localStorage.setItem("users", JSON.stringify(data.results));
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
