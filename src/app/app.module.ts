import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { SynthesePersonnelComponent } from './synthese-personnel/synthese-personnel.component';


@NgModule({
  declarations: [
    AppComponent,
    SynthesePersonnelComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropDownTreeModule,
    AngularMultiSelectModule,
    
    FormsModule,
    
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
