import { useEffect, useState } from "react";
import type { Post } from "../../interfaces/Post";
import { getCharacters } from "../../services/hpAPI";
import { characterToPost } from "../../mappers/characterMapper";
import PostsList from "../../components/PostsList";
import Sidebar from "../../components/Sidebar";
import SuggestionsList from "../../components/SuggestionsList";
import type { Profile } from "../../interfaces/Profile";
import { houseToProfile } from "../../mappers/houseMapper";
import { HOUSES } from "../../constants/houses";

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
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

    const profiles = HOUSES.map(house =>
      houseToProfile(house.id, 0)
    );

    setProfiles(profiles);
  }, []);
  return (
    <>
      <Sidebar />
      <PostsList posts={posts} />
      <SuggestionsList profiles={profiles} />
    </>
  )
}

export default FeedPage