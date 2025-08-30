/*

1) No se puede instanciar directamente
2) Puede contener métodos abstractos → Sin cuerpo, solo firma. Deben implementarse en clases hijas
3) Puede contener métodos normales → Se heredan y pueden sobreescribirse
4) Se usa con extends para heredar

*/

abstract class Animal {
  constructor(public nombre: string) {}

  // Método abstracto (obligatorio de implementar en subclases)
  abstract hacerSonido(): void;

  // Método normal (puede heredarse directamente)
  mover(): void {
    console.log(`${this.nombre} se está moviendo...`);
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau guau!");
  }
}

const firulais = new Perro("Firulais");
firulais.hacerSonido();
firulais.mover(); 