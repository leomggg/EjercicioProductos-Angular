import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.css']
})

export class Cabecera {
  @Input() logoUrl: string = 'assets/img/logo-pizzeria.png';

  @Output() cambiarColor = new EventEmitter<void>();

  cambiarColorElem() {
    this.cambiarColor.emit();
  }
}
