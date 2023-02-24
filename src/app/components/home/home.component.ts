import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 searchKey:string = "";
 public page!: number;

 //filteredPerson: Person;
 filterPost = '';
 userList:any;

 /*
 constructor( private httpClient: HttpClient) { 
  this.userList=[];
  //this.filteredPerson =[];
 } */

 constructor( private myDataService: MyDataService) { }

  ngOnInit(): void {
   // this.getUserList();

   this.myDataService.getData().subscribe((result:any)=>
   {
     this.userList = result;
     console.log(result);
   }); 

    /*this.search.subscribe((val:any)=>{
      this.searchKey = val; 

    })*/
    this.myDataService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  

 /*
  getUserList(){
      this.httpClient.get('https://rickandmortyapi.com/api/character/?page=19').subscribe((result:any)=>
      {
        this.userList = result;
        console.log(result);
      })
  } */

}
