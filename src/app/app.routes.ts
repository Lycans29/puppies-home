/**
 * Se definen el array de las rutas consumida por providerRouter() en app.config.ts
 * No se usa  RouterModule ni NgModule
 */
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CachorrosComponent } from './pages/cachorros/cachorros';
import { NosotrosComponent } from './pages/nosotros/nosotros';
import { AgendamientoComponent } from './pages/agendamiento/agendamiento';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'agendamiento', component: AgendamientoComponent },
  { path: 'cachorros', component: CachorrosComponent},
  { path: 'nosotros', component: NosotrosComponent },
  // Ruta vacia redirige a /home con pathMatch full para evitar redirecciones parciales
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export class AppRoutingModule {}