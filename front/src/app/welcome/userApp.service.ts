import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserApp } from './UserApp';

@Injectable({
  providedIn: 'root'
})
export class UserAppService {

  private baseURL = "http://localhost:8080/welcomeUser";

  constructor(private httpClient: HttpClient) { }

  createUser(userApp: UserApp): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, userApp);
  }

}
