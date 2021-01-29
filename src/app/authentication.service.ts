import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  login(payload) {
    return this._http.post('localhost:4300/api/login/', payload);
  }

  register(payload) {
    return this._http.post('localhost:4300/api/register/', payload);
  }

}
