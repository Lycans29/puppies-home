/**
 * Se importan los subcomponentes necesarios para la página de "Nosotros".
 */
import { Component } from '@angular/core';
import { MisionComponent } from '../../components/normal/mision/mision';
import { TimelineComponent } from '../../components/normal/timeline/timeline';
import { DoctoraComponent } from '../../components/normal/doctora/doctora';
import { InvitacionComponent } from "../../components/normal/invitacion/invitacion";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  imports: [MisionComponent, TimelineComponent, DoctoraComponent, InvitacionComponent,],
  standalone: true,
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class NosotrosComponent {
  
  constructor(private router: Router) {}
  
  //Navegación programática usada por InvitacionComponent para ir al catálogo
  irACachorros() {
    this.router.navigate(['/cachorros']);
  }

}
