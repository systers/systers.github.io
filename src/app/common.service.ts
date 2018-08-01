import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user) {
    return this.http.post('https://murmuring-refuge-48696.herokuapp.com/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }
  GetUser() {
    return this.http.get('https://murmuring-refuge-48696.herokuapp.com/api/getUser/')
      .map((response: Response) => response.json());
  }
  deleteUser(id) {
    return this.http.post('https://murmuring-refuge-48696.herokuapp.com/api/deleteUser/', { 'id': id })
      .map((response: Response) => response.json());
  }
}
