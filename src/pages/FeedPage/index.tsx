import { useEffect, useState } from "react";
import type { Post } from "../../interfaces/Post";
import { getCharacters } from "../../services/hpAPI";
import { characterToPost } from "../../mappers/characterMapper";

const FeedPage = () => {
    const [posts, setPosts] = useState<Post[]>([]); 
    useEffect(() => {
    async function loadPosts() {
      try {
        const characters = await getCharacters();

        const posts = characters
          .filter(character => character.house && character.image)
          .map(characterToPost);

        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    }

    loadPosts();
  }, []);
    return (
        <>
        <h1>FeedPage</h1>
        </>
    )
}

export default FeedPage