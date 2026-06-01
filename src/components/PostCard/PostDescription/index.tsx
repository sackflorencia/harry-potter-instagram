import { Link } from "react-router-dom";
import type { Post } from "../../../interfaces/Post";

//tomando de base postImage, github copilot me hizo el postDescription
//pero me lo hizo sin el username. lo agregamos nosotros. el link tmb lo agregamos
const PostDescription = ({ post, variant }: { post: Post; variant: "feed" | "detail" }) => {
    return (
        <>
            <Link to={`/profile/${post.profileId}`}>
                <strong>{post.username}</strong>
            </Link>
            <p>{post.caption}</p>
            {variant === "feed" && (
                <Link to={`/post/${post.id}`} state={{ post }}>
                    View all {post.comments.length} comments
                </Link>
            )}
        </>
    )
}
export default PostDescription;