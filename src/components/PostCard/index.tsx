import type { Post } from "../../interfaces/Post";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostDescription from "./PostDescription";
import CommentsList from "./CommentsList";
import "./PostCard.css";

interface PostCardProps {
    post: Post;
    variant: "feed" | "detail";
}

/* MODIFICADO CON IA */

const PostCard = ({ post, variant }: PostCardProps) => {
    return (
        <article className="post-card-container">
            <PostHeader username={post.username} profileId={post.profileId} avatar={post.avatar} />
            <PostImage image={post.image} />
            <PostActions postId={post.id} likes={post.likes} />
            <PostDescription post={post} variant={variant} />
            {variant === "detail" && (
                <CommentsList comments={post.comments} />
            )}
            </article>
    )
}
export default PostCard;