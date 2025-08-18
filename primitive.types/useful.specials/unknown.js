"use strict";
// Unknown → como any pero más seguro, obliga a validar antes de usar.
const valor = "hola";
if (typeof valor === "string") {
    console.log(valor.toUpperCase());
}
