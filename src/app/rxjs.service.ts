import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  url = 'https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private _http: HttpClient) { }

  getApiData() {
    let response = this._http.get(this.url);
    let AddData = response.pipe(
      map(data => `Test ${JSON.stringify(data)}`)
    )

    return AddData;
  }

  getFilterData() {
    let response = this._http.get(this.url);
    let filterData = response.pipe(
      filter(data => data !== undefined)
    );

    return filterData;
  }

}
