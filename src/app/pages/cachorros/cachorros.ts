/**
 * Se gestiona el estado del filtro, paginación y modal Conoce para el catalogo de cachorros
 * Se importan los subcomponentes necesarios para la vista de cachorros.
 * 
 * Lógica de paginación:
 * porPagina = 6(constante)
 * totalPaginas = Math.ceil(perritosFiltrados.length / porPagina)
 * paginaActual = slice de perritosFiltrados según paginaActual y porPagina
 * Al aplicar un filtro nuevo, pagina Actual se resetea a 1
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { BannerCachorrosComponent } from '../../components/normal/banner-cachorros/banner-cachorros';
import { FiltroCachorrosComponent } from '../../components/normal/filtro-cachorros/filtro-cachorros';
import { ConoceComponent } from '../../components/normal/conoce/conoce';
import { TarjetaCachorroComponent } from '../../components/normal/tarjeta-cachorro/tarjeta-cachorro';
import { PaginacionComponent } from '../../components/normal/paginacion/paginacion';


@Component({
  selector: 'app-cachorros',
  standalone: true,
  imports: [BannerCachorrosComponent, FiltroCachorrosComponent, ConoceComponent, TarjetaCachorroComponent, PaginacionComponent],
  templateUrl: './cachorros.html',
  styleUrl: './cachorros.css',
})
export class CachorrosComponent {
  /** 
   * Array con todos los cachorros actuales.
   * NUNCA se modifican directamente, los filtros trabajan sobre perritosFiltrados
  */
  
  perritos = [
    { nombre: 'Oliver', raza: 'Pomerania', edad: '3 meses', imagen:'img/oliver.png', disponible: true, tamano: 'Mini', genero: 'Macho', salud:['Vacunado', 'Desparasitado', 'Microchip']},
    { nombre: 'Luna', raza: 'Yorkshire', edad: '2 meses', imagen:'img/luna.png', disponible: true, tamano: 'Mini', genero: 'Hembra', salud:['Vacunada', 'Microchip']},
    { nombre: 'Shakira', raza: 'Pomerania', edad: '1 año', imagen:'img/shakira.png', disponible: false, tamano: 'Pequeño', genero: 'Hembra', salud:['Vacunada']},
    { nombre: 'Max', raza: 'Pomerania', edad: '4 meses', imagen:'img/perrito1.png', disponible: true, tamano: 'Mediano', genero: 'Macho', salud:['Vacunado', 'Desparasitado']},
    { nombre: 'Bella', raza: 'Yorkshire', edad: '5 meses', imagen:'img/bella.png', disponible: false, tamano: 'Mediano', genero: 'Hembra', salud:['Vacunada', 'Desparasitada']},
    { nombre: 'Rocky', raza: 'shitzu', edad: '3 meses', imagen:'img/rocky.png', disponible: true, tamano: 'Pequeño', genero: 'Macho', salud:['Vacunado', 'Desparasitado']},
    { nombre: 'Linda', raza: 'shitzu', edad: '4 meses', imagen:'img/linda.png', disponible: true, tamano: 'Pequeño', genero: 'Hembra', salud:['Vacunado', 'Desparasitado']},

  ];
  //Numero fijo de cachorros por pagina, si se cambia aquí afecta a toda la paginacion
  readonly porPagina = 6;

  //Pagina actualmente mostrada, se resetea a 1 al aplicar cualquier filtro nuevo
  paginaActual = 1;

  // Copia del array original que se actualiza al aplicar filtros
  perritosFiltrados = [...this.perritos];

  //Cachorros activo en el modal Conoce, null si no hay ninguno abierto
  cachorroSeleccionado: any = null;

  //Numero total de paginas basado en los resultados filtrados
  get totalPaginas(): number {
    return Math.ceil(this.perritosFiltrados.length / this.porPagina); // ceil redondea hacia arriba para mostrar una pagina extra si hay sobras, ej: 7 cachorros con 6 por pagina da 2 paginas
  }

  //Slice del array filtrado para mostrar solo los cachorros de la pagina actual
  get perritosPagina(): any[] {
    const inicio = (this.paginaActual - 1) * this.porPagina; // Ej: pagina 2 con 6 por pagina => (2-1)*6 = 6, muestra del indice 6 al 11 (6 cachorros)
    return this.perritosFiltrados.slice(inicio, inicio + this.porPagina); 
  }

  // Cambia la pagina activa, llamado por @output(paginaCambiada) del componente de PaginacionComponent
  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  /** 
   * Aplica los filtros recibidos de FiltroCachorrosComponent a perritosFiltrados
   * Si un campo viene vació, ese criterio no se aplica, ej: raza vacía muestra todas las razas
   * Al filtrar, se resetea a la pagina 1 para evitar paginas vacías 
   */

  filtrarCachorros(filtros: any) {
    this.perritosFiltrados = this.perritos.filter(p => {
      const coincideRaza = !filtros.raza || p.raza === filtros.raza;
      const coincideEdad = !filtros.edad || p.edad === filtros.edad;
      return coincideRaza && coincideEdad;
    });
    this.paginaActual = 1;
  }
  // Abre el modal con el cachorro seleccionado desde TarjetaCachorroComponent
  abrirModal(perrito: any) { this.cachorroSeleccionado = perrito; }

  //Cierra el modal. Se desmonta el ConoceComponent del DOM
  cerrarModal() { this.cachorroSeleccionado = null; }
}



