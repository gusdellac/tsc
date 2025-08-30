/*

  1) Los genéricos permiten escribir código más reutilizable, seguro y flexible.
  2) Se usan con funciones, interfaces, clases y tipos.
  3) Podés restringir los tipos con extends.
  4) Evitan usar any y mantienen la seguridad de tipos.

*/


function identidad<T>(valor: T): T {
  return valor;
}


// indicando el tipo
let numero = identidad<number>(10);    // T = number
let texto = identidad<string>("Hola"); // T = string


// inferencia de tipo
let a = identidad(123);     // T = number
let b = identidad("Hola");  // T = string


// genericos con interfaces (intefaces flexibles)
interface Caja<T> {
  valor: T;
}

const cajaDeNumero: Caja<number> = { valor: 42 };
const cajaDeTexto: Caja<string> = { valor: "Genérico" };