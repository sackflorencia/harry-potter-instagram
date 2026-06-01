import { Link } from "react-router-dom"
import type { Profile } from "../../../interfaces/Profile"

const ProfilePreview = ({ profile }: { profile: Profile }) => {
    return (
        <>
            <Link to={`/profile/${profile.id}`}>
                <img src={profile.avatar} alt={profile.name} />
                <strong>{profile.username}</strong>
                <p>{profile.name}</p>
            </Link>
        </>
    )
}
export default ProfilePreview