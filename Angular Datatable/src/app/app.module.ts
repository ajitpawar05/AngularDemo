import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { DatatablesComponent } from './datatables/datatables.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
