// 1.- Recibe una palabra
// 2.- Convierte a minúscula
// 3.- Busca vocales (expresión regular vocales)
// 4.- Si tiene todas, devuelve boolean

const checkAllVowels = (word) =>
  word
    .toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(/[aeiou]/);
