"use strict";
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
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
        return this.amount * 1.21;
    }
}
// Persistencia
class InvoiceRepository {
    save(invoice) {
        console.log("Factura guardada en DB");
    }
}
// Uso
const invoice = new Invoice(100);
const repo = new InvoiceRepository();
repo.save(invoice);
class RegularDiscount {
    calculate(price) {
        return price * 0.9;
    }
}
class VipDiscount {
    calculate(price) {
        return price * 0.8;
    }
}
// Uso
function getPrice(price, discount) {
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
class Bird {
}
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
const birds = [new FlyingBird(), new Penguin()];
birds.forEach(bird => {
    if (bird instanceof FlyingBird)
        bird.fly();
});
class OldPrinter {
    print() {
        console.log("Imprimiendo...");
    }
}
class MultiFunctionPrinter {
    print() {
        console.log("Imprimiendo...");
    }
    scan() {
        console.log("Escaneando...");
    }
    fax() {
        console.log("Enviando fax...");
    }
}
class MySQLDatabase {
    connect() {
        console.log("Conectado a MySQL");
    }
}
class MongoDatabase {
    connect() {
        console.log("Conectado a MongoDB");
    }
}
class UserService {
    constructor(db) {
        this.db = db;
    }
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
