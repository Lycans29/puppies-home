/**
 * Muestra en tiempo real todos los datos seleccionados en los 4 pasos para agendar una cita 
 * Se actualiza automáticamente porque cada @Input() esta vinculado directamente desde el estado AgedamientoComponent
 * 
 * Comunicación con el padre (AgendamientoComponent):
 *   @Input() tipo, servicio, fecha, hora, mascota, subtotal, total, propietario
 *             recibe todos los datos del formulario paso a paso
 *   @Output() confirmar  emite el evento cuando el usuario hace clic en
 *                       "Confirmar Cita"; el padre abre el modal de éxito
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resumen-cita',
  imports: [],
  templateUrl: './resumen-cita.html',
  styleUrl: './resumen-cita.css',
})

export class ResumenCitaComponent {

  // Datos de la cita recibidos paso a paso desde AgendamientoComponent
  @Input() tipo: string = '';
  @Input() servicio: string = '';
  @Input() fecha: string = '';
  @Input() hora: string = '';
  @Input() mascota: string = '';
  @Input() subtotal: number = 0;
  @Input() total: number = 0;
  @Input() propietario: any = {};

  // Notifica al padre que el usuario quiere confirmar la cita
  @Output() confirmar = new EventEmitter<void>();

  // Enlazado al botón "Confirmar Cita" template
  confirmarCita(): void {
    this.confirmar.emit();
  }  
}  