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

/* modificado con ia */
const PostCard = ({ post, variant }: PostCardProps) => {
    
    if (variant === "detail") {
        return (
            <article className="post-card-container detail">
                <div className="post-detail-left">
                    <PostImage image={post.image} />
                </div>

                <div className="post-detail-right">
                    <div className="post-detail-header">
                        <PostHeader username={post.username} profileId={post.profileId} avatar={post.avatar} />
                    </div>
                    
                    <div className="post-detail-scrollable">
                        <PostDescription post={post} variant={variant} />
                        <CommentsList comments={post.comments} />
                    </div>
                    
                    <div className="post-detail-footer">
                        <PostActions postId={post.id} likes={post.likes} />
                    </div>
                </div>
            </article>
        );
    }
    return (
        <article className="post-card-container feed">
            <PostHeader username={post.username} profileId={post.profileId} avatar={post.avatar} />
            <PostImage image={post.image} />
            <PostActions postId={post.id} likes={post.likes} />
            <PostDescription post={post} variant={variant} />
        </article>
    );
}

export default PostCard;