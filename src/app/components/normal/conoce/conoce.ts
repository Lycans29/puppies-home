/**
 * Es reutilizable desde /home (DestacadosComponent) y /cachorros (TarjetaComponent)
 * Muestra la ficha completa del cachorro seccionado y permite contactar a WhatsApp con mensaje predeterminado
 * 
 * Comunicación con el padre
 * - Recibe el cachorro a mostrar por @Input() desde el padre
 * - Emite un evento de cierre por @Output() para que el padre pueda ocultar el modal
 * 
 * Extiende BaseComponent para acceder a TelefonoLink al genrar la URL de WhatsApp con mensaje predeterminado
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../../core/herencia/base';

@Component({
  selector: 'app-conoce',
  standalone: true,
  imports: [],
  templateUrl: './conoce.html',
  styleUrl: './conoce.css',
})
export class ConoceComponent extends BaseComponent{
  // Objeto cachorro recibido del componente padre con todos sus datos
  @Input() cachorro: any;

  // Evento emitido al padre para que se desmonte el modal del DOM
  @Output() cerrar = new EventEmitter<void>();

  //Emite el evento del cierre hacia el componente padre
  cerrarModal(){
    this.cerrar.emit();
  }

  /**
   * Genera el mensaje de WhatsApp con el nombre y raza del cachorro
   * encodeURIComponent asegura que el texto sea válido en la URL wa.me
   *  El número de teléfono se toma de BaseComponent (telefonoLink)
   */
  getMensaje(): string {
  return encodeURIComponent(
    `Hola, estoy interesado en ${this.cachorro?.nombre} (${this.cachorro?.raza}). ¿Me pueden dar más información?`
  );
}

}
