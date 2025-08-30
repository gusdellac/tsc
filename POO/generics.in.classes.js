"use strict";
// Tipado flexible y reutilizable
class Repositorio {
    constructor() {
        this.items = [];
    }
    agregar(item) {
        this.items.push(item);
    }
    obtenerTodos() {
        return this.items;
    }
}
// Uso
const repoUsuarios = new Repositorio();
repoUsuarios.agregar("Juan");
repoUsuarios.agregar("Ana");
console.log(repoUsuarios.obtenerTodos()); // ["Juan", "Ana"]
const repoNumeros = new Repositorio();
repoNumeros.agregar(10);
repoNumeros.agregar(20);
console.log(repoNumeros.obtenerTodos()); // [10, 20]
