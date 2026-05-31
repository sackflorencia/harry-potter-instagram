import { useEffect, useState } from "react";
import type { Profile } from "../../interfaces/Profile";
import type { Post } from "../../interfaces/Post";
import { characterToPost } from "../../mappers/characterMapper";
import { houseToProfile } from "../../mappers/houseMapper";
import { getHouseCharacters } from "../../services/hpAPI";
import { useParams } from "react-router-dom";
import { MY_HOUSE } from "../../constants/profile";
import PostGrid from "../../components/PostsGrid";
import ProfileHeader from "../../components/ProfileHeader";
import Sidebar from "../../components/Sidebar";


const ProfilePage = () => {
    const { house } = useParams();
    const isOwnProfile = house === "me";
    const realHouse = isOwnProfile ? MY_HOUSE : house ?? "";
    const [posts, setPosts] = useState<Post[]>([]);
    const [profile, setProfile] = useState<Profile | null>(null);
    useEffect(() => {
        async function loadProfile() {
            const characters =
                await getHouseCharacters(realHouse);

            const posts = characters
                .filter(character => character.image)
                .map(characterToPost);

            setPosts(posts);

            const profile =
                houseToProfile(
                    realHouse,
                    posts.length
                );

            setProfile(profile);
        }

        loadProfile();
    }, [realHouse]);

return (
    <>
        <Sidebar />
        <ProfileHeader />
        <PostGrid posts={posts} />
        <h1>{realHouse}</h1>
    </>
)
}

export default ProfilePage