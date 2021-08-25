import { CheckoutComponent } from './components/checkout/checkout.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InicialComponent},
  {path: 'produto/:id', component: ProdutoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
