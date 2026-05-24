import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invitacion',
  imports: [],
  templateUrl: './invitacion.html',
  styleUrl: './invitacion.css',
})
export class InvitacionComponent {
  @Output() explorarCamadas = new EventEmitter<void>();

  irACachorros() {
    this.explorarCamadas.emit();
  }
}
