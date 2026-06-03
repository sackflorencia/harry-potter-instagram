import { Link } from "react-router-dom";
import type { Post } from "../../../interfaces/Post";
import "./PostDescription.css";

//tomando de base postImage, github copilot me hizo el postDescription
//pero me lo hizo sin el username. lo agregamos nosotros. el link tmb lo agregamos
const PostDescription = ({ post, variant }: { post: Post; variant: "feed" | "detail" }) => {
    return (
        <div className="post-description-wrapper">
            <Link to={`/profile/${post.profileId}`} className="post-description-user">
                <strong>{post.username}</strong>
            </Link>
            <p className="post-description-caption">{post.caption}</p>
            {variant === "feed" && (
                <Link to={`/post/${post.id}`} state={{ post }} className="post-description-comments-link">
                    View all {post.comments.length} comments
                </Link>
            )}
        </div>
    )
}
export default PostDescription;