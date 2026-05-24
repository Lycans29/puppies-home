/**
 * Muestra dos listas desplegables para filtrar raza y edad y un botón Filtrar
 * Cuando el usuario hace clic en filtrar, emite un evento con los criterios seleccionados al padre
 * 
 * Comunicacion con el padre (CachorrosComponent):
 *  @Output() filtroAplicado — emite { raza: string, edad: string }
 *   El padre filtra su array perritos con esos valores y resetea la paginación.
 * 
 * Usa FormsModule para manejar los formularios de las listas desplegables.
 * Si un campo queda vacio, ese criterio no se aplica al filtro (es decir, no se filtra por ese campo).
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-cachorros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filtro-cachorros.html',
  styleUrl: './filtro-cachorros.css',
})
export class FiltroCachorrosComponent {
  //Valor seleccionado en la lista desplegable de raza
  raza: string = '';
  //Valor seleccionado en la lista desplegable de edad
  edad: string = '';

  //Evento que se emite al hacer clic en el botón Filtrar, con los criterios seleccionados al padre
  @Output() filtroAplicado = new EventEmitter<any>();

  //Construye y emite el objeto de filtros con los valores actuales
  aplicarFiltro() {
    this.filtroAplicado.emit({
      raza: this.raza,
      edad: this.edad
    });
  }

  
}
