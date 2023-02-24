import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) { }

 getData(){
  return this.http.get('https://rickandmortyapi.com/api/character/?page=19');
 }

}
