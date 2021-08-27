import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    ProdutoComponent,
    CarrinhoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
