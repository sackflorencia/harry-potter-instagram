//chatgpt me dijo que servia tener en la arquitectura un espacio para las constantes
//yo cree la constante de las houses con los datos para no tener que escribirlos en cada 
//fetch de la api
export const HOUSES = [
  {
    id: "gryffindor",
    name: "Gryffindor",
  },
  {
    id: "slytherin",
    name: "Slytherin",
  },
  {
    id: "hufflepuff",
    name: "Hufflepuff",
  },
  {
    id: "ravenclaw",
    name: "Ravenclaw",
  }
] as const;