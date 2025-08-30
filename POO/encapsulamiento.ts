class CuentaBancaria {
  private _saldo: number;

  constructor(saldoInicial: number) {
    this._saldo = saldoInicial;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(valor: number) {
    if (valor >= 0) this._saldo = valor;
  }
}

class Producto {
  private _precio: number = 0;

  get precio(): number {
    return this._precio;
  }

  set precio(valor: number) {
    if (valor < 0) throw new Error("El precio no puede ser negativo");
    this._precio = valor;
  }
}

const producto = new Producto();
producto.precio = 100;  // usa el setter
console.log(producto.precio); // usa el getter → 100