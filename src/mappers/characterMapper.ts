import type { Character } from "../interfaces/Character";
import type { Post } from "../interfaces/Post";
import { generateComments } from "./commentMapper";

//chatgpt me ayudo a crear la funcion, yo le agregue los imports y ajuste
//los likes a la cantidad aproximada de estudiantes que hay en hogwarts. tmb le agregue el sistema de comments
export function characterToPost(
  character: Character
): Post {
  const comments = generateComments(character.id);
  return {
    id: character.id,
    username: character.house,
    profileId: character.house.toLowerCase(),
    image: character.image,
    caption: `${character.name} repressenting ${character.house}`,
    likes: Math.floor(Math.random() * 1000),
    comments: comments,
    commentCount: comments.length,
  };
}