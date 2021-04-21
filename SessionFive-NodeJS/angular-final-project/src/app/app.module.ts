import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    HomeComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
