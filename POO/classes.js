"use strict";
/*

  1) Clases → molde de objetos con propiedades y métodos.
  2) Herencia → permite extender funcionalidad.
  3) Modificadores → controlan la visibilidad (public, private, protected).
  4) Getters/Setters → controlan acceso a propiedades.
  5) Static → accesibles sin instanciar.
  6) Abstract + interface → contratos y bases para heredar.

*/
class Persona {
    constructor(nombre, edad, ciudad, id) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        this.id = id;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
// Herencia
class Empleado extends Persona {
    constructor(nombre, edad, ciudad, id, puesto) {
        super(nombre, edad, ciudad, id);
        this.puesto = puesto;
    }
    trabajar() {
        return `${this.nombre} está trabajando como ${this.puesto}`;
    }
}
