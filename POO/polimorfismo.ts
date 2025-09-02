/* Polimorfismo de herencia (sobrescritura de métodos) */ 
class CAnimal {
  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class CPerro extends CAnimal {
  hacerSonido(): void {
    console.log("Guau!");
  }
}

class Gato extends CAnimal {
  hacerSonido(): void {
    console.log("Miau!");
  }
}

const animales: CAnimal[] = [new CPerro(), new Gato(), new CAnimal()];

animales.forEach(a => a.hacerSonido());
// Guau!
// Miau!
// Sonido genérico

/* ############################################################# */

/* Polimorfismo por interfaces */
interface Figura {
  area(): number;
}

class Circulo implements Figura {
  constructor(private radio: number) {}
  area(): number {
    return Math.PI * this.radio * this.radio;
  }
}

class Rectangulo implements Figura {
  constructor(private ancho: number, private alto: number) {}
  area(): number {
    return this.ancho * this.alto;
  }
}

const figuras: Figura[] = [new Circulo(5), new Rectangulo(4, 6)];

figuras.forEach(f => console.log(f.area()));
// 78.54...
// 24


/* ############################################################# */

/* Polimorfismo por sobrecarga de métodos (Method Overloading) */
class Calculadora {
  sumar(a: number, b: number): number;
  sumar(a: string, b: string): string;
  sumar(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculadora();
console.log(calc.sumar(2, 3));      // 5
console.log(calc.sumar("Hola ", "Mundo")); // "Hola Mundo"