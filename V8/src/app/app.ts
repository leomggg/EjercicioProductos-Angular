import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product-service';
import { Producto } from './producto';
import { Hijo } from './hijo/hijo'
import { Hijo2 } from "./hijo2/hijo2";
import { Cabecera } from './cabecera/cabecera';
import { DirectivaRatonEncima } from './directiva-raton-encima';
import { AvatarDefaultPipe } from './avatar-default-pipe';
import { Formulario } from './formulario/formulario';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Hijo, Hijo2, Cabecera, DirectivaRatonEncima, AvatarDefaultPipe, Formulario],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  service = new ProductService
  productos: Producto[] = this.service.getLista()
  itemsColorDefault: boolean = false;


  // Tarea 8: Formulario
  formEnviado = false;

  mostrarApp() {
    this.formEnviado = true;
  }

  // Tarea 
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

  // Tarea
  cambiarColorElem() {
    this.itemsColorDefault = !this.itemsColorDefault
  }

  //Tarea
  usuario1 = {
    nombre: 'Juan',
    foto: 'https://imgs.search.brave.com/XCtsEdVZrq7Rdoqa254I5QqDlnZ8436CcIxwVkqKjSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lcy53/ZWIuaW1nMy5hY3N0/YS5uZXQvY18zMDBf/MzAwL3BpY3R1cmVz/LzIwLzA0LzI4LzIy/LzQ2LzE0NDUzNTEu/anBn'
  }

  usuario2 = {
    nombre: 'Pepe',
    foto: ''
  }
}

bootstrapApplication(App).catch(err => console.error(err));