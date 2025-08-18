function identidad<T>(valor: T): T {
  return valor;
}
let x = identidad<number>(10);