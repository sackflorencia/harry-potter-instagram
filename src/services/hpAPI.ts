import type { Character } from "../interfaces/Character";

//chatgpt me agrego los dos servicios, pero yo le agregue las promesas de los tipos como characters
export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(
    "https://hp-api.onrender.com/api/characters"
  );
  return response.json();
}

export async function getHouseCharacters(
  house: string
): Promise<Character[]> {
  const response = await fetch(
    `https://hp-api.onrender.com/api/characters/house/${house}`
  );
  return response.json();
}