// metodos y propiedades que no requieren instanciar la clase

class Utilidades {
  static PI = 3.14;

  static areaCirculo(radio: number): number {
    return this.PI * radio * radio;
  }
}

console.log(Utilidades.PI);
console.log(Utilidades.areaCirculo(10));
