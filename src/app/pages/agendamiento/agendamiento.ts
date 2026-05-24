/**
 * Se realiza el flujo de 4 pasos y se gestiona todo el estado de resumen cita.
 * Cada paso es un componente hijo que emite un @Output() con sus información. Este componente los recibe y actualiza el estado global de la cita.
 * Al confirmar, la cita se almacena en LocalStorage bajo la clave citas y se muestra ConfirmarCitaComponent como modal de éxito.
 * 
 * Ciclo de vida:
 *   ngOnInit   agrega clase CSS 'sin-imagen-fondo' al body para esta página
 *   ngOnDestroy remueve esa clase al salir de /agendamiento
 */

import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TipoMascotaComponent } from '../../components/normal/tipo-mascota/tipoMascota';
import { ServicioSelector } from "../../components/normal/servicio-selector/servicio-selector";
import { CalendarioComponent } from "../../components/normal/calendario/calendario";
import { PropietarioForm } from "../../components/normal/propietario-form/propietario-form";
import { ResumenCitaComponent } from "../../components/normal/resumen-cita/resumen-cita";
import { ConfirmarCitaComponent } from '../../components/normal/confirmar-cita/confirmar-cita';

@Component({
  selector: 'app-agendamiento',
  standalone: true,
  imports: [TipoMascotaComponent, ServicioSelector, CalendarioComponent, PropietarioForm, ResumenCitaComponent, ConfirmarCitaComponent],
  templateUrl: './agendamiento.html',
  styleUrl: './agendamiento.css'
})
export class AgendamientoComponent {
  //Referencias a los componentes hijos para poder llamar sus métodos reset() al cerrar el modal de confirmación
  @ViewChild(TipoMascotaComponent)
  tipoMascotaComponent!: TipoMascotaComponent;

  @ViewChild(ServicioSelector)
  servicioSelectorComponent!: ServicioSelector;

  @ViewChild(CalendarioComponent)
  calendario!: CalendarioComponent;

  @ViewChild(PropietarioForm)
  propietarioForm!: PropietarioForm;

  //Estado de la cita - se contruye paso a paso con los @Output() de cada hijo
  tipo: string = '';
  servicio: string = '';
  fecha: string = '';
  hora: string = '';
  mascota: string = '';
  subtotal: number = 0;  
  total: number = 0;  

  //Paso 1. Recibe el tipo de mascota seleccionada Perro o Gato
  onTipoSeleccionado(tipo: string) { this.tipo = tipo; }

  //Paso 2. Recibe el servicio seleccionado y su precio para actualizar subtotal y total
  onServicioSeleccionado(datos: {nombre: string, precio: number}) {
    console.log('datos recibidos:', datos);
    this.servicio = datos.nombre;
    this.subtotal = datos.precio;
    this.total = datos.precio;
  }

  //Paso 3. Recibe fecha y hora seleccionada del calendario interactivo
  onFechaHora(datos: {fecha: string, hora: string}) {
    this.fecha = datos.fecha;
    this.hora = datos.hora;
  }

  //Datos del propietario recibidos en el paso 4 (Se almacenan completos para el modal confirma cita)
  propietario: any = {};

  // Paso 4. Recibe datos del propietario y mascota
  onDatosEnviados(datos: any) {
    this.mascota = datos.nombreMascota || '';
    this.propietario = datos;
  }

  //Controla la visibilidad del modal de confirmación
  mostrarModal: boolean = false;

  /**
   * Se construye el objeto cita con todos los datos recolectados
   * Sse guardan en localStorage en el array citas y se muestra el modal de excito
   */
  onConfirmar(): void {
    const cita = {
      tipo: this.tipo,
      servicio: this.servicio,
      fecha: this.fecha,
      hora: this.hora,
      subtotal: this.subtotal,
      total: this.total,
      propietario: {
        nombre: this.propietario.nombreDueno,
        mascota: this.propietario.nombreMascota,
        correo: this.propietario.correo,
        telefono: this.propietario.telefono,
      }
    };

    // Recupera citas existentes y se agrega la nueva al array antes de guardar
    const existentes = localStorage.getItem('citas');
    const citas = existentes ? JSON.parse(existentes) : [];
    citas.push(cita);
    
    localStorage.setItem('citas', JSON.stringify(citas)); //Se guarda el array
    this.mostrarModal = true;
  }

  /**
   * Cierra el modal de confirmación y resetea el estado de la cita para permitir agendar una nueva sin recargar la página.
   */
  cerrarModal(): void {
    this.mostrarModal = false;
    // RESET
    this.tipo = '';
    this.servicio = '';
    this.fecha = '';
    this.hora = '';
    this.mascota = '';
    this.subtotal = 0;
    this.total = 0;
    this.propietario = {};

    this.tipoMascotaComponent.reset();
    this.servicioSelectorComponent.reset();
    this.calendario.reset();
    this.propietarioForm.reset();
  }
  //Aplica clase CSS especial al body para ocultar la imagen
  ngOnInit(): void { document.body.classList.add('sin-imagen-fondo'); }

  // Remueve la clase al destruir el componente para restaurar el fondo en otras páginas
  ngOnDestroy(): void { document.body.classList.remove('sin-imagen-fondo'); }
}

