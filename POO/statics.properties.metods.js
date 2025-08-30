"use strict";
// metodos y propiedades que no requieren instanciar la clase
class Utilidades {
    static areaCirculo(radio) {
        return this.PI * radio * radio;
    }
}
Utilidades.PI = 3.14;
console.log(Utilidades.PI);
console.log(Utilidades.areaCirculo(10));
