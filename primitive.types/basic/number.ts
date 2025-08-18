/*
Javascript numbers are always one type:
double (64-bit floating point).
*/


// Números enteros:
const entero: number = 10;

// Coma flotante
const decimal: number = 10.5;

// Notación exponencial:
const exponenciales: number = 2.5e3; // 2.5 * 10^3 = 2500

// Notación exponencial negativa:
const exponencialesNegativos: number = 1.5e-2; // 1.5 * 10^-2 = 0.015

// Hexadecimales (base 16) utilizando el prefijo "0x":
const hexadecimales: number = 0xA; // Valor decimal: 10

// Octales (base 8) utilizando el prefijo "0o":
const octales: number = 0o12; // Valor decimal: 10

// Binarios (base 2) utilizando el prefijo "0b":
const binarios: number = 0b1010; // Valor decimal: 10

// Entero grande
const bigIntValue: bigint = 123456789012345678901234567890n;

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);
 
// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;