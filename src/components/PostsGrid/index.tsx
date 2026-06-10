import type { Post } from "../../interfaces/Post";
import PostThumbnail from "./PostThumbnail";
import './PostsGrid.css'

const PostGrid = ({ posts }: { posts: Post[] }) => {
    return (
        <div className="post-grid-container">
            {posts.map(post => (
                <PostThumbnail key={post.id} post={post} />
            ))}
        </div>
    )
}
export default PostGrid;