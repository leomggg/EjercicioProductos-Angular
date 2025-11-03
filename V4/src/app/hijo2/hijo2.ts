import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';

@Component({
  selector: 'app-hijo2',
  imports: [CommonModule],
  templateUrl: './hijo2.html',
  styleUrl: './hijo2.css'
})
export class Hijo2 {
  @Input() recibirProductos: Producto[] = [];
  @Output() eliminarProductoHijo2 = new EventEmitter<number>();

  onEliminar(id: number) {
    this.eliminarProductoHijo2.emit(id);
  }
}
