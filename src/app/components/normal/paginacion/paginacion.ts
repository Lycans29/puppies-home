/**
 * Componente de paginación para navegar entre páginas de datos.
 * 
 * Comunicación con el padre (CachorroComponent):
 * - El padre pasa el número total de páginas a través de la propiedad `totalPaginas`.
 * - El padre también pasa la página actual a través de la propiedad `paginaActual`.
 * - Cuando el usuario selecciona una nueva página, el componente emite un evento `paginaCambiada` con el número de la página seleccionada.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [],
  templateUrl: './paginacion.html',
  styleUrl: './paginacion.css',
})

export class PaginacionComponent {
  //Total de páginas disponibles, recibido del componente padre con Marh.ceil
  @Input() totalPaginas: number = 1;

  //Página actual, recibida del componente padre para resaltar la página activa
  @Input() paginaActual: number = 1;

  //Notifica al padre que pagina debe mostrarse
  @Output() paginaCambiada = new EventEmitter<number>();
 
  // Genera un array de números de página para mostrar en la interfaz
  get paginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }
 
  // Valida el rango antes de emitir el evento, evita navegar a páginas inexistentes
  irA(pagina: number) {
    if (pagina < 1 || pagina > this.totalPaginas) return;
    this.paginaCambiada.emit(pagina);
  }

}
