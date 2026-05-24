/**
 * Componente para seleccionar el tipo de mascota (perro o gato)
 * Permite al usuario elegir entre perro o gato y emite el tipo seleccionado al componente padre
 * El padre guarda el valor en this.tipo para incluirlo en el resumen de cita
 * También incluye un método para resetear la selección
 */
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tipo-mascota',
  imports: [],
  standalone: true,
  templateUrl: './tipoMascota.html',
  styleUrl: './tipoMascota.css',
})
export class TipoMascotaComponent {
  // Emite el tipo de mascota seleccionado al componente padre
  @Output() seleccionarMascota = new EventEmitter<string>();

  // Guarda la selección actual para aplicar estilos visuales
  tipoSeleccionado: string = '';

  // Actualiza la selección local y notifica al padre
  seleccionar(tipo: string) {
    this.tipoSeleccionado = tipo;
    this.seleccionarMascota.emit(tipo);
  } 
  
  reset(): void {
    this.tipoSeleccionado = '';
  }
}
