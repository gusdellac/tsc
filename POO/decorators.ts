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

/* ############################################################# */

// Decoradores de Clase
function logClass(constructor: Function) {
  console.log(`Clase ${constructor.name} fue definida`);
}

@logClass
class MiClase {
  // ...
}


/* ############################################################# */

// Decoradores de Método
function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Método ${propertyKey} llamado con args:`, args);
    return originalMethod.apply(this, args);
  };
}

class MiClase1 {
  @logMethod
  miMetodo(param: string) {
    // ...
  }
}

/* ############################################################# */

// Decoradores de Propiedad
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
    enumerable: true,
    configurable: false
  });
}

class MiClase2 {
  @readonly
  miPropiedad = "valor inicial";
}


/* ############################################################# */

// Decoradores de Parámetro
function validateParam(target: any, propertyKey: string, parameterIndex: number) {
  // Lógica de validación
}

class MiClase3 {
  miMetodo(@validateParam param: string) {
    // ...
  }
}

/* ############################################################# */

// Decoradores con parámetros (Factory)
function decoradorConParametros(mensaje: string) {
  return function (target: any) {
    console.log(`${mensaje}: ${target.name}`);
  };
}

@decoradorConParametros("Clase decorada")
class MiClase4 {
  // ...
}

/* ############################# Ejemplos ################################ */


// Decorador de timing para métodos
function timing() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      
      console.log(`${propertyKey} ejecutado en ${end - start}ms`);
      return result;
    };
  };
}

class CalculadoraD {
  @timing()
  factorial(n: number): number {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }
}

// Decorador de validación
function validateEmail(target: any, propertyKey: string) {
  let value: string;
  
  const getter = () => value;
  const setter = (newValue: string) => {
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
  @validateEmail
  email: string;
  
  constructor(email: string) {
    this.email = email;
  }
}

// Decorador de autobind
function autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  @autobind
  handleClick() {
    console.log('Botón clickeado', this);
  }
}