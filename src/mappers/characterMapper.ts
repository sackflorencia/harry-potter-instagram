import type { Character } from "../interfaces/Character";
import type { Post } from "../interfaces/Post";

//chatgpt me ayudo a crear la funcion, yo le agregue los imports y ajuste
//los likes a la cantidad aproximada de estudiantes que hay en hogwarts
export function characterToPost(
  character: Character
): Post {
  return {
    id: character.id,
    username: character.house,
    image: character.image,
    caption: `${character.name} representando a ${character.house}`,
    likes: Math.floor(Math.random() * 1000),
  };
}