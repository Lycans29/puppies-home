import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})

export class TimelineComponent {
  // Input conservado para compatibilidad con NosotrosComponent
  @Input() hitos: Hito[] = [];
}

export interface Hito {
  anio: string;
  titulo: string;
  descripcion: string;
  icono?: string;
}
