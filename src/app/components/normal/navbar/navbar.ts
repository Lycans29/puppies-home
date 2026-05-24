/**
 * Visible en todas las paginas. Contiene los enlaces de las 4 rutas y se resalta el enlace de la ruta activa
 * 
 * Se usan RouterLink y RouterLinkActive para la navegación entre rutas y el resaltado del enlace activo respectivamente
 * En el movil se convierte en menu hamburguesa
 */
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {}
