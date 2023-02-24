
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { HomeComponent } from 'src/app/components/home/home.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public searchTerm : string = '';
  
  ngOnInit(): void {
    

  }

 // constructor (private userMasterComponent : UserMasterComponent){}

  search(event:any){

    this.searchTerm = (event.target as HTMLInputElement).value;
   // this.userMasterComponent.search.next (this.searchTerm);
    console.log(this.searchTerm);
  }

}
