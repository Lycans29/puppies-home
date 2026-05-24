/**
 * Visible en todas las paginas encima del menu Navbar
 * Muestra correo, teléfono y dirección obtenidos de BaseComponent por herencia
 * 
 * Se usa ClipboardModule para copiar el correo al portapeles y el me todo copiado() muestra una alerta de confirmación
 */
import { Component } from '@angular/core';
import { BaseComponent } from '../../../core/herencia/base';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-top-contacto',
  imports: [ClipboardModule],
  standalone: true,
  templateUrl: './top-contacto.html',
  styleUrl: './top-contacto.css',
})

export class TopContactoComponent extends BaseComponent {
  //Confirmación visual tras copiar el correo al portapapeles
  copiado() {
    alert('¡Copiado al portapapeles!');
  }
}
