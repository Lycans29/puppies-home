/**
 * Muestra el calendario mensual interactivo y un selector de horarios
 * El usuario selecciona un dia y luego la hora, se le emite la combinacion al padre AgendamientoComponent
 * 
 * Los dias pasados se muestran deshabilitados
 * No se puede retroceder a meses anteriores al actual
 * Al cambiar de mes se limpia el di seleccionado
 * La emision al padre solo ocurre cuando el dia y hora esten definidos
 * 
 * Se implemento OnInit para inicializar mesActual con la fecha real del sistema.
 */
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.html',
  styleUrl: './calendario.css',
})
export class CalendarioComponent implements OnInit {

  // Emite un objeto con la fecha y hora seleccionada al componente padre
  @Output() fechaHoraSeleccionada = new EventEmitter<{fecha: string, hora: string}>();

  //Mes en el que se esta mostrando el calendario 
  mesActual!: Date;

  //Dia del mes seleccionado. El null significa ninguno seleccionado
  diaSeleccionado: number | null = null;

  //Hora seleccionada por el usuario
  horarioSeleccionado: string = '';

  //Nombres de los meses para mostrar en el calendario
  meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
           'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  
  //Horarios disponibles para seleccionar         
  horarios: string[] = [
    '09:00 AM', '10:00 AM', '11:30 AM',
    '01:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'
  ];

  // Inicializa el calendario en el mes actual del sistema
  ngOnInit() {
    this.mesActual = new Date();
  }

  //Retorna Mes y año pra el encabezado del calendario
  get nombreMes(): string {
    return `${this.meses[this.mesActual.getMonth()]} ${this.mesActual.getFullYear()}`;
  }

  /**
   * Genera un arreglo con los dias del mes actual para mostrar en el calendario.
   * Los dias anteriores al primer dia del mes se llenan con null para mantener la estructura de la semana.
   * Los dias del mes se llenan con su numero correspondiente.
   */

  get diasDelMes(): (number | null)[] {
    const año = this.mesActual.getFullYear();
    const mes = this.mesActual.getMonth();
    const primerDia = new Date(año, mes, 1).getDay();
    const totalDias = new Date(año, mes + 1, 0).getDate();

    const dias: (number | null)[] = [];
    for (let i = 0; i < primerDia; i++) dias.push(null); // Celdas vacias iniciales
    for (let d = 1; d <= totalDias; d++) dias.push(d);
    return dias;
  }

  // Retrocede al mes anterior, pero no permite ir a meses anteriores al actual
  mesAnterior() {
    const hoy = new Date();
    const anterior = new Date(this.mesActual.getFullYear(), this.mesActual.getMonth() - 1, 1);
    if (anterior >= new Date(hoy.getFullYear(), hoy.getMonth(), 1)) {
      this.mesActual = anterior;
      this.diaSeleccionado = null;
    }
  }

  //Avanza al mes siguiente, no hay restriccion para avanzar a meses futuros 
  mesSiguiente() {
    this.mesActual = new Date(this.mesActual.getFullYear(), this.mesActual.getMonth() + 1, 1);
    this.diaSeleccionado = null;
  }

  // Selecciona un día si no está en el pasado, luego intenta emitir
  seleccionarDia(dia: number) {
    if (this.esPasado(dia)) return;
    this.diaSeleccionado = dia;
    this.emitir();
  }

  // Selecciona un horario y luego intenta emitir
  seleccionarHora(hora: string) {
    this.horarioSeleccionado = hora;
    this.emitir();
  }

  // Verifica si un día ya pasó respecto a la fecha de hoy
  esPasado(dia: number): boolean {
    const fecha = new Date(this.mesActual.getFullYear(), this.mesActual.getMonth(), dia);
    fecha.setHours(0, 0, 0, 0);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return fecha < hoy;
  }

  /**
   * Emite la combinación fecha+hora al padre solo cuando ambos están definidos.
   * La fecha se formatea como "D Mes, YYYY" (ej: "15 Mayo, 2026").
   */
  emitir() {
    if (this.diaSeleccionado && this.horarioSeleccionado) {
      const mes = this.meses[this.mesActual.getMonth()];
      const año = this.mesActual.getFullYear();
      this.fechaHoraSeleccionada.emit({
        fecha: `${this.diaSeleccionado} ${mes}, ${año}`,
        hora: this.horarioSeleccionado
      });
    }
  }

  reset(): void {
    this.mesActual = new Date();
    this.diaSeleccionado = null;
    this.horarioSeleccionado = '';
  }

}