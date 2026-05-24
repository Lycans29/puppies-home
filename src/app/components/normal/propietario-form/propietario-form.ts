/**
 * Formulario con los datos de dueño y mascota
 * Emite en tiempo real el nombre de la mascota usando ValueChanges al padre
 * 
 * Usa ReactiveFormsModule (FormGroup + FormControl) en lugar de FormsModule
 * para tener mayor control sobre validaciones y estado del formulario.
 */
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-propietario-form',
  imports: [ReactiveFormsModule],
  templateUrl: './propietario-form.html',
  styleUrl: './propietario-form.css',
})
export class PropietarioForm implements OnInit {
  // Emite los datos del formulario al padre en cada cambio de valor
  @Output() datosEnviados = new EventEmitter<any>();

  // FormGroup con los cuatro campos del paso 4
  form = new FormGroup({
    nombreDueno:   new FormControl(''),
    nombreMascota: new FormControl(''),
    correo:        new FormControl(''),
    telefono:      new FormControl(''),
  });

  ngOnInit() {
     // Suscripción a valueChanges: emite al padre cada vez que el usuario
    // modifica cualquier campo, actualizando el resumen en tiempo real en este caso solo el nombre de la mascota
    this.form.valueChanges.subscribe(valores => {
      this.datosEnviados.emit(valores);
    });
  }

  reset(): void {
    this.form.reset();
  }

  // Método para envío explícito del formulario
  onSubmit(): void {
    console.log('Formulario:', this.form.value);
  }
  
}