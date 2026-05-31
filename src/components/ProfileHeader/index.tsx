import type { Profile } from "../../interfaces/Profile";
import ProfileStats from "./ProfileStats";

const ProfileHeader = ({profile}: {profile: Profile}) => {
    return (
        <>
            <img src={profile.avatar} alt={`${profile.name}'s avatar`} />
            <ProfileStats followers={profile.followers} following={profile.following} posts={profile.postsCount} />
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
        </>
    )
}
export default ProfileHeader;