/**
 * Se importan todos los subcomponentes de la vista home.
 * Su única lógica propia es gestionar el estado del modal Conoce
 * 
 * Flujo del modal Conoce:
 * 1. El usuario hace click en "Conoce más" en un perrito destacado, DstacadosComponent emite @Output() conocerMas con el perrito seleccionado.
 * 2. HomeComponent recibe el evento y llama abrirModa(perrito) 
 * 3. @if(cachorroSeleccionado) renderiza el componente ConoceComponent, con el @input() cachorro seleccionado
 * 4. ConoceComponent emite el  @output() cerrar cuando el usuario cierra el modal, HomeComponent recibe el evento y llama cerrarModal() para ocultar el modal.
 *
 */
import { Component } from '@angular/core';
import { MensajeComponent } from '../../components/inline/mensaje/mensaje';
import { VerCachorrosComponent } from '../../components/normal/ver-cachorros/ver-cachorros';
import { DestacadosComponent } from '../../components/normal/destacados/destacados';
import { ServiciosComponent } from '../../components/normal/servicios/servicios';
import { Router } from '@angular/router';
import { ConoceComponent } from '../../components/normal/conoce/conoce';
import { DoctoraBioComponent } from '../../components/normal/doctora-bio/doctora-bio';
import { UbicacionComponent } from '../../components/normal/ubicacion/ubicacion';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MensajeComponent, VerCachorrosComponent, DestacadosComponent, ServiciosComponent, ConoceComponent, DoctoraBioComponent,UbicacionComponent ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent{

  constructor(private router: Router) {}

  /**
   * Están los datos de los 3 cachorros destacados que se muestran en /home
   * Se pasan a Destacados via @Input() perritos[]
   */

  perritos = [
    { nombre: 'Oliver', raza: 'Pomerania', edad: '3 meses', imagen:'img/oliver.png', disponible: true, tamano: 'Mini', genero: 'Macho', salud:['Vacunado', 'Desparasitado', 'Microchip']},
    { nombre: 'Luna', raza: 'Yorkshire', edad: '2 meses', imagen:'img/luna.png', disponible: true, tamano: 'Mini', genero: 'Hembra', salud:['Vacunada', 'Microchip']},
    { nombre: 'Shakira', raza: 'Pomerania', edad: '1 año', imagen:'img/shakira.png', disponible: false, tamano: 'Pequeño', genero: 'Hembra', salud:['Vacunada']},
  ];

  // Navegación programática al catalogo completo de cachorros.
  irACachorros() {
    this.router.navigate(['/cachorros']);
  }

  /**
   * Aquí se controla la visibilidad del modal Conoce
   * null cuando el @if() lo desmonta del DOM
   * objeto(Cachorro) cuando el @if() lo monta y pasa el cachorro seleccionado via @Input()
   */
  cachorroSeleccionado: any = null;

  // Recibe el cachorro emitido por DestacadosComponent y abre el modal con los datos del cachorro
  abrirModal(perrito: any){
    this.cachorroSeleccionado = perrito;
  }

  // Cierra el modal asignando null, el @if() elimina el componente del DOM
  cerrarModal(){
    this.cachorroSeleccionado = null;
  }
}
