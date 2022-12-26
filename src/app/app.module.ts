import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataBindingComponent } from './GRID/data-binding/data-binding.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    ButtonsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
