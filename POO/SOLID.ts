/*

S: Una clase = Una responsabilidad.

O: Abierta para extender, cerrada para modificar.

L: Las subclases deben poder sustituir a su padre.

I: Interfaces pequeñas y específicas.

D: Depender de abstracciones, no de implementaciones.

*/


/* Single Responsibility Principle (SRP) → Una clase debe tener una sola razón para cambiar */

// Lógica de negocio
class Invoice {
  constructor(private amount: number) {}

  calculateTotal(): number {
    return this.amount * 1.21;
  }
}

// Persistencia
class InvoiceRepository {
  save(invoice: Invoice): void {
    console.log("Factura guardada en DB");
  }
}

// Uso
const invoice = new Invoice(100);
const repo = new InvoiceRepository();
repo.save(invoice);


// ❌ Ejemplo incorrecto
// class Invoice {
//   constructor(private amount: number) {}

//   // Lógica de negocio
//   calculateTotal(): number {
//     return this.amount * 1.21; // con IVA
//   }

//   // Lógica de persistencia
//   saveToDatabase(): void {
//     console.log("Factura guardada en DB");
//   }
// }
// Problema: La clase hace dos cosas: lógica de facturación y persistencia.

/* ############################################################# */


/* Open/Closed Principle (OCP) → Una clase debe estar abierta para extensión, pero cerrada para modificación */

interface Discount {
  calculate(price: number): number;
}

class RegularDiscount implements Discount {
  calculate(price: number): number {
    return price * 0.9;
  }
}

class VipDiscount implements Discount {
  calculate(price: number): number {
    return price * 0.8;
  }
}

// Uso
function getPrice(price: number, discount: Discount) {
  return discount.calculate(price);
}

console.log(getPrice(100, new RegularDiscount())); // 90
console.log(getPrice(100, new VipDiscount())); // 80

// ❌ Ejemplo incorrecto
// class Discount {
//   calculate(price: number, type: string): number {
//     if (type === "regular") return price * 0.9;
//     if (type === "vip") return price * 0.8;
//     return price;
//   }
// }
// Problema: Cada vez que agregamos un tipo nuevo de descuento debemos modificar la clase.


/* ############################################################# */


/* Liskov Substitution Principle (LSP) → Las clases hijas deben poder sustituir a sus padres sin alterar el comportamiento esperado */

abstract class Bird {}

class FlyingBird extends Bird {
  fly() {
    console.log("Vuelo");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Nado");
  }
}

// Uso
const birds: Bird[] = [new FlyingBird(), new Penguin()];
birds.forEach(bird => {
  if (bird instanceof FlyingBird) bird.fly();
});

// ❌ Ejemplo incorrecto
// class Bird {
//   fly() {
//     console.log("Vuelo");
//   }
// }

// class Penguin extends Bird {
//   fly() { // 💥 Rompe el contrato
//     throw new Error("Los pingüinos no vuelan");
//   }
// }
// Problema: Si un Penguin se usa en lugar de Bird, falla.

/* ############################################################# */


/* Interface Segregation Principle (ISP) → Una interfaz grande debe dividirse en interfaces específicas */

interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}

class OldPrinter implements Printer {
  print(): void {
    console.log("Imprimiendo...");
  }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(): void {
    console.log("Imprimiendo...");
  }
  scan(): void {
    console.log("Escaneando...");
  }
  fax(): void {
    console.log("Enviando fax...");
  }
}


// ❌ Ejemplo incorrecto
// interface Machine {
//   print(): void;
//   scan(): void;
//   fax(): void;
// }

// class OldPrinter implements Machine {
//   print(): void {
//     console.log("Imprimiendo...");
//   }
//   scan(): void {
//     throw new Error("No puedo escanear");
//   }
//   fax(): void {
//     throw new Error("No puedo enviar fax");
//   }
// }
// Problema: OldPrinter se ve obligado a implementar métodos que no usa.

/* ############################################################# */


/* Dependency Inversion Principle (DIP) → Los módulos de alto nivel no deben depender de módulos de bajo nivel */

interface Database {
  connect(): void;
}

class MySQLDatabase implements Database {
  connect() {
    console.log("Conectado a MySQL");
  }
}

class MongoDatabase implements Database {
  connect() {
    console.log("Conectado a MongoDB");
  }
}

class UserService {
  constructor(private db: Database) {}
  getUsers() {
    this.db.connect();
    console.log("Obteniendo usuarios...");
  }
}

// Uso
const mysqlService = new UserService(new MySQLDatabase());
mysqlService.getUsers();

const mongoService = new UserService(new MongoDatabase());
mongoService.getUsers();


// ❌ Ejemplo incorrecto
// class MySQLDatabase {
//   connect() {
//     console.log("Conectado a MySQL");
//   }
// }

// class UserService {
//   private db: MySQLDatabase = new MySQLDatabase(); // 🚨 Acoplado a MySQL
//   getUsers() {
//     this.db.connect();
//     console.log("Obteniendo usuarios...");
//   }
// }
// Problema: UserService depende directamente de MySQLDatabase.