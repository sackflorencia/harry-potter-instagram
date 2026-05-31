import type { Profile } from "../../interfaces/Profile";
import FollowButton from "./FollowButton";
import ProfileStats from "./ProfileStats";

//la base de profile header la hice yo pero la parte de followbutton dependiendo de 
//si es mi perfil no, chatgpt
const ProfileHeader = ({profile, isOwnProfile}: {profile: Profile; isOwnProfile: boolean}) => {
    return (
        <>
            <img src={profile.avatar} alt={`${profile.name}'s avatar`} />
            <ProfileStats followers={profile.followers} following={profile.following} posts={profile.postsCount} />
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
            {isOwnProfile ? (
                <button>Edit Profile</button>
            ) : (
                <FollowButton profileId={profile.id} />
            )}
        </>
    )
}
export default ProfileHeader;