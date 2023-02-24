import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

 getData(){
  return this.http.get('https://rickandmortyapi.com/api/character/?page=19');
 }

}
