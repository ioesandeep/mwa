import {Component, OnInit} from "@angular/core";
import {ApiService} from "./api.service";
import {ActivatedRoute} from "@angular/router";
import {UserInterface} from "./user.interface";

@Component({
  selector: 'app-user>',
  template: `
    <table>
      <tbody>
      <tr>
        <th>Name</th>
        <td>{{user.name.first}}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{{user.email}}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>{{user.phone}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class UserDetailsComponent implements OnInit {
  private id: string;
  private user: UserInterface;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.user = this.api.getUserDetails(this.id);
    })
  }

  ngOnInit(): void {
  }
}
