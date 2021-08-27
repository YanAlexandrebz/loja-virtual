import { CarrinhoService } from './../../services/carrinho.service';
import { ProdutoService } from './../../services/produto.service';
import { Produto } from 'src/app/models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto | undefined;

  constructor(private route: ActivatedRoute,
              private produtoService: ProdutoService,
              private router: Router,
              private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    //pega o ID da url
    // '+' converte para number
    //const produtoId = +this.route.snapshot.params['id'];
    //this.produto = this.produtoService.listarId(produtoId);

    //Observa e avisa sobre a mudanca, para mudar o componente
    this.route.params.subscribe(routeParams => {
      this.produto = this.produtoService.listarId(+routeParams.id);
    });
  }

  adicionarCarrinho(){
    if(!this.produto){
      return;
    }
    this.carrinhoService.adicionar(this.produto);
    this.router.navigate(['/carrinho']);
  }



}
