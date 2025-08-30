"use strict";
class CuentaBancaria {
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        if (valor >= 0)
            this._saldo = valor;
    }
}
class Producto {
    constructor() {
        this._precio = 0;
    }
    get precio() {
        return this._precio;
    }
    set precio(valor) {
        if (valor < 0)
            throw new Error("El precio no puede ser negativo");
        this._precio = valor;
    }
}
const producto = new Producto();
producto.precio = 100; // usa el setter
console.log(producto.precio); // usa el getter → 100
