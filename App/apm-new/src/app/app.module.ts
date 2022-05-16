import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { CurrencyCustomPipe } from "./pipes/currency.pipe";
import { ProductCodeCustomPipe } from "./pipes/product-code.pipe";

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { StarComponent } from "../shared/star/star.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    CurrencyCustomPipe,
    ProductCodeCustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
