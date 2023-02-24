
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { UserMasterComponent } from 'src/app/components/user-master/user-master.component';


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
