import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  obj = {
    firstName: 'Nihal',
    LastName: 'Sheik',
  }

  url = 'https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private _http: HttpClient) { }

  add(val1, val2) {
    return val1 + val2;
  }

  getObj() {
    return this.obj;
  }

  getApiData() {
    return this._http.get(this.url);
  }



}
