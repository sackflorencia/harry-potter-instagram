import type { Post } from "../../interfaces/Post";
import PostThumbnail from "./PostThumbnail";

const PostGrid = ({ posts }: { posts: Post[] }) => {
    return (
        <>
            {posts.map(post => (
                <PostThumbnail key={post.id} image={post.image} postId={post.id} />
            ))}
        </>
    )
}
export default PostGrid;