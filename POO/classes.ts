/*

  1) Clases → molde de objetos con propiedades y métodos.
  2) Herencia → permite extender funcionalidad.
  3) Modificadores → controlan la visibilidad (public, private, protected).
  4) Getters/Setters → controlan acceso a propiedades.
  5) Static → accesibles sin instanciar.
  6) Abstract + interface → contratos y bases para heredar.

*/


class Persona {
  public nombre:string; // Acceso desde cualquier lugar → dentro de la clase, en clases hijas y desde fuera
  private edad:number; // Acceso solo dentro de la misma clase
  protected ciudad:string; // Acceso dentro de la clase y en clases hijas, pero no desde fuera
  readonly id:number; // Marca una propiedad como inmutable, solo lectura

  constructor(nombre:string, edad:number, ciudad:string, id:number){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.id = id;
  }

  saludar():string{
    return `Hola, soy ${this.nombre}`
  }
}

// Herencia
class Empleado extends Persona {
  constructor(nombre: string, edad: number, ciudad: string, id: number, public puesto: string){
    super(nombre, edad, ciudad, id);
  }

  trabajar(): string {
    return `${this.nombre} está trabajando como ${this.puesto}`;
  }
}