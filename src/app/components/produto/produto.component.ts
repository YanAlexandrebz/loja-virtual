import { ProdutoService } from './../../services/produto.service';
import { Produto } from 'src/app/models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto | undefined;

  constructor(private route: ActivatedRoute,
              private produtoService: ProdutoService) { }

  ngOnInit(): void {
    //pega o ID da url
    const produtoId = this.route.snapshot.params['id'];
    this.produto = this.produtoService.listarId(produtoId);
  }



}
