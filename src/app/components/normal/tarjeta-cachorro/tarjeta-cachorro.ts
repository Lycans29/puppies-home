/**
 * Es usada en el catalogo /cachorros para mostrar a cada cachorro
 * No tiene lógica propia recibe datos y emite eventos al padre
 * 
 * Comunicacion con el padre (CachorrosComponent):
 * - Recibe un objeto cachorro a través de @Input() para mostrar su información.
 * - Emite un evento conocerMas con el objeto cachorro cuando el usuario hace clic en "Conocer más".
 * 
 * El padre (CachorrosComponent) escucha el evento y llama abrirModal($event) para mostrar ConoceComponent con ese cachorro
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-cachorro',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-cachorro.html',
  styleUrl: './tarjeta-cachorro.css',
})

export class TarjetaCachorroComponent {
   // Datos del cachorro que se muestran en la tarjeta
  @Input() cachorro: any;

  // Emite el cachorro completo al padre cuando el usuario quiere ver el detalle
  @Output() conocerMas = new EventEmitter<any>();
 
  // Método enlazado al botón "Conocer más" que emite el evento con el cachorro actual
  verDetalle() {
    this.conocerMas.emit(this.cachorro);
  }
}
