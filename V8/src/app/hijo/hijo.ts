import { Component, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})

export class Hijo {
  producto: Producto = { id: 0, nombre: '', precio: 0 };
  @Output() enviarProducto = new EventEmitter<Producto>();

  anadirProducto() {
    this.enviarProducto.emit({ ...this.producto });
    this.producto = { id: 0, nombre: '', precio: 0 };
  }

}
