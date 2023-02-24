
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { HomeComponent } from 'src/app/components/home/home.component';
import { MyDataService } from 'src/app/services/my-data.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public searchTerm : string = '';
  
  ngOnInit(): void {
    

  }

  constructor (private MyDataService : MyDataService){}

  search(event:any){

    this.searchTerm = (event.target as HTMLInputElement).value;
    this.MyDataService.search.next (this.searchTerm);
    console.log(this.searchTerm);
  }

}
