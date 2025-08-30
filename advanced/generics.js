"use strict";
/*

  1) Los genéricos permiten escribir código más reutilizable, seguro y flexible.
  2) Se usan con funciones, interfaces, clases y tipos.
  3) Podés restringir los tipos con extends.
  4) Evitan usar any y mantienen la seguridad de tipos.

*/
function identidad(valor) {
    return valor;
}
// indicando el tipo
let numero = identidad(10); // T = number
let texto = identidad("Hola"); // T = string
// inferencia de tipo
let a = identidad(123); // T = number
let b = identidad("Hola"); // T = string
const cajaDeNumero = { valor: 42 };
const cajaDeTexto = { valor: "Genérico" };
