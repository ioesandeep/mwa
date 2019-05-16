import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient) {

  }

  public getOnlineData(): Observable<Object> {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  public getCachedData(key: string): any {
    try {
      const data = localStorage.getItem(key);
      if (data == null) {
        return;
      }
      return JSON.parse(data);
    } catch (e) {
      console.log(e);
      return;
    }
  }
}
