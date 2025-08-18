// Intersection Types (&)
type A = { nombre: string };
type B = { edad: number };
type Persona = A & B;
let p: Persona = { nombre: "Ana", edad: 25 };