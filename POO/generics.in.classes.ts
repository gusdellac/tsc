// Tipado flexible y reutilizable

class Repositorio<T> {
  private items: T[] = [];

  agregar(item: T) {
    this.items.push(item);
  }

  obtenerTodos(): T[] {
    return this.items;
  }
}

// Uso
const repoUsuarios = new Repositorio<string>();
repoUsuarios.agregar("Juan");
repoUsuarios.agregar("Ana");
console.log(repoUsuarios.obtenerTodos()); // ["Juan", "Ana"]

const repoNumeros = new Repositorio<number>();
repoNumeros.agregar(10);
repoNumeros.agregar(20);
console.log(repoNumeros.obtenerTodos()); // [10, 20]