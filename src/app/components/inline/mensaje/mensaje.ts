/**
 * Todo su contenido html, ts, css estan aqui
 * Muestra el titulo de bienvenida y usa el color de una variable global
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [],
  template: `
   <div class=" text-center my-4">
      <h1>¡Bienvenido a The Puppies Home! </h1>
    </div>
  
  `,
  styles: `
    h1{
      color: var(--verde-principal);
    }
  `,
})
export class MensajeComponent {

}
