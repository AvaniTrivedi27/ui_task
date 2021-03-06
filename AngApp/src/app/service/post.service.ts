import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://jsonplaceholder.typicode.com/photos"

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get(this.url);
  }

}
