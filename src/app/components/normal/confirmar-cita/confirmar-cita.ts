/**
 * Se muestra como una ventana emergente cuando el usuario confirma la cita
 * Presenta un resumen final de los datos seleccionados y un boton "Aceptar" para cerrar el modal y resetear el formulario
 * 
 * Comunicación con el padre (AgendamientoComponent):
 *   @Input()  tipo, servicio, fecha, hora: datos de la cita para mostrar en el resumen
 *   @Output() cerrar: notifica al padre que el usuario aceptó; el padre oculta el modal y resetea todo el estado del formulario
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmar-cita',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-cita.html',
  styleUrl: './confirmar-cita.css',
})

export class ConfirmarCitaComponent {
  //Datos de la cita confirmada que se muestran en el resumen del modal
  @Input() tipo: string = '';
  @Input() servicio: string = '';
  @Input() fecha: string = '';
  @Input() hora: string = '';

  // Emite el evento de cierre al padre cuando el usuario hace clic en "Aceptar"
  @Output() cerrar = new EventEmitter<void>();

  // Enlazado al botón "Aceptar" en el template
  cerrarModal(): void {
    this.cerrar.emit();
  }
}
