import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-destacados',
  imports: [],
  standalone: true,
  templateUrl: './destacados.html',
  styleUrl: './destacados.css',
})
export class DestacadosComponent {

  //recibe los datos del Page
  @Input() perritos: any[] = [];

  // emite al Page cuando hacen clic
  @Output() conocerMas = new EventEmitter<any>();

  verDetalle(perrito: any){
    this.conocerMas.emit(perrito);
  }
}
