
/**
 * Aqui se carga directamente en index.html mediante <app-root></app-root>
 * Mantiene los componentes de layout en todas las rutas y se expone el <router-outlet> para cargar los componentes de cada ruta.
 */
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/normal/navbar/navbar';
import { TopContactoComponent } from './components/normal/top-contacto/top-contacto';
import { FooterComponent } from './components/normal/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  // Se importan los tres componentes de layout global y RouterOutlet para el enrutamiento
  imports: [RouterOutlet, NavbarComponent, TopContactoComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { 
  constructor(private router: Router) {
    // Escucha cada evento de navegación completa
    // Ademas sube el scroll al inicio para que la nueva pagina que cargue comience desde el inicio
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}