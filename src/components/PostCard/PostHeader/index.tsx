import { Link } from "react-router-dom";
import "./PostHeader.css";
import "../PostCard.css";
const PostHeader = ({ username, profileId, avatar }: { username: string, profileId: string, avatar: string }) => {
    return (
        <header className="post-header-wrapper">
            <Link to={`/profile/${profileId}`} className="post-header-link">
                {/* Agregué este div para el avatar que pide Figma */}
                <div className="post-header-avatar">
                    <img
                        src={avatar}
                        alt={username}
                        className="post-header-avatar"
                    />
                </div>
                <p className="post-header-username">{username}</p>
            </Link>
        </header>
    )
}
export default PostHeader;