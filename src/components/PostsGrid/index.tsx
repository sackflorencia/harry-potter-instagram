import type { Post } from "../../interfaces/Post";
import PostThumbnail from "./PostThumbnail";

const PostGrid = ({ posts }: { posts: Post[] }) => {
    return (
        <>
            {posts.map(post => (
                <PostThumbnail key={post.id} post={post} />
            ))}
        </>
    )
}
export default PostGrid;