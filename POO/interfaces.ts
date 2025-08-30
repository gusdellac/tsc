// Las interfaces no implementan logica, solo la estructura que se debe seguir
// Al implementar una interface en una clase, la clase esta obligada a definir
// los abtributos (que sean obligatorios) y metodos de la interface

interface IVehiculo {
  marca:string;
  arrancar():void;
}

class Auto implements IVehiculo {
  public modelo: string;
  public marca: string;

  constructor(modelo:string, marca:string){
    this.modelo = modelo;
    this.marca = marca;
  }

  arrancar(): void {
    console.log(`${this.marca} ${this.modelo} está arrancando...`);     
  }
}



/* ############################################################# */

// inferfaz con atributos obligatorios y opcionales
interface IUsuario {
  id: number;
  nombre: string;
  email?: string; // propiedad opcional
}

// uso de la interfaz al declarar un objeto, no se utiliza atributo opcional
const user1: IUsuario = {
  id: 1,
  nombre: "Gustavo",
};

// metodos en interfaces
interface IAnimal {
  nombre: string;
  hacerSonido(): void;
}

const perro: IAnimal = {
  nombre: "Firulais",
  hacerSonido() {
    console.log("Guau!");
  }
};


// extender inferfaces
interface IPersona {
  nombre: string;
  edad: number;
  direccion?: string;
}

interface IEmpleado extends IPersona {
  puesto: string;
}

const empleado: IEmpleado = {
  nombre: "Juan",
  edad: 30,
  puesto: "Desarrollador"
};

// Interfaces con funciones, para definir la estructura de una funcion
interface ICalculadora {
  (a: number, b: number): number;
}

const sumar: ICalculadora = (x, y) => x + y;
