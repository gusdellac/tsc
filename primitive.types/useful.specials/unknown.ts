// Unknown → como any pero más seguro, obliga a validar antes de usar.
const valor: unknown = "hola";
if (typeof valor === "string") {
  console.log(valor.toUpperCase());
}