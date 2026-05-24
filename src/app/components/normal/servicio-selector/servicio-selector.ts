/**
 * Componente para seleccionar un servicio específico, mostrando 4 opciones con sus precios e íconos.
 * El padre actualiza servicio, subtotal y total en el estado de la cita.
 * El array servicios define el catálogo completo de servicios con todos sus datos
 */

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-servicio-selector',
  standalone: true,
  imports: [],
  templateUrl: './servicio-selector.html',
  styleUrl: './servicio-selector.css',
})

export class ServicioSelector {
  //Emite el servicio elegido con su precio al componente padre
  @Output() seleccionarServicio = new EventEmitter<{nombre: string, precio: number}>();

  // Nombre del servicio activo para aplicar el estilo
  servicioSeleccionado: string = '';

  // Catálogo de servicios disponibles con precio, ícono y descripción
  servicios = [
    { nombre: 'Veterinaria', precio: 35.000, icono: 'bi bi-heart-pulse', descripcion: 'Consulta médica completa y chequeos preventivos.' },
    { nombre: 'Grooming',    precio: 45.000, icono: 'bi bi-scissors',    descripcion: 'Estética profesional para que luzcan increíbles.' },
    { nombre: 'Pet Hotel',   precio: 60.000, icono: 'bi bi-house-heart', descripcion: 'Estadía segura y cómoda con supervisión 24/7.' },
    { nombre: 'Vacunación',  precio: 25.000, icono: 'ti ti-vaccine',     descripcion: 'Esquema completo de vacunación y desparasitación.' },
  ];

  // Actualiza la selección local y emite el servicio con su precio al padre
  seleccionar(servicio: any) {
    this.servicioSeleccionado = servicio.nombre;
    this.seleccionarServicio.emit({ nombre: servicio.nombre, precio: servicio.precio });
  }

  reset(): void {
    this.servicioSeleccionado = '';
  }
}