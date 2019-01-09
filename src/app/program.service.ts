import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Iprogram} from './program';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private gsoc17url :string = "../assets/db/gsoc2017.json";
  private gsoc16url :string= "../assets/db/gsoc2016.json";
  private gsoc15url :string= "../assets/db/gsoc2015.json";
  private outreachy17 :string= "../assets/db/outreachy17.json";

  constructor(private http  :HttpClient) { }

  getGsoc2017() : Observable<Iprogram[]>{
    return  this.http.get<Iprogram[]>(this.gsoc17url);
  }

  getGsoc2016() : Observable<Iprogram[]>{
    return  this.http.get<Iprogram[]>(this.gsoc16url);
  }

  getGsoc2015() : Observable<Iprogram[]>{
    return  this.http.get<Iprogram[]>(this.gsoc15url);
  }
  getOutreachy17() : Observable<Iprogram[]>{
    return  this.http.get<Iprogram[]>(this.outreachy17);
  }
}
