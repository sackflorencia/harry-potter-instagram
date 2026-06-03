import { Link } from "react-router-dom"
import type { Profile } from "../../../interfaces/Profile"
import "./ProfilePreview.css"

/*MODIFICADO CON IA*/
const ProfilePreview = ({ profile }: { profile: Profile }) => {
    return (
        <div className="profile-preview-wrapper">
            <Link to={`/profile/${profile.id}`} className="profile-preview-link">
                <img src={profile.avatar} alt={profile.name} className="profile-preview-avatar" />
                <div className="profile-preview-info">
                    <strong className="profile-preview-username">{profile.username}</strong>
                    <p className="profile-preview-name">{profile.name}</p>
                </div>
            </Link>
            <button className="profile-preview-follow-btn">Follow</button>
        </div>
    )
}
export default ProfilePreview