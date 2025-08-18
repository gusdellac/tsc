// se utiliza para crear una referencia globalmente única a través de la función Symbol():

const firstName = Symbol("name");
const secondName = Symbol("name");
 
// if (firstName === secondName) {
//   //This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
//   // Can't ever happen
// }