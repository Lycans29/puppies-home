import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ver-cachorros',
  standalone: true,
  imports: [],
  templateUrl: './ver-cachorros.html',
  styleUrl: './ver-cachorros.css'
})

export class VerCachorrosComponent {

 @Output() verCachorros = new EventEmitter<void>();

  verCachorrosClick() {
    this.verCachorros.emit();
  }  

}