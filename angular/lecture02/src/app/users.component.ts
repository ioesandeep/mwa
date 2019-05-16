import {Component} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-users',
  template: `
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Username</th>
        <th>DOB</th>
        <th>Phone</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let user of users">
        <!--Replace with a pipe -->
        <td>{{getUserName(user)|titlecase}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.email}}</td>
        <td>{{user.login.username}}</td>
        <td>{{user.dob.date|date:'MM/dd/yyyy'}}</td>
        <td>{{user.phone}}</td>
        <td>
          <a [routerLink]="[user.login.uuid]">view all details</a>
        </td>
      </tr>
      </tbody>
    </table>`
})
export class UsersComponent {
  private users: Array<any>;

  constructor(private api: ApiService) {
    this.users = api.getCachedData('users');
  }

  public getUserName(user: any): string {
    return `${user.name.title} ${user.name.first} ${user.name.last}`;
  }
}
