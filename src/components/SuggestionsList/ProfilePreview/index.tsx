import { Link } from "react-router-dom"
import type { Profile } from "../../../interfaces/Profile"
import "./ProfilePreview.css"
import { useState } from "react";


/*MODIFICADO CON IA*/
const ProfilePreview = ({ profile }: { profile: Profile }) => {
    const [following, setFollowing] = useState(false);
    const toggleFollow = () => {
        const newValue = !following;
        setFollowing(newValue);
        localStorage.setItem(
            `following-${profile.id}`,
            String(newValue)
        );
    };
    return (
        <div className="profile-preview-wrapper">
            <Link to={`/profile/${profile.id}`} className="profile-preview-link">
                <img src={profile.avatar} alt={profile.name} className="profile-preview-avatar" />
                <div className="profile-preview-info">
                    <strong className="profile-preview-username">{profile.username}</strong>
                    <p className="profile-preview-name">{profile.name}</p>
                </div>
            </Link>
            <button className="profile-preview-follow-btn" onClick={toggleFollow}>{following ? "Following" : "Follow"}</button>
        </div>
    )
}
export default ProfilePreview