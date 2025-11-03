import { Component, Input } from '@angular/core';
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
  @Input() heredarEliminar!: (id: number) => void;

}
