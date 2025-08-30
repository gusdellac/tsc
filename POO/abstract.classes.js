"use strict";
/*

1) No se puede instanciar directamente
2) Puede contener métodos abstractos → Sin cuerpo, solo firma. Deben implementarse en clases hijas
3) Puede contener métodos normales → Se heredan y pueden sobreescribirse
4) Se usa con extends para heredar

*/
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    // Método normal (puede heredarse directamente)
    mover() {
        console.log(`${this.nombre} se está moviendo...`);
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log("Guau guau!");
    }
}
const firulais = new Perro("Firulais");
firulais.hacerSonido();
firulais.mover();
