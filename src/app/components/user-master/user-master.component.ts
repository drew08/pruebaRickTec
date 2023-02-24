import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';



@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {
 searchKey:string = "";
 public page!: number;

 //filteredPerson: Person;
 filterPost = '';
 userList:any;

 constructor( private httpClient: HttpClient) { 
  this.userList=[];
  //this.filteredPerson =[];
 }

  ngOnInit(): void {
    this.getUserList();
    this.search.subscribe((val:any)=>{
      this.searchKey = val;

    })
  }

  public search = new BehaviorSubject<string>("");

  getUserList(){
      this.httpClient.get('https://rickandmortyapi.com/api/character/?page=19').subscribe((result:any)=>
      {
        this.userList = result;
        console.log(result);
      })
  }

}
