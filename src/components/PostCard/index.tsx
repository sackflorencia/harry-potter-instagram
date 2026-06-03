import type { Post } from "../../interfaces/Post";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostDescription from "./PostDescription";
import CommentsList from "./CommentsList";
import "./PostCard.css";


/* MODIFICADO CON IA */
const PostCard = ({ post }: { post: Post }) => {
    return (
        <article className="post-card-container">
            {/* Aquí traducimos tu interfaz Post a lo que tus hijos esperan */}
            <PostHeader 
                username={post.username} 
                profileId={post.profileId} 
            />
            
            <PostImage image={post.image} />
            
            <PostActions 
                postId={post.id} 
                likes={post.likes} 
            />
            
            <PostDescription 
                post={post} 
                variant="feed" 
            />
            
            {/* Si CommentsList espera un array, se lo pasamos directo */}
            <CommentsList comments={post.comments} />
        </article>
    );
};
export default PostCard;