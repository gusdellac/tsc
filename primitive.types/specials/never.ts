// never → Representa valores que nunca ocurren (funciones que lanzan errores o no terminan).
function error(msg: string): never {
  throw new Error(msg);
}