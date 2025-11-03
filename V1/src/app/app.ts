import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product-service';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  service = new ProductService
  productos: Producto[] = this.service.getLista()

  producto: Producto = {
    id : 0,
    nombre : '',
    precio : 0
  }

    public anadir(){
    const nuevoProducto = {...this.producto};
    nuevoProducto.id = this.service.obtenerNuevoID() + 1;
    this.service.anadirProducto(nuevoProducto);
    this.productos = [...this.service.getLista()];
    this.producto = {
      id: 0,
      nombre: '',
      precio:0
    };
  }

  public eliminar(id: number){
    this.service.eliminarProducto(id);
    this.productos = [...this.service.getLista()];
  }

  constructor(){}

}
