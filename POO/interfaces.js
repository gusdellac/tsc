"use strict";
// Las interfaces no implementan logica, solo la estructura que se debe seguir
// Al implementar una interface en una clase, la clase esta obligada a definir
// los abtributos (que sean obligatorios) y metodos de la interface
class Auto {
    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
    }
    arrancar() {
        console.log(`${this.marca} ${this.modelo} está arrancando...`);
    }
}
// uso de la interfaz al declarar un objeto, no se utiliza atributo opcional
const user1 = {
    id: 1,
    nombre: "Gustavo",
};
const perro = {
    nombre: "Firulais",
    hacerSonido() {
        console.log("Guau!");
    }
};
const empleado = {
    nombre: "Juan",
    edad: 30,
    puesto: "Desarrollador"
};
const sumar = (x, y) => x + y;
