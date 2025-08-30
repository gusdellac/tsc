// Intersection Types (&)
type A = { nombre: string };
type B = { edad: number };
type Persona1 = A & B;
let p: Persona1 = { nombre: "Ana", edad: 25 };