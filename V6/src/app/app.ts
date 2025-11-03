import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product-service';
import { Producto } from './producto';
import { Hijo } from './hijo/hijo'
import { Hijo2 } from "./hijo2/hijo2";
import { Cabecera } from './cabecera/cabecera';
import { DirectivaRatonEncima } from './directiva-raton-encima';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Hijo, Hijo2, Cabecera, DirectivaRatonEncima],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  service = new ProductService
  productos: Producto[] = this.service.getLista()
  itemsColorDefault: boolean = false;

  public anadirDeHijo(nuevoProducto: Producto) {
    nuevoProducto.id = this.service.obtenerNuevoID() + 1;
    this.service.anadirProducto(nuevoProducto);
    this.productos = [...this.service.getLista()];
  }

  eliminar = (id: number) => {
    this.service.eliminarProducto(id);
    this.productos = [...this.service.getLista()];
  }

  constructor(){}

  cambiarColorElem() {
    this.itemsColorDefault = !this.itemsColorDefault
  }

}
