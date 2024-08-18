import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactaboutComponent } from './contactabout/contactabout.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    ContactaboutComponent,
    HomeComponent
  ]
})
export class PagesModule { }
