import {Component, OnInit} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-home',
  template: `This is home page`
})
export class HomeComponent {
  constructor(private api: ApiService) {
    this.api.getOnlineData().subscribe((data: { results: Array<any> }) => {
      localStorage.setItem("users", JSON.stringify(data.results));
    });
  }
}
