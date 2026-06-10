import type { Profile } from "../../interfaces/Profile";
import FollowButton from "./FollowButton";
import ProfileStats from "./ProfileStats";
import "./ProfileHeader.css"; 

// la base de profile header la hice yo pero la parte de followbutton dependiendo de 
// si es mi perfil no, chatgpt
const ProfileHeader = ({profile, isOwnProfile}: {profile: Profile; isOwnProfile: boolean}) => {
    return (
        <header className="profile-header-container">
            <div className="profile-header-avatar-column">
                <img 
                    src={profile.avatar} 
                    alt={`${profile.name}'s avatar`} 
                    className="profile-header-avatar-img" 
                />
            </div>

            <div className="profile-header-info-column">
                
                <div className="profile-header-top-row">
                    <h1 className="profile-header-username">{profile.name}</h1>
                    <div className="profile-header-actions">
                        {isOwnProfile ? (
                            <button className="profile-edit-btn">Edit Profile</button>
                        ) : (
                            <FollowButton profileId={profile.id} />
                        )}
                    </div>
                </div>

                <div className="profile-header-stats-row">
                    <ProfileStats 
                        followers={profile.followers} 
                        following={profile.following} 
                        posts={profile.postsCount} 
                    />
                </div>

                <div className="profile-header-bio-row">
                    <p className="profile-header-bio-text">{profile.bio}</p>
                </div>

            </div>
        </header>
    )
}
export default ProfileHeader;