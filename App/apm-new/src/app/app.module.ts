import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { CurrencyCustomPipe } from "./pipes/currency.pipe";

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CurrencyCustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
