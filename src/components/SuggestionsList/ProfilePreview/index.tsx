import { Link } from "react-router-dom"
import type { Profile } from "../../../interfaces/Profile"
import "./ProfilePreview.css"
import { useEffect, useState } from "react";


/*MODIFICADO CON IA*/
const ProfilePreview = ({ profile }: { profile: Profile }) => {
    const [isFollowing, setIsFollowing] =
            useState(false);
    
        useEffect(() => {
            const savedValue =
                localStorage.getItem(
                    `following-${profile.id}`
                );
    
            setIsFollowing(savedValue === "true");
        }, [profile.id]);
        const handleClick = () => {
        const newValue = !isFollowing;
        setIsFollowing(newValue);
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
            <button className="profile-preview-follow-btn" onClick={handleClick}>
                {isFollowing ? "Following" : "Follow"}
            </button>
        </div>
    )
}
export default ProfilePreview