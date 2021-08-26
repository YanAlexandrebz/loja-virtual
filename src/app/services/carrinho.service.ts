import { ItemCarrinho } from './../models/item-carrinho.model';
import { Produto } from './../models/produto.model';
import { Carrinho } from './../models/carrinho.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: Carrinho = new Carrinho([]);

  constructor() { }

  adicionar(produto: Produto){
    const index = this.carrinho.itens.findIndex(item => item.produto.id === produto.id);
    if(index > -1){
      this.carrinho.itens[index].quantidade++;
    } else {
      const item = new ItemCarrinho(produto,1);
    this.carrinho.itens.push(item);
    }
    console.log("Carrinho: ", this.carrinho);
  }

  //get - permite acessar o metodo como atributo
  get total(){
    return this.carrinho.itens
      //mapeia os itens do carrinho e retornam o valor total por quantidade
      .map((item: ItemCarrinho) => item.produto.preco * item.quantidade)
      .reduce((acc: number, preco: number) => acc + preco);
  }

  get quantidade(){
    if(this.carrinho.itens.length === 0){
      return 0;
    }
    return this.carrinho.itens
      .map((item: ItemCarrinho) => item.quantidade)//pega a qtd
      .reduce((acc: number, quantidade: number) => acc + quantidade);//acumula a quantidade
  }

  get itens() {
    return this.carrinho.itens;
  }


}
