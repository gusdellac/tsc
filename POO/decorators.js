"use strict";
/*

tsconfig.json

{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}


1) Orden de ejecución: Los decoradores se ejecutan de abajo hacia arriba y de adentro hacia afuera
2) Experimental: Aunque ampliamente usados, siguen siendo una característica experimental
3) Reflect Metadata: Usado para almacenar metadatos sobre las decoraciones
4) Performance: Los decoradores añaden overhead

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* ############################################################# */
// Decoradores de Clase
function logClass(constructor) {
    console.log(`Clase ${constructor.name} fue definida`);
}
let MiClase = class MiClase {
};
MiClase = __decorate([
    logClass
], MiClase);
/* ############################################################# */
// Decoradores de Método
function logMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Método ${propertyKey} llamado con args:`, args);
        return originalMethod.apply(this, args);
    };
}
class MiClase1 {
    miMetodo(param) {
        // ...
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MiClase1.prototype, "miMetodo", null);
/* ############################################################# */
// Decoradores de Propiedad
function readonly(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
        enumerable: true,
        configurable: false
    });
}
class MiClase2 {
    constructor() {
        this.miPropiedad = "valor inicial";
    }
}
__decorate([
    readonly,
    __metadata("design:type", Object)
], MiClase2.prototype, "miPropiedad", void 0);
/* ############################################################# */
// Decoradores de Parámetro
function validateParam(target, propertyKey, parameterIndex) {
    // Lógica de validación
}
class MiClase3 {
    miMetodo(param) {
        // ...
    }
}
__decorate([
    __param(0, validateParam),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MiClase3.prototype, "miMetodo", null);
/* ############################################################# */
// Decoradores con parámetros (Factory)
function decoradorConParametros(mensaje) {
    return function (target) {
        console.log(`${mensaje}: ${target.name}`);
    };
}
let MiClase4 = class MiClase4 {
};
MiClase4 = __decorate([
    decoradorConParametros("Clase decorada")
], MiClase4);
/* ############################# Ejemplos ################################ */
// Decorador de timing para métodos
function timing() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const end = performance.now();
            console.log(`${propertyKey} ejecutado en ${end - start}ms`);
            return result;
        };
    };
}
class CalculadoraD {
    factorial(n) {
        if (n <= 1)
            return 1;
        return n * this.factorial(n - 1);
    }
}
__decorate([
    timing(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], CalculadoraD.prototype, "factorial", null);
// Decorador de validación
function validateEmail(target, propertyKey) {
    let value;
    const getter = () => value;
    const setter = (newValue) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newValue)) {
            throw new Error(`Email inválido: ${newValue}`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
class UsuarioD {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    validateEmail,
    __metadata("design:type", String)
], UsuarioD.prototype, "email", void 0);
// Decorador de autobind
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class EventHandler {
    handleClick() {
        console.log('Botón clickeado', this);
    }
}
__decorate([
    autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventHandler.prototype, "handleClick", null);
