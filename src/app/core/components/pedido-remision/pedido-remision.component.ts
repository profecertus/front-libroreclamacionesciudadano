import { Component, Input, OnInit } from '@angular/core';
import { Remision } from '../../../modules/procesos/pedidos/models/remision.model';

@Component({
  selector: 'app-pedido-remision',
  templateUrl: './pedido-remision.component.html'
})
export class PedidoRemisionComponent implements OnInit {

  @Input() remisiones: Remision[];

  constructor() { }

  ngOnInit(): void {
  }

}
