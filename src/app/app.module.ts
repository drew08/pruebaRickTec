import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMasterComponent } from './components/user-master/user-master.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/navBar/nav-bar/nav-bar.component';
import { FilterPipe } from './shared/filter.pipe';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserMasterComponent,
    NavBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
