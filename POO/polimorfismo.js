"use strict";
/* Polimorfismo de herencia (sobrescritura de métodos) */
class CAnimal {
    hacerSonido() {
        console.log("Sonido genérico");
    }
}
class CPerro extends CAnimal {
    hacerSonido() {
        console.log("Guau!");
    }
}
class Gato extends CAnimal {
    hacerSonido() {
        console.log("Miau!");
    }
}
const animales = [new CPerro(), new Gato(), new CAnimal()];
animales.forEach(a => a.hacerSonido());
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.ancho * this.alto;
    }
}
const figuras = [new Circulo(5), new Rectangulo(4, 6)];
figuras.forEach(f => console.log(f.area()));
// 78.54...
// 24
/* ############################################################# */
/* Polimorfismo por sobrecarga de métodos (Method Overloading) */
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
}
const calc = new Calculadora();
console.log(calc.sumar(2, 3)); // 5
console.log(calc.sumar("Hola ", "Mundo")); // "Hola Mundo"
