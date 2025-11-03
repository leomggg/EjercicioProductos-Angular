import { Producto } from "./producto";

export class ProductService {
    productos: Producto [] = [
        {id : 1, nombre: "Patatas", precio : 20},
        {id : 2, nombre: "Tomates", precio : 12},
        {id : 3, nombre: "Aceitunas", precio : 25},
        {id : 4, nombre: "Lechuga", precio : 30}
    ]

    getLista(){
        return this.productos;
    }

    eliminarProducto(id: number){
        this.productos = this.productos.filter(pro => pro.id != id)
    }

    anadirProducto(producto:Producto){
        this.productos.push(producto)
    }

    obtenerNuevoID(){
        return this.productos.length > 0 ? Math.max(...this.productos.map(p => p.id)) : 0;
    }
}
