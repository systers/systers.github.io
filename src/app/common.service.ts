import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment.prod';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user) {
    return this.http.post(`${API_URL}/SaveUser/`, user)
      .map((response: Response) => response.json());
  }
  GetUser() {
    return this.http.get(`${API_URL}/getUser/`)
      .map((response: Response) => response.json());
  }
  deleteUser(id) {
    return this.http.post(`${API_URL}/deleteUser/`, { 'id': id })
      .map((response: Response) => response.json());
  }
}
