/**
 * Visible en todas las páginas
 * Muestra logo, descripcion, enlaces de contacto y legales
 * Se extiende BaseComponent para heredar información de contacto
 */
import { Component } from '@angular/core';
import { BaseComponent } from '../../../core/herencia/base';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent extends BaseComponent {}