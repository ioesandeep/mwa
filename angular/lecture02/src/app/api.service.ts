import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "./user.interface";

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient) {

  }

  public getOnlineData(): Observable<Object> {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  public getCachedData(): any {
    try {
      const data = localStorage.getItem('users');
      if (data == null) {
        return [];
      }
      return JSON.parse(data) || [];
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  public getUserDetails(id: string): UserInterface {
    return this.getCachedData().reduce((user, row) => row.login.uuid === id ? row : user, {});
  }
}
